import {getArtworkDataById} from "./isHighlight-artwork.ts";
import {Section} from "../pages/interfaces/section.interface.ts";

const getArtworkByDepartment = async (departmentId: number) => {
    let url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=""`;
    if (departmentId) {
        url += `&departmentId=${departmentId}&hasImages=true`;
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('API response not OK');
    }
    const data = await response.json();
    const artworks = data.objectIDs.slice(0, 4);
    const artworkData: (Section | undefined)[] = await Promise.all(
        artworks.map(async (id: number) => {
            return await getArtworkDataById(id);
        }));
    const validArtworkData: Section[] = artworkData.filter((artwork): artwork is Section => artwork !== undefined);
    return validArtworkData || [];
};

export { getArtworkByDepartment };