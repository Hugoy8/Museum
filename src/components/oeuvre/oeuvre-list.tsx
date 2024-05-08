import Oeuvre from "./oeuvre.tsx";

function OeuvreList() {
    return (
        <div>
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <h2 className="text-2xl font-bold dark:text-white tracking-tight text-gray-900">Toutes nos oeuvres</h2>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                    <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                </div>

                <nav className="flex mt-12 items-center justify-between dark:border-gray-500 border-t border-gray-200 px-4 sm:px-0">
                    <div className="-mt-px flex w-0 flex-1">
                        <a href="#" className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">
                            <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd"/>
                            </svg>
                            Précédent
                        </a>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">1</a>
                        <a href="#" className="inline-flex items-center border-t-2 border-indigo-500 dark:border-indigo-400 px-4 pt-4 text-sm font-medium dark:text-indigo-400 text-indigo-600" aria-current="page">2</a>
                        <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">3</a>
                        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500">...</span>
                        <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">8</a>
                        <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">9</a>
                        <a href="#" className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">10</a>
                    </div>
                    <div className="-mt-px flex w-0 flex-1 justify-end">
                        <a href="#" className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium dark:text-gray-400 text-gray-500 dark:hover:border-gray-500 hover:border-gray-300 dark:hover:text-gray-500 hover:text-gray-700">Suivant
                            <svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default OeuvreList;