import { useEffect, useState } from "react";
import { ArtworkInterface } from "../pages/interfaces/oeuvre-single.interface.ts";
import {SearchInterface} from "../pages/interfaces/search.interface.ts";
import {Section} from "../pages/interfaces/section.interface.ts";

function shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const getArtworkDataById = async (id: number) => {
    try {
        const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id);
        if (!response.ok) {
            throw new Error('API response not OK');
        }
        const data: ArtworkInterface = await response.json();
        return {ObjectID: data.objectID, title: data.title, artistDisplayName: data.artistDisplayName, objectDate: data.objectDate, primaryImage: data.primaryImage};
    } catch (e) {
        console.error(e);
    }
}

const UseisHighlightArtwork = () => {
    const [data, setData] = useState<Section[]>([]);

    useEffect(() => {
        const getArtworkIfisHighlight = async () => {
            try {
                const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q="sunflower"');
                if (!response.ok) {
                    throw new Error('API response not OK');
                }
                const searchData: SearchInterface = await response.json();
                const shuffledIDs = shuffle(searchData.objectIDs);
                const artworks: Section[] = [];
                for (let i = 0; i < 4; i++) {
                    const artworkData = await getArtworkDataById(shuffledIDs[i]);
                    if (artworkData !== undefined) {
                        artworks.push(artworkData);
                    }
                }
                setData(artworks);
            } catch (e) {
                console.error(e);
            }
        }
        getArtworkIfisHighlight().then(r =>
            console.log(r)
        );
    }, []);
    console.log(data);
    return data;
}

export default UseisHighlightArtwork;