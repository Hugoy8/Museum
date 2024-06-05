import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArtworkInterface} from "../models/oeuvre-single.interface.ts";
import {Section} from "../models/section.interface.ts";
import {toast} from "sonner";

const useArtworkById = () => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<ArtworkInterface | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        const getArtworkDataById = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id);
                if (!response.ok) {
                    toast.error('Failed to fetch artwork data');
                    return undefined;
                }
                const data: ArtworkInterface = await response.json();
                setData(data);
            } catch (e) {
                setData(null);
            } finally {
                setIsLoading(false);
            }
        }
        getArtworkDataById().then(r =>
            console.log(r)
        );
    }, [id]);

    return { data, isLoading };
}

const getDepartmentId = async (departmentName: string)  => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    if (!response.ok) {
        toast.error('Failed to fetch department data');
        return undefined;
    }
    const data = await response.json();
    const department = data.departments.find((department: { displayName: string; }) => department.displayName === departmentName);
    if (department === undefined) {
        return undefined;
    }
    return department.departmentId;

}

const fetchSimilarArtworks = async (departmentId: number | undefined, search: string | undefined, currentArtwork: number | undefined) => {
    let url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?';
    if (departmentId !== undefined) {
        url += `departmentId=${departmentId}&`;
    }
    if (search !== undefined) {
        url += `q=${search}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        toast.error('Failed to fetch similar artworks');
        return { artworks: [], isLoadingSuggestion: false };
    }
    const data = await response.json();
    const suggestions = data.objectIDs ? data.objectIDs.slice(0, 8) : [];
    if (currentArtwork !== undefined) {
        const index = suggestions.indexOf(currentArtwork);
        if (index > -1) {
            suggestions.splice(index, 1);
        }
    }
    const artworks: Section[] = (await Promise.all(suggestions.map(async (id: number) => {
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id);
        if (!response.ok) {
            toast.error('Failed to fetch artwork data');
            return undefined;
        }
        const artwork = await response.json();
        return {
            title: artwork.title,
            ObjectID: artwork.objectID,
            artistDisplayName: artwork.artistDisplayName,
            objectDate: artwork.objectDate,
            primaryImage: artwork.primaryImage
        };
    }))).filter(artwork => artwork !== undefined) as Section[];
    return { artworks, isLoadingSuggestion: false };
};

export {useArtworkById, getDepartmentId, fetchSimilarArtworks};