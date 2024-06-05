import {toast} from "sonner";
import {Section} from "../models/section.interface.ts";
import {getArtworkDataById} from "./isHighlight-artwork.ts";
/**
 * Get artwork by department
 * @param departmentId - Department ID
 */
const getArtworkByDepartmentId = async (departmentId: number) => {
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=""`;
    if (departmentId) {
        url += `&departmentId=${departmentId}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        toast.error('Failed to fetch artwork data');
    }
    const data = await response.json();
    if (data && data.objectIDs && data.objectIDs.length > 0){
        const artworks = data.objectIDs.slice(0, 4);
        const artworkData: (Section | undefined)[] = await Promise.all(
            artworks.map(async (id: number) => {
                return await getArtworkDataById(id);
            }));
        const validArtworkData: Section[] = artworkData.filter((artwork): artwork is Section => artwork !== undefined);
        return validArtworkData || [];
    }

    return [];
};

export { getArtworkByDepartmentId };