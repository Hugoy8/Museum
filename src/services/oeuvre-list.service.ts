import {toast} from "sonner";
import {Section} from "../pages/interfaces/section.interface.ts";
import {getArtworkDataById} from "./isHighlight-artwork.ts";

const getAllArtworkByDepartment = async (departmentId: number) => {
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=""`;
    if (departmentId) {
        url += `&departmentId=${departmentId}&hasImages=true`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        toast.error('Failed to fetch artwork data');
    }
    const data = await response.json();
    const artworks = data.objectIDs.slice(0, 100);
    const artworkData: (Section | undefined)[] = await Promise.all(
        artworks.map(async (id: number) => {
            return await getArtworkDataById(id);
        }));
    const validArtworkData: Section[] = artworkData.filter((artwork): artwork is Section => artwork !== undefined);
    return validArtworkData || [];
};

export { getAllArtworkByDepartment };