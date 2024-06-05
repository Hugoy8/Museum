import { useEffect, useState } from "react";
import { ArtworkInterface } from "../pages/interfaces/oeuvre-single.interface.ts";
import {SearchInterface} from "../pages/interfaces/search.interface.ts";
import {Section} from "../pages/interfaces/section.interface.ts";
import {toast} from "sonner";

function shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const getArtworkDataById = async (id: number) => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id);
    if (!response.ok) {
        return undefined;
    }
    try {
        const data: ArtworkInterface = await response.json();
        return {ObjectID: data.objectID, title: data.title, artistDisplayName: data.artistDisplayName, objectDate: data.objectDate, primaryImage: data.primaryImage};
    } catch (e) {
        toast.error(e);
    }
}

const UseisHighlightArtwork = () => {
    const [dataHighlight, setDataHighlight] = useState<Section[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getArtworkIfisHighlight = async () => {
            const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=""');
            if (!response.ok) {
                toast.error('Failed to fetch artwork data');
            }
            try {
                const searchData: SearchInterface = await response.json();
                const shuffledIDs = shuffle([...searchData.objectIDs]);
                const artworks: Section[] = [];
                for (let i = 0; i < 12; i++) {
                    const artworkData = await getArtworkDataById(shuffledIDs[i]);
                    if (artworkData !== undefined) {
                        artworks.push(artworkData);
                    }
                }
                setDataHighlight(artworks);
                setIsLoading(false);
            } catch (e) {
                setDataHighlight([]);
                setIsLoading(false);
                toast.error(e);
            }
        }
        getArtworkIfisHighlight().then(r => toast.success('Artwork data fetched successfully'));
    }, []);

    return {dataHighlight, isLoading};
}

export {UseisHighlightArtwork, getArtworkDataById} ;