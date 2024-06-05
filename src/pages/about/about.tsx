import theMetLogo from '../../assets/partners/themet.png';
import louvreLogo from '../../assets/partners/louvre.png';

function About() {
    return (
        <>
            <div className="mt-12 overflow-hidden sm:mt-24">
                <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                        <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Notre équipe</h2>
                            <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-400">Notre équipe dédiée travaille sans relâche pour vous offrir une expérience immersive et enrichissante. Passionnés par l'art et la technologie, nous nous efforçons de rendre la culture accessible à tous.</p>
                            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">Notre équipe passionnée rend l'art accessible à tous. Ensemble, nous créons une expérience virtuelle unique.</p>
                        </div>
                        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                <img
                                    src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
                            </div>
                            <div
                                className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
                                </div>
                                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                        alt=""
                                        className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
                                </div>
                                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                    <img
                                        src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                        alt=""
                                        className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
                <div
                    className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Nos partenaires</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 text-center">Grâce à nos précieux partenaires, nous pouvons offrir une expérience culturelle en ligne enrichissante et diversifiée, mettant en avant des collaborations exceptionnelles avec des institutions renommées.</p>
                    <div
                        className="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                             src={theMetLogo} alt="The Met"/>
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                             src={louvreLogo} alt="Louvre Paris"
                             width="158" height="48"/>
                        <img className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                             src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158"
                             height="48"/>
                        <img className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                             src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal"
                             width="158" height="48"/>
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic"
                            width="158" height="48"/>
                    </div>
                    <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div
                            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                            style={{clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"}}></div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">L'Art et
                        les Musées en Chiffres</h2>
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">Découvrez des statistiques
                        fascinantes sur la fréquentation, les collections et les expositions des musées à travers le
                        monde. Plongez dans l'univers des musées virtuels et explorez l'impact global de l'art et de la
                        culture.</p>
                </div>
                <div
                    className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    <div
                        className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 dark:bg-gray-200/5 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p className="flex-none text-3xl font-bold tracking-tight text-gray-900 dark:text-white">95k</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Musées à
                                travers le monde</p>
                            <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">Il existe environ
                                95,000 musées à travers le monde, couvrant une vaste gamme de sujets, de l'art et de
                                l'histoire à la science et la technologie.</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 dark:bg-white p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white dark:text-gray-900">2 000
                            000 000</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white dark:text-gray-900">Visiteurs
                                annuels des musées virtuels</p>
                            <p className="mt-2 text-base leading-7 text-gray-400 dark:text-gray-500">Chaque année,
                                environ 2 milliards de visites sont effectuées sur les plateformes virtuelles des musées
                                du monde entier, offrant un accès numérique aux collections et expositions.</p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">800k</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">Œuvres d'art en ligne</p>
                            <p className="mt-2 text-base leading-7 text-indigo-200">Plus de 800,000 œuvres d'art sont
                                disponibles en ligne à travers diverses plateformes de musées et collections, permettant
                                un accès global à des trésors culturels et historiques.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;