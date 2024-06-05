/**
 * Actuality component
 */
function actuality() {
    return (
        <div className="bg-white dark:bg-gray-900 py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center dark:text-white">Notre actualité</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 text-center dark:text-gray-300">Découvrez l'actualité de votre musée virtuel, une actualité disponible pour tous et avec transparence.</p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex flex-col items-start">
                <div className="relative w-full">
                  <img
                      src="https://cdn.sanity.io/images/e1i1ex1t/production/5666a58be143da6fdf7d18d26f84efd921cb1f54-1920x2464.jpg?rect=107,454,1707,1280&w=640&h=480&fit=crop&auto=format"
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">Mardi 5 juin 2024</time>
                    <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-400/5 dark:text-gray-500">Digital</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                      Le Met cède un bronze de Picasso
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      Le Metropolitan Museum of Art de New York a décidé de se séparer de la première sculpture cubiste de Pablo Picasso,
                      Tête de femme (Fernande), et de la mettre aux enchères chez Christie’s pour abonder le fonds d’acquisition du musée.
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="https://media.muckrack.com/profile/images/589603/daniel-cassady.jpeg.256x256_q100_crop-smart.jpg"
                         alt="" className="h-10 w-10 rounded-full bg-gray-100 object-cover"/>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        <a href="https://www.theartnewspaper.com/authors/daniel-cassady" target="_blank">
                          <span className="absolute inset-0"></span>
                          Daniel Cassady
                        </a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">Journaliste</p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col items-start">
                <div className="relative w-full">
                  <img
                      src="https://cdn.sanity.io/images/e1i1ex1t/production/dd880fb7eef09b709980761bdc16ab1703aea5a9-490x588.png?rect=0,46,490,368&w=640&h=480&fit=crop&auto=format"
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">Mardi 5 juin 2024</time>
                    <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-400/5 dark:text-gray-500">Digital</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                        Dix œuvres du Met prêtées au Louvre
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">Le département des antiquités orientales du musée du Louvre accueille
                      dix œuvres majeures du département d’art ancien du Proche-Orient du Metropolitan Museum of Art (Met),
                      à New York, actuellement fermé pour des travaux de rénovation.</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="data:image/jpeg;base64,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"
                         alt="" className="h-10 w-10 rounded-full bg-gray-100 object-cover"/>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        <a href="https://www.artnewspaper.fr/authors/charles-gaucher" target="_blank">
                          <span className="absolute inset-0"></span>
                          Charles Gaucher
                        </a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">Journaliste</p>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col items-start">
                <div className="relative w-full">
                  <img
                      src="https://cdn.sanity.io/images/e1i1ex1t/production/63250b4379428b6d1ebb5b824659b8c8bccb7841-1920x2521.webp?rect=0,6,1920,1440&w=640&h=480&fit=crop&auto=format"
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">Mardi 5 juin 2024</time>
                    <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-400/5 dark:text-gray-500">Digital</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                        Un don majeur d’œuvres de Philip Guston au Met
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">La fille du peintre Philip Guston fait don de 220 œuvres
                      de son père ainsi que de 10 millions de dollars au Metropolitan Museum of Art de New York.</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src="https://cdn.sanity.io/images/cxgd3urn/production/8f8210148a8a35d821fd3693d9f6da8662e5d3d7-2240x1494.jpg?rect=0,0,1992,1494&w=640&h=480&fit=crop&auto=format"
                         alt="" className="h-10 w-10 rounded-full bg-gray-100 object-cover"/>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        <a href="https://www.theartnewspaper.com/authors/gabriella-angeleti" target="_blank">
                          <span className="absolute inset-0"></span>
                          Gabriella Angeleti
                        </a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">Journaliste</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
    )
}

export default actuality;