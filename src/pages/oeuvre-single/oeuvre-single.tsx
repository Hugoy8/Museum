import OeuvreSection from "../../components/oeuvre/oeuvre-section.tsx";
import { useArtworkById, getDepartmentId, fetchSimilarArtworks } from '../../services/oeuvre-single.service';
import {ArtworkInterface} from "../interfaces/oeuvre-single.interface.ts";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loader from "../../components/loader/loader.tsx";
import {Section} from "../interfaces/section.interface.ts";

function OeuvreSingle() {
  const { data, isLoading } : { data: ArtworkInterface | null, isLoading: boolean } = useArtworkById();
  const [similarArtworks, setSimilarArtworks] = useState<Section[]>([]);
  const [isLoadingSuggestion, setIsLoadingSuggestion] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtworks = async () => {
      if (!isLoading && data === null) {
        navigate(`/404`)
      }
      const departmentId = await getDepartmentId(data?.department || "");
      const query = data?.artistDisplayName ? data?.artistDisplayName : data?.title;
      const encodedQuery = encodeURIComponent(query || "").replace(/%20/g, "+");
      const { artworks, isLoadingSuggestion } = await fetchSimilarArtworks(departmentId, encodedQuery, data?.objectID);
      setIsLoadingSuggestion(isLoadingSuggestion);
      setSimilarArtworks(artworks);
    };

    fetchArtworks().then(r => console.log(r)).catch(e => console.error(e));
  }, [data, navigate, isLoading, isLoadingSuggestion]);

  const noDataFound : string = "Aucune donnée trouvée"
  return (
      <>
        {isLoading && isLoadingSuggestion ? (
            <Loader></Loader>
        ) : (
            <>
          <div className="pt-12">
            <div className="pt-6">
              <nav aria-label="Breadcrumb">
                <ol role="list"
                    className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <li>
                    <div className="flex items-center">
                      <Link to={'/oeuvres'}>
                        <a href="#" className="mr-2 text-sm font-medium dark:text-white text-gray-900">Oeuvres</a>
                      </Link>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                           className="h-5 w-4 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                      </svg>
                    </div>
                  </li>
                  {data?.objectName != undefined && (
                    <li>
                      <div className="flex items-center">
                        <a href="#"
                           className="mr-2 text-sm font-medium dark:text-white text-gray-900">{data?.objectName}</a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                             className="h-5 w-4 text-gray-300">
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                        </svg>
                      </div>
                    </li>
                  )}

                  <li className="text-sm">
                    <a aria-current="page"
                       className="font-medium dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-600">{data?.title || ('Oeuvre n°' + useParams<{ id: string }>().id)}</a>
                  </li>
                </ol>
              </nav>

              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                {data?.additionalImages && data.additionalImages.length > 0 ? (
                    <>
                      <div
                          className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={data?.primaryImage || "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"}
                            alt="Artwork image" className="h-full w-full object-cover object-center"/>
                      </div>
                      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div
                            className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                          <img
                              src={data?.additionalImages[0] || "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"}
                              alt="Artwork image" className="h-full w-full object-cover object-center"/>
                        </div>
                        <div
                            className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                          <img
                              src={data?.additionalImages[1] || "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"}
                              alt="Artwork image" className="h-full w-full object-cover object-center"/>
                        </div>
                      </div>
                      <div
                          className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={data?.additionalImages[2] || "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"}
                            alt="Artwork image" className="h-full w-full object-cover object-center"/>
                      </div>
                    </>
                ) : (
                    <div
                        className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg lg:col-span-3">
                      <img
                          src={data?.primaryImage || "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"}
                          alt="Artwork image" className="h-full w-full object-cover object-center"/>
                    </div>
                )}
              </div>

              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2">
                  <div className="flex gap-3 items-center w-full">
                    <h1 className="text-2xl font-bold dark:text-white tracking-tight text-gray-900 sm:text-3xl">{data?.title || noDataFound}</h1>
                    {data?.isPublicDomain ? (
                        <span
                            className="inline-flex whitespace-nowrap h-6 items-center rounded-md bg-green-50 dark:bg-green-500/10 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20 dark:ring-green-500/20">Domaine public</span>
                    ) : (
                        <span
                            className="inline-flex whitespace-nowrap h-6 items-center rounded-md bg-blue-50 dark:bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/15">Domaine privé</span>
                    )}
                    {data?.isHighlight && (
                        <span className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/15">Populaire</span>
                    )}
                  </div>

                  <div className="mt-10">
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white">Description</h2>
                    <div className="mt-3 w-full flex flex-wrap gap-x-12 gap-y-6">
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Culture</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.culture || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Période</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.period || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Type</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.objectName || noDataFound}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white">Dimensions</h2>
                    <div className="space-y-6 mt-3">
                      <span className="text-base text-gray-900 dark:text-white">{data?.dimensions}</span>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white">Details</h2>

                    <div className="mt-3 w-full flex flex-wrap gap-x-12 gap-y-6">
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Matériaux</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.medium || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Numéro de gallerie</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.GalleryNumber || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Ville de création</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.city || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Région de création</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.region || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Pays de création</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.country || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Département résponsable</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.department || noDataFound}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-base font-medium text-gray-900 dark:text-white">Date d'acquisition</span>
                        <span className="text-sm text-gray-600 dark:text-gray-500">{data?.accessionYear || noDataFound}</span>
                      </div>
                      <p className="text-sm text-gray-600">Tags
                        : {data?.tags ? data.tags.map((tag, index) => <span
                            key={index}>{tag.term}</span>) : noDataFound}
                      </p>
                    </div>
                  </div>

                  {(data?.objectWikidata_URL || data?.objectURL) && (
                      <div className="mt-10 text-sm">
                        <a href={data?.objectWikidata_URL || data?.objectURL} target="_blank"
                           className="font-medium dark:text-indigo-400 text-indigo-600 hover:text-indigo-500">
                          Plus d'information sur l'oeuvre
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                  )}
                </div>

                <div className="mt-4 lg:border-l lg:border-gray-200 dark:lg:border-gray-700 lg:pl-8 flex flex-col gap-10 justify-between lg:row-span-3 lg:mt-0">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-xl font-medium text-gray-900 dark:text-white">Dates de création</h2>
                      <span className="tracking-tight text-gray-600 dark:text-gray-500">{data?.objectDate || noDataFound} </span>
                    </div>

                    <div className="flex flex-col gap-2 mt-10">
                      <h2 className="text-xl font-medium text-gray-900 dark:text-white">Artiste</h2>

                      <div>
                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                          <li className="text-gray-600 dark:text-gray-500">Nom : {data?.artistDisplayName || noDataFound}</li>
                          <li className="text-gray-600 dark:text-gray-500">Naissance - Mort
                            : {data?.artistBeginDate || noDataFound} {data?.artistEndDate ? '- ' + data.artistEndDate : ''}</li>
                          <li className="text-gray-600 dark:text-gray-500">Genre : {data?.artistGender || noDataFound}</li>
                          <li className="text-gray-600 dark:text-gray-500">Biographie : {data?.artistDisplayBio || noDataFound}</li>
                          <li className="text-gray-600 dark:text-gray-500">Nationalité : {data?.artistNationality || noDataFound}</li>
                          <li className="text-gray-600 dark:text-gray-500">Role de l'artiste : {data?.artistRole || noDataFound}</li>
                        </ul>
                      </div>

                      <div className="mt-1 text-sm">
                        <a href={data?.artistWikidata_URL} target="_blank"
                           className="font-medium dark:text-indigo-400 text-indigo-600 hover:text-indigo-500">
                          Plus d'information sur l'artiste
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-10">
                      <h2 className="text-xl font-medium text-gray-900 dark:text-white">Licence</h2>
                      <span className="tracking-tight text-gray-600 dark:text-gray-500">{data?.rightsAndReproduction || 'Aucune licence pour le moment'} </span>
                    </div>
                  </div>

                  {data?.metadataDate && (
                      <span className="mt-auto text-sm tracking-tight text-gray-500 dark:text-gray-700">
                      Mis à jour le {new Date(data?.metadataDate).toLocaleString('fr-FR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        <OeuvreSection title="Recommandations par rapport à vos recherches" datas={similarArtworks}></OeuvreSection>
              {similarArtworks.length === 0 && (
                  <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Aucune recommandation trouvée</h1>
                    </div>
                    </div>
                )}
            </>
        )}
      </>
  )
}

export default OeuvreSingle;