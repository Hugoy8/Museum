import Oeuvre from "../../components/oeuvre/oeuvre.tsx";

function Search() {
    return (
        <>
            <div className="relative mt-12 sm:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img src="https://images.unsplash.com/photo-1572953109213-3be62398eb95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="aspect-[5/2] w-full object-cover xl:rounded-3xl"/>
                <span className="absolute top-1/2 left-1/2 text-white text-6xl font-bold dark:text-white tracking-tight whitespace-nowrap" style={{transform: "translate(-50%, -50%)"}}>Une recherche personnalisé</span>
            </div>
            <div className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-24">
                <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Votre recherche</label>
                <div className="flex justify-center items-end gap-x-1 w-full">
                    <div className="relative mt-2 rounded-md shadow-sm w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 29 22" aria-hidden="true" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.74951 0.19458H27.519C27.8003 0.19458 28.0229 0.280518 28.187 0.452393C28.3589 0.624268 28.4448 0.85083 28.4448 1.13208V20.843C28.4448 21.1243 28.3589 21.3469 28.187 21.511C28.0229 21.6829 27.8003 21.7688 27.519 21.7688H1.74951C1.46826 21.7688 1.2417 21.6829 1.06982 21.511C0.897949 21.3469 0.812012 21.1243 0.812012 20.843V1.13208C0.812012 0.85083 0.897949 0.624268 1.06982 0.452393C1.2417 0.280518 1.46826 0.19458 1.74951 0.19458ZM3.03857 2.0813C2.81201 2.0813 2.69873 2.19458 2.69873 2.42114V19.5422C2.69873 19.7688 2.81201 19.8821 3.03857 19.8821H26.2183C26.4448 19.8821 26.5581 19.7688 26.5581 19.5422V2.42114C26.5581 2.19458 26.4448 2.0813 26.2183 2.0813H3.03857ZM4.65576 3.34692H24.6128C25.0737 3.34692 25.3042 3.57349 25.3042 4.02661V17.9485C25.3042 18.4016 25.0737 18.6282 24.6128 18.6282H4.65576C4.19482 18.6282 3.96436 18.4016 3.96436 17.9485V4.02661C3.96436 3.57349 4.19482 3.34692 4.65576 3.34692ZM5.40576 4.53052C5.23389 4.53052 5.14795 4.62036 5.14795 4.80005V17.175C5.14795 17.3547 5.23389 17.4446 5.40576 17.4446H23.8511C24.0308 17.4446 24.1206 17.3547 24.1206 17.175V4.80005C24.1206 4.62036 24.0308 4.53052 23.8511 4.53052H5.40576ZM24.4136 15.8743V17.0344C24.4136 17.4094 24.3159 17.6829 24.1206 17.8547C23.9253 18.0188 23.6714 18.1008 23.3589 18.1008H5.56982C5.25732 18.1008 5.00342 18.0188 4.80811 17.8547C4.62061 17.6829 4.52686 17.4094 4.52686 17.0344V16.0969L8.00732 12.9446C8.20264 12.7727 8.39404 12.6477 8.58154 12.5696C8.77686 12.4836 8.97607 12.4407 9.1792 12.4407C9.39795 12.4407 9.61279 12.4836 9.82373 12.5696C10.0347 12.6477 10.2339 12.7766 10.4214 12.9563L12.1089 14.4915L16.2456 10.7883C16.4487 10.593 16.6636 10.4563 16.8901 10.3782C17.1245 10.2922 17.3706 10.2493 17.6284 10.2493C17.8784 10.2493 18.1167 10.2961 18.3433 10.3899C18.5776 10.4758 18.7964 10.6165 18.9995 10.8118L24.4136 15.8743ZM10.6206 10.8938C10.0269 10.8938 9.51904 10.6829 9.09717 10.261C8.67529 9.8313 8.46436 9.32349 8.46436 8.73755C8.46436 8.1438 8.67529 7.63599 9.09717 7.21411C9.51904 6.79224 10.0269 6.5813 10.6206 6.5813C11.2144 6.5813 11.7222 6.79224 12.144 7.21411C12.5659 7.63599 12.7769 8.1438 12.7769 8.73755C12.7769 9.32349 12.5659 9.8313 12.144 10.261C11.7222 10.6829 11.2144 10.8938 10.6206 10.8938Z"
                                    fill="#9CA3AF"/>
                            </svg>
                        </div>
                        <input type="text" name="search" id="search"
                               className="block w-full dark:text-white dark:bg-white/5 dark:ring-white/10 rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               placeholder="Rechercher une oeuvre d'art parmis toutes les oeuvres disponibles ...."/>
                    </div>
                    <button type="button"
                            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Rechercher
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                             className="dark:hover:text-gray-300 dark:text-white lucide lucide-search">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col mt-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">Filtres
                        disponibles</label>
                    <div className="flex justify-center items-end gap-x-2 w-full mt-2">
                        <select id="department" name="department"
                                className="block dark:bg-white/5 dark:ring-white/10 dark:text-white w-full rounded-md border-0 py-2 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            <option selected>Selectionner un departement</option>
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                        <input type="text" name="geo_location" id="geo_location"
                               className="block dark:text-white dark:bg-white/5 dark:ring-white/10 w-full rounded-md border-0 py-1.5 px-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               placeholder="Geo Location"/>
                        <input type="number" name="date_begin" id="date_begin"
                               className="block dark:text-white dark:bg-white/5 dark:ring-white/10 w-full rounded-md border-0 py-1.5 px-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               placeholder="Date Begin"/>
                        <input type="number" name="date_end" id="date_end"
                               className="block dark:text-white dark:bg-white/5 dark:ring-white/10 w-full rounded-md border-0 py-1.5 px-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               placeholder="Date End"/>

                    </div>
                    <div className="flex w-full mt-3">
                        <div className="flex items-center me-4">
                            <input id="image" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                            <label htmlFor="image"
                                   className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Contient des images
                            </label>
                        </div>
                        <div className="flex items-center me-4">
                            <input id="highLight" type="checkbox" value=""
                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                            <label htmlFor="highLight"
                                   className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Populaire
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-bold dark:text-white tracking-tight text-gray-900">Résultat de votre
                        recherche</h2>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990"
                            picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                </div>

                <nav
                    className="flex mt-12 items-center justify-between dark:border-gray-500 border-t border-gray-200 px-4 sm:px-0">
                    <div className="-mt-px flex w-0 flex-1">
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">
                            <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                                      clipRule="evenodd"/>
                            </svg>
                            Précédent
                        </a>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">1</a>
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-indigo-500 dark:border-indigo-400 px-4 pt-4 text-sm font-medium dark:text-indigo-400 text-indigo-600"
                           aria-current="page">2</a>
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">3</a>
                        <span
                            className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500">...</span>
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">8</a>
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">9</a>
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">10</a>
                    </div>
                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <a href="#"
                           className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">Suivant
                            <svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                      clipRule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Search;