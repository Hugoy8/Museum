import {ArtworkInterface} from "../pages/interfaces/oeuvre-single.interface.ts";
import {toast} from "sonner";

const searchArtworkByTitle = async (title: string): Promise<number[]> => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${title}`);
    if (!response.ok) {
        toast.error('Failed to fetch artwork data by');
    }
    const data = await response.json();
    return data.objectIDs || [];
}


const getArtworkDataById = async (id: number) => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id);
    if (!response.ok) {
        return undefined;
    }
    try {
        const data: ArtworkInterface = await response.json();
        return {
            id: data.objectID,
            title: data.title,
            artistDisplayName: data.artistDisplayName,
            objectDate: data.objectDate,
            primaryImage: data.primaryImage
        };
    } catch (e) {
        toast.error(e);
    }
}

const searchArtworkByFilters = async (title: string, isHighlight: boolean, hasImages: boolean, departmentId: number | null, geoLocation: string, dateBegin: number | null, dateEnd: number | null): Promise<number[]> => {
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${title}`;
    if (isHighlight) {
        url += `&isHighlight=true`;
    }
    if (hasImages) {
        url += `&hasImages=true`;
    }
    if (departmentId) {
        url += `&departmentId=${departmentId}`;
    }
    if (geoLocation) {
        url += `&geoLocation=${encodeURIComponent(geoLocation)}`;
    }
    if (dateBegin) {
        url += `&dateBegin=${dateBegin}`;
    }
    if (dateEnd) {
        url += `&dateEnd=${dateEnd}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        toast.error('Failed to fetch artwork data by search filters');
    }
    const data = await response.json();
    return data.objectIDs || [];
};


const fetchDepartments = async (setDepartments: React.Dispatch<React.SetStateAction<Department[]>>) => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    if (!response.ok) {
        toast.error('Failed to fetch department data');
        return undefined;
    }
    try {
        const data = await response.json();
        setDepartments(data.departments);
    } catch (e) {
        toast.error(e);
    }
};

export interface Department { departmentId: number, displayName: string }


export {searchArtworkByTitle, getArtworkDataById, searchArtworkByFilters, fetchDepartments};