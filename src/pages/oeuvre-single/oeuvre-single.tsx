import OeuvreSection from "../../components/oeuvre/oeuvre-section.tsx";
import useArtworkById from "../../services/oeuvre-single.service.ts";
import {ArtworkInterface} from "../interfaces/oeuvre-single.interface.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function OeuvreSingle() {
  const { data, isLoading } : { data: ArtworkInterface | null, isLoading: boolean } = useArtworkById();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data === null) {
      navigate(`/`)
    }
  }, [data, navigate, isLoading]);
  const noDataFound : string = "Aucune donnée trouvée"
  return (
      <>
          <div className="pt-32">
            <div className="pt-6">
              <nav aria-label="Breadcrumb">
                <ol role="list"
                    className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <li>
                    <div className="flex items-center">
                      <a href="#" className="mr-2 text-sm font-medium dark:text-white text-gray-900">Oeuvres</a>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                           className="h-5 w-4 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <a href="#" className="mr-2 text-sm font-medium dark:text-white text-gray-900">Sculptures</a>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                           className="h-5 w-4 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                      </svg>
                    </div>
                  </li>

                  <li className="text-sm">
                    <a href="#" aria-current="page"
                       className="font-medium dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-600">Penis</a>
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

              <div
                  className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data?.title || noDataFound}</h1>
                </div>


                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Dates de création</h2>
                  <p className="text-3xl tracking-tight text-gray-900">{data?.objectDate || noDataFound} </p>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">Description</h3>
                  <p>{data?.objectName || noDataFound}</p>
                  <p>{data?.culture || noDataFound}</p>
                  <p>{data?.period || noDataFound}</p>
                </div>

                <div
                    className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Dimensions</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">{data?.dimensions}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">Artiste</h3>

                    <div className="mt-4">
                      <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                        <li className="text-gray-400"><span
                            className="text-gray-600">Nom : {data?.artistDisplayName || noDataFound}</span>
                        </li>
                        <li className="text-gray-400"><span
                            className="text-gray-600">Dates : {data?.artistBeginDate || noDataFound} {data?.artistEndDate ? '- ' + data.artistEndDate : ''}</span>
                        </li>
                        <li className="text-gray-400"><span
                            className="text-gray-600">Genre : {data?.artistGender || noDataFound}</span>
                        </li>
                        <li className="text-gray-400"><span
                            className="text-gray-600">Biographie : {data?.artistDisplayBio || noDataFound}</span>
                        </li>
                        <li className="text-gray-400"><span
                            className="text-gray-600">Nationalité : {data?.artistNationality || noDataFound}</span>
                        </li>
                        <li className="text-gray-400"><span
                            className="text-gray-600">Role de l'artiste : {data?.artistRole || noDataFound}</span>
                        </li>
                        <li className="text-gray-400"><a className="text-blue-600">En savoir
                          plus {data?.artistWikidata_URL || noDataFound}</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">Numéro de gallerie
                        : {data?.GalleryNumber || noDataFound}</p>
                      <p className="text-sm text-gray-600">Matériaux
                        : {data?.medium || noDataFound}</p>
                      <p className="text-sm text-gray-600">Ville de création
                        : {data?.city || noDataFound}</p>
                      <p className="text-sm text-gray-600">Pays de création
                        : {data?.country || noDataFound}</p>
                      <p className="text-sm text-gray-600">Région de création
                        : {data?.region || noDataFound}</p>
                      <p className="text-sm text-gray-600">Département résponsable
                        : {data?.department || noDataFound}</p>
                      <p className="text-sm text-gray-600">
                        {data?.isHighlight ? "Oeuvre populaire" : noDataFound}
                      </p>
                      <p className="text-sm text-gray-600">Date d'acquisition
                        : {data?.accessionYear || noDataFound}</p>
                      <p className="text-sm text-gray-600">
                        Accessible au public
                        : {data?.isPublicDomain !== undefined ? (data.isPublicDomain ? "Oeuvre accessible au public" : "Oeuvre non accessible au public") : noDataFound}
                      </p>
                      <p className="text-sm text-gray-600">Tags
                        : {data?.tags ? data.tags.map((tag, index) => <span
                            key={index}>{tag.term}</span>) : noDataFound}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <OeuvreSection title="Recommandations par rapport à vos recherches"></OeuvreSection>
      </>
  )
}

export default OeuvreSingle;