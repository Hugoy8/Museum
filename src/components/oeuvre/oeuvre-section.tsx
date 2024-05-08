import Oeuvre from "./oeuvre.tsx";
import {Section} from "../../pages/interfaces/section.interface.ts";

function OeuvreSection(props: {title: string, nameButton?: string, datas?: Section[]}) {
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
                  {props.datas?.map((data, index) => (
                      <Oeuvre
                          key={index}
                          id={data.ObjectID}
                          title={data.title}
                          author={data.artistDisplayName}
                          date={data.objectDate}
                          picture={data.primaryImage}
                      />
                  ))}
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