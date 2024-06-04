import { useState, useEffect } from 'react';
import {
    getArtworkDataById,
    searchArtworkByFilters,
    fetchDepartments
} from "../../services/search.service.tsx";
import { ArtworkInterface } from "../interfaces/oeuvre-single.interface.ts";
import Oeuvre from "../../components/oeuvre/oeuvre.tsx";
import { artworkResultSearch } from "../interfaces/search.interface.ts";

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [allResults, setAllResults] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [artworks, setArtworks] = useState<ArtworkInterface[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [isHighlight, setIsHighlight] = useState(false);
    const [hasImages, setHasImages] = useState(false);
    const [tags, setTags] = useState(false);
    const [departmentId, setDepartmentId] = useState<number | null>(null);
    const [departments, setDepartments] = useState<string[]>([]);
    const [geoLocation, setGeoLocation] = useState('');
    const [dateBegin, setDateBegin] = useState<number | null>(null);
    const [dateEnd, setDateEnd] = useState<number | null>(null);

    const artworksPerPage = 20;

    useEffect(() => {
        fetchDepartments(setDepartments);
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleGeoLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGeoLocation(event.target.value);
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            if (name === 'isHighlight') setIsHighlight(checked);
            if (name === 'hasImages') setHasImages(checked);
        } else if (name === 'departmentId') {
            setDepartmentId(value ? parseInt(value) : null);
        }
    };

    const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (dateBegin && dateEnd && dateBegin > dateEnd) {
            setError('La date de début doit être avant la date de fin.');
            return;
        }

        setLoading(true);
        try {
            const results = await searchArtworkByFilters(searchTerm ? searchTerm : " ", isHighlight, hasImages, departmentId, geoLocation, dateBegin, dateEnd, tags);
            setAllResults(results);
            setCurrentPage(1);
            fetchArtworks(results, 1);
        } catch (e) {
            console.error(e);
            setError('Une erreur s\'est produite lors de la récupération des œuvres d\'art.');
        } finally {
            setLoading(false);
        }
    };

    const fetchArtworks = async (results: number[], page: number) => {
        setLoading(true);
        setError(null);
        try {
            const startIndex = (page - 1) * artworksPerPage;
            const endIndex = startIndex + artworksPerPage;
            const currentResults = results.slice(startIndex, endIndex);

            const artworkPromises = currentResults.map(id => getArtworkDataById(id));
            const artworkData = await Promise.all(artworkPromises);
            setArtworks(artworkData.filter(data => data !== undefined));
        } catch (e) {
            setError('An error occurred while fetching the artworks.');
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        fetchArtworks(allResults, newPage);
    };

    return (
        <>
            <form className="max-w-md mx-auto" onSubmit={handleSearchSubmit}>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search"
                           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Search Artworks..."
                           value={searchTerm} onChange={handleSearchChange}/>
                    <button type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                    </button>
                </div>
                <div className="mt-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="isHighlight"
                            checked={isHighlight}
                            onChange={handleFilterChange}
                            className="form-checkbox"
                        />
                        <span className="ml-2">Is Highlight</span>
                    </label>
                    <label className="inline-flex items-center ml-4">
                        <input
                            type="checkbox"
                            name="hasImages"
                            checked={hasImages}
                            onChange={handleFilterChange}
                            className="form-checkbox"
                        />
                        <span className="ml-2">Has Images</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="tags"
                            checked={tags}
                            onChange={(e) => setTags(e.target.checked)}
                            className="form-checkbox"
                        />
                        <span className="ml-2">Tags</span>
                    </label>
                    <select
                        name="departmentId"
                        value={departmentId || ''}
                        onChange={handleFilterChange}
                        className="block w-full mt-4 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select Department</option>
                        {departments.map(department => (
                            <option key={department.departmentId} value={department.departmentId}>
                                {department.displayName}
                            </option>
                        ))}
                    </select>
                    <div className="mt-4">
                        <input
                            type="text"
                            name="geoLocation"
                            value={geoLocation}
                            onChange={handleGeoLocationChange}
                            className="block w-full mt-4 p-2 border border-gray-300 rounded-md"
                            placeholder="Geo Location"
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="number"
                            name="dateBegin"
                            value={dateBegin || ''}
                            onChange={(e) => setDateBegin(e.target.value ? parseInt(e.target.value) : null)}
                            className="block w-full mt-4 p-2 border border-gray-300 rounded-md"
                            placeholder="Date Begin"
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            type="number"
                            name="dateEnd"
                            value={dateEnd || ''}
                            onChange={(e) => setDateEnd(e.target.value ? parseInt(e.target.value) : null)}
                            className="block w-full mt-4 p-2 border border-gray-300 rounded-md"
                            placeholder="Date End"
                        />
                    </div>
                </div>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
                {artworks.map((artwork: artworkResultSearch) => (
                    <Oeuvre
                        key={artwork.id}
                        id={artwork.id}
                        title={artwork.title}
                        author={artwork.artistDisplayName}
                        date={artwork.objectDate}
                        picture={artwork.primaryImage}
                    />
                ))}
            </div>

            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-sm">
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    {Array.from({ length: Math.ceil(allResults.length / artworksPerPage) }, (_, index) => (
                        <li key={index + 1}>
                            <button
                                onClick={() => handlePageChange(index + 1)}
                                className={`flex items-center justify-center px-3 h-8 leading-tight ${currentPage === index + 1 ? 'text-blue-600 border-blue-300 bg-blue-50' : 'text-gray-500 bg-white border-gray-300'} hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === Math.ceil(allResults.length / artworksPerPage)}
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Next</span>
                            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Search;
