import Oeuvre from "./oeuvre.tsx";

function OeuvreSection(props: {title: string, nameButton?: string}) {
    return (
        <div>
          <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-2xl font-bold tracking-tight dark:text-white text-gray-900">{props.title}</h2>
              <a href="#" className="hidden text-sm font-medium dark:text-indigo-400 text-indigo-600 hover:text-indigo-500 md:block">
                {props.nameButton == undefined ? "Découvrir" : props.nameButton}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
                <Oeuvre id={2} title="Titre de l'oeuvre" author="Auteur" date="1990" picture="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Oeuvre>
            </div>

            <div className="mt-8 text-sm md:hidden">
              <a href="#" className="font-medium dark:text-indigo-400 text-indigo-600 hover:text-indigo-500">
                {props.nameButton == undefined ? "Découvrir" : props.nameButton}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
    )
}

export default OeuvreSection;