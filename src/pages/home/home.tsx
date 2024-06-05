import OeuvreSection from "../../components/oeuvre/oeuvre-section.tsx";
import Statistics from "../../components/statistics/statistics.tsx";
import notFoundArtistImage from '../../assets/not-found/artist.png';
import Loader from "../../components/loader/loader.tsx";
import {authorsList} from "./auhtorList.ts";
import {useEffect, useState} from "react";
import {getArtworkByDepartment, getArtworkFromArtists} from "../../services/home.service.ts";
import {Section} from "../interfaces/section.interface.ts";
import {getDepartmentId} from "../../services/oeuvre-single.service.ts";
import { UseisHighlightArtwork} from "../../services/isHighlight-artwork.ts";

/**
 * Home component
 */
function Home() {
    const {dataHighlight, isLoading} = UseisHighlightArtwork();
    const [artsofAfricaOceaniaAmericasDepartment, setArtsOfAfricaOceaniaAmericasDepartment] = useState<Section[]>([]);
    const [artworkAncientNearEasternArtDepartment, setArtworkAncientNearEasternArtDepartment] = useState<Section[]>([]);
    const [artworksDrawingsAndPrints, setArtworksDrawingsAndPrints] = useState<Section[]>([]);
    const [artworksFromArtists, setArtworksFromArtists] = useState<Section[]>([]);
    useEffect(() => {
        /**
         * Fetch data from the API with different departments and artists
         */
        const fetchData = async () => {
            const artsofAfricaOceaniaAmericasDepartmentId = await getDepartmentId('Arts of Africa, Oceania, and the Americas');
            const artworks = await getArtworkByDepartment(artsofAfricaOceaniaAmericasDepartmentId);
            setArtsOfAfricaOceaniaAmericasDepartment(artworks);

            const ancientNearEasternArtDepartmentId = await getDepartmentId('Ancient Near Eastern Art');
            const artworksAncientNearEasternArt = await getArtworkByDepartment(ancientNearEasternArtDepartmentId);
            setArtworkAncientNearEasternArtDepartment(artworksAncientNearEasternArt);

            const drawingsAndPrintsDepartmentId = await getDepartmentId('Drawings and Prints');
            const artworksDrawingsAndPrints = await getArtworkByDepartment(drawingsAndPrintsDepartmentId);
            setArtworksDrawingsAndPrints(artworksDrawingsAndPrints);

            const artworksFromArtists = await getArtworkFromArtists('Leonardo da Vinci');
            setArtworksFromArtists(artworksFromArtists);

        };
        fetchData().then(r => console.log(r));
    }, []);
    return (
        <>
            <div className="relative mt-8 sm:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img src="https://images.unsplash.com/photo-1616432725307-b93cc6098dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="aspect-[5/2] w-full object-cover xl:rounded-3xl"/>
                <span
                    className="absolute top-1/2 left-1/2 text-white text-center max-sm:text-2xl lg:text-6xl text-4xl font-bold dark:text-white tracking-tight"
                    style={{transform: "translate(-50%, -50%)"}}>Bienvenue dans votre musée virtuel</span>
            </div>

            {isLoading ? (
                <Loader></Loader>
            ) : (
                <>
                    <OeuvreSection title="Les populaires" datas={dataHighlight}></OeuvreSection>
                    <OeuvreSection title="Ancient Near Eastern Art"
                                   datas={artworkAncientNearEasternArtDepartment}></OeuvreSection>
                    <OeuvreSection title="Arts of Africa, Oceania, and the Americas"
                                   datas={artsofAfricaOceaniaAmericasDepartment}></OeuvreSection>
                    <OeuvreSection title="Drawings and Prints" datas={artworksDrawingsAndPrints}></OeuvreSection>


                    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">Liste
                                d'artistes connues</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Découvrez nos œuvres d'artistes reconnus à travers le monde.</p>
                        </div>
                        <ul role="list"
                            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
                            {authorsList.map((authorElement, index) => (
                                <li key={index}>
                                    <img className="mx-auto h-24 w-24 rounded-full object-cover"
                                         src={authorElement.pictureUrl} onError={({currentTarget}) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = notFoundArtistImage;
                                    }} alt=""/>
                                    <h3 className="mt-4 text-center text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900">{authorElement.name}</h3>
                                    <p className="text-sm text-center leading-6 text-gray-600 dark:text-gray-300">{authorElement.typeOfOeuvre}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <OeuvreSection title="Les oeuvres de ces artistes" nameButton="En savoir plus" datas={artworksFromArtists}></OeuvreSection>
                    <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                        <img
                            src="https://images.unsplash.com/photo-1637578035851-c5b169722de1?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="" className="aspect-[5/2] w-full object-cover xl:rounded-3xl"/>
                    </div>
                    <Statistics
                        title="Des statistiques qui choquent"
                        description="Découvrez les chiffres du marché de l'art en 2021, des chiffres qui ne laissent pas indifférents"
                        information={[
                            {
                                title: "États-Unis",
                                description: "Pays dominant le marché de l'art"
                            },
                            {
                                title: "44%",
                                description: "Part de marché mondial"
                            },
                            {
                                title: "$11.2B",
                                description: "Valeur des ventes aux enchères"
                            },
                            {
                                title: "+5%",
                                description: "Augmentation annuelle"
                            }
                        ]}></Statistics>
                </>
            )}
        </>
    )
}

export default Home;