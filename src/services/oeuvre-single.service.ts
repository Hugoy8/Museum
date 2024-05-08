import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ArtworkInterface} from "../pages/interfaces/oeuvre-single.interface.ts";

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
                    throw new Error('API response not OK');
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

export default useArtworkById;