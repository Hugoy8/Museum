import OeuvreSection from "../../components/oeuvre/oeuvre-section.tsx";

function OeuvreSingle() {
    return (
        <>
            <div className="pt-32">
              <div className="pt-6">
                <nav aria-label="Breadcrumb">
                  <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li>
                      <div className="flex items-center">
                        <a href="#" className="mr-2 text-sm font-medium dark:text-white text-gray-900">Oeuvres</a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <a href="#" className="mr-2 text-sm font-medium dark:text-white text-gray-900">Sculptures</a>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                      </div>
                    </li>

                    <li className="text-sm">
                      <a href="#" aria-current="page" className="font-medium dark:text-gray-400 dark:hover:text-white text-gray-500 hover:text-gray-600">Penis</a>
                    </li>
                  </ol>
                </nav>

                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                  <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center"/>
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                      <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center"/>
                    </div>
                    <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                      <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center"/>
                  </div>
                </div>

                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Penis en plâtre</h1>
                  </div>


                  <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Date</h2>
                    <p className="text-3xl tracking-tight text-gray-900">1993</p>
                  </div>

                  <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    <div>
                      <h3 className="sr-only">Description</h3>

                      <div className="space-y-6">
                        <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                      <div className="mt-4">
                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                          <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
                          <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
                          <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                          <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900">Details</h2>

                      <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
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