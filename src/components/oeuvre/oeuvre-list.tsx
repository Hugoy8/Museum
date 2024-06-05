import Oeuvre from "./oeuvre.tsx";
import {useEffect, useState} from "react";
import Loader from "../loader/loader.tsx";
import {Section} from "../../pages/interfaces/section.interface.ts";
import {getDepartmentId} from "../../services/oeuvre-single.service.ts";
import {getAllArtworkByDepartment} from "../../services/oeuvre-list.service.ts";
import {getArtworkDataById} from "../../services/search.service.tsx";
import {toast} from "sonner";

function OeuvreList() {
    const [loading, setLoading] = useState(true);
    const [artworks, setArtworks] = useState<Section[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [allResults, setAllResults] = useState<number[]>([]);
    const artworksPerPage = 20;

    const fetchArtworks = async (results: number[], page: number) => {
        setLoading(true);
        try {
            const startIndex = (page - 1) * artworksPerPage;
            const endIndex = startIndex + artworksPerPage;
            const currentResults = results.slice(startIndex, endIndex);

            const artworkPromises = currentResults.map(id => getArtworkDataById(id));
            const artworkData = await Promise.all(artworkPromises);
            setArtworks(artworkData.filter(data => data !== undefined));
        } catch (error) {
            toast.error('Une erreur s\'est produite lors de la récupération des œuvres d\'art.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const artsofAfricaOceaniaAmericasDepartmentId = await getDepartmentId('Arts of Africa, Oceania, and the Americas');
                const artworksAfricaOceaniaAmericas = await getAllArtworkByDepartment(artsofAfricaOceaniaAmericasDepartmentId);
                console.log(artworksAfricaOceaniaAmericas);
                const ancientNearEasternArtDepartmentId = await getDepartmentId('Ancient Near Eastern Art');
                const artworksAncientNearEasternArt = await getAllArtworkByDepartment(ancientNearEasternArtDepartmentId);
                console.log(artworksAncientNearEasternArt);
                const drawingsAndPrintsDepartmentId = await getDepartmentId('Drawings and Prints');
                const artworksDrawingsAndPrints = await getAllArtworkByDepartment(drawingsAndPrintsDepartmentId);
                console.log(artworksDrawingsAndPrints);
                const allArtworks = [
                    ...artworksAfricaOceaniaAmericas,
                    ...artworksAncientNearEasternArt,
                    ...artworksDrawingsAndPrints
                ].map(artwork => artwork.ObjectID);

                setAllResults(allArtworks);
                setTotalPages(Math.ceil(allResults.length / artworksPerPage));
                fetchArtworks(allArtworks, currentPage);
            } catch (error) {
                toast.error('Une erreur s\'est produite lors de la récupération des œuvres d\'art.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const generatePageNumbers = (currentPage: number, totalPages: number) => {
        const pages = [1, 2, 3, totalPages - 2, totalPages - 1, totalPages];

        if (currentPage > 3 && currentPage < totalPages - 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else if (currentPage === 3) {
            pages.push(4);
        } else if (currentPage === totalPages - 2) {
            pages.push(totalPages - 3);
        }

        pages.sort((a, b) => a - b);

        const uniquePages = Array.from(new Set(pages)).filter(page => page > 0 && page <= totalPages);

        let pagesWithDots: (string | number)[] = [];
        uniquePages.forEach((page, index) => {
            if (index < uniquePages.length - 1 && uniquePages[index + 1] - page > 1) {
                pagesWithDots.push(page, '...');
            } else {
                pagesWithDots.push(page);
            }
        });

        return pagesWithDots;
    };


    return (
        <>
            {loading ? (
                <Loader></Loader>
            ) : (
                <div>
                    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="md:flex md:items-center md:justify-between">
                            <h2 className="text-2xl font-bold dark:text-white tracking-tight text-gray-900">Toutes nos
                                oeuvres</h2>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
                            {artworks.map((artwork: Section) => (
                                <Oeuvre id={artwork.ObjectID} title={artwork.title} author={artwork.artistDisplayName}
                                        date={artwork.objectDate} picture={artwork.primaryImage}></Oeuvre>
                            ))}
                        </div>

                        <nav
                            className="flex mt-12 items-center justify-between dark:border-gray-500 border-t border-gray-200 px-4 sm:px-0">
                            <div className="-mt-px flex w-0 flex-1">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">
                                    <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Précédent
                                </button>
                            </div>
                            <div className="hidden md:-mt-px md:flex">
                                {generatePageNumbers(currentPage, totalPages).map((page, index) => (
                                    typeof page === 'number' ? (
                                        <button
                                            key={index}
                                            onClick={() => handlePageChange(page)}
                                            className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${currentPage === page ? 'border-indigo-500 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400' : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-700'}`}
                                        >
                                            {page}
                                        </button>
                                    ) : (
                                        <span key={index}
                                              className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 dark:text-gray-400">...</span>
                                    )
                                ))}
                            </div>
                            <div className="-mt-px flex w-0 flex-1 justify-end">
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">
                                    Suivant
                                    <svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                         aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    )
}

export default OeuvreList;