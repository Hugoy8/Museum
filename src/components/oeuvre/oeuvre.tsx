import {Link} from "react-router-dom";

function Oeuvre(props: {id: number, title: string, author: string, date: string, picture: string}) {
    return (
        <div className="group relative">
          <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
            <img src={props.picture} alt="Hand stitched, orange leather long wallet." className="h-full w-full object-cover object-center"/>
          </div>
          <h3 className="mt-4 text-sm text-gray-700 dark:text-gray-600">
              <Link to={"/oeuvre/" + props.id}>
                  <a>
                      <span className="absolute inset-0"></span>
                      {props.title}
                  </a>
              </Link>
          </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{props.author}</p>
            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{props.date}</p>
        </div>
    )
}

export default Oeuvre;