import OeuvreSection from "../../components/oeuvre/oeuvre-section.tsx";
import Statistics from "../../components/statistics/statistics.tsx";
import UseisHighlightArtwork from "../../services/isHighlight-artwork.ts";
import {Section} from "../interfaces/section.interface.ts";
import notFoundArtistImage from '../../assets/not-found/artist.png';
import Loader from "../../components/loader/loader.tsx";

function Home() {
    const dataHighlight : Section[] = UseisHighlightArtwork();
    const authorsList = [
        {
            pictureUrl: "https://www.histoire-pour-tous.fr/images/articles/dossiers/biographies/leonard-de-vinci-portrait.jpg",
            name: "Leonardo da Vinci",
            typeOfOeuvre: "Peinture, dessin"
        },
        {
            pictureUrl: "https://www.repro-tableaux.com/kunst/english_school_19th_century/michelangelo_buonarroti_1475-1_hi.jpg",
            name: "Michel-Ange Buonarroti",
            typeOfOeuvre: "Sculpture, peinture"
        },
        {
            pictureUrl: "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_s0273V1962_-_Van_Gogh_Museum.jpg?uselang=fr",
            name: "Vincent van Gogh",
            typeOfOeuvre: "Peinture"
        },
        {
            pictureUrl: "https://memoiredencres.com/wp-content/uploads/2021/02/Photo-de-Pablo-Picasso-600x635.jpg",
            name: "Pablo Picasso",
            typeOfOeuvre: "Peinture, sculpture"
        },
        {
            pictureUrl: "",
            name: "Claude Monet",
            typeOfOeuvre: "Peinture"
        },
        {
            pictureUrl: "",
            name: "Salvador Dalí",
            typeOfOeuvre: "Peinture, sculpture"
        },
        {
            pictureUrl: "",
            name: "Frida Kahlo",
            typeOfOeuvre: "Peinture"
        },
        {
            pictureUrl: "",
            name: "Jackson Pollock",
            typeOfOeuvre: "Peinture"
        },
        {
            pictureUrl: "",
            name: "Andy Warhol",
            typeOfOeuvre: "Peinture, sérigraphie"
        },
        {
            pictureUrl: "",
            name: "Gustav Klimt",
            typeOfOeuvre: "Peinture"
        },
        {
            pictureUrl: "",
            name: "Auguste Rodin",
            typeOfOeuvre: "Sculpture"
        },
        {
            pictureUrl: "",
            name: "Rembrandt van Rijn",
            typeOfOeuvre: "Peinture"
        }
    ];

    return (
        <>
            <Loader></Loader>
            <OeuvreSection title="Les nouveautés"></OeuvreSection>
            <OeuvreSection title="Les populaires" datas={dataHighlight}></OeuvreSection>
            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">Des artistes connues</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere repellendus ut eos dolores similique.</p>
                </div>
                <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
                    {authorsList.map((authorElement) => (
                        <li>
                            <img className="mx-auto h-24 w-24 rounded-full object-cover" src={authorElement.pictureUrl} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src=notFoundArtistImage;}} alt=""/>
                            <h3 className="mt-4 text-center text-base font-semibold leading-7 tracking-tight dark:text-white text-gray-900">{authorElement.name}</h3>
                            <p className="text-sm text-center leading-6 text-gray-600 dark:text-gray-300">{authorElement.typeOfOeuvre}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <OeuvreSection title="Les oeuvres de ces artistes" nameButton="En savoir plus"></OeuvreSection>
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img src="https://images.unsplash.com/photo-1637578035851-c5b169722de1?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="aspect-[5/2] w-full object-cover xl:rounded-3xl"/>
            </div>
            <Statistics
                title="Des statistiques qui choquent"
                description="Lorem ipsum dolor sit amet consect adipisicing possimus."
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
    )
}

export default Home;