import {Link} from "react-router-dom";
import DarkModeToggle from "../../services/darkMode.service.tsx";

function Header() {
    return (
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link to={"/"}>
                <a className="-m-1.5 p-1.5">
                  <span className="sr-only">Museum</span>
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                       alt=""/>
                </a>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                     aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/oeuvres">
                <a className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:text-gray-300">Oeuvres</a>
              </Link>
              <a className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:text-gray-300">Actualité</a>
              <Link to="/about">
                <a className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:text-gray-300">A Propos</a>
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 align-middle">
              <Link to="/search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="dark:hover:text-gray-300 dark:text-white lucide lucide-search">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </Link>
              <DarkModeToggle></DarkModeToggle>
            </div>
          </nav>
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10"></div>
            <div
                className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/">
                  <a className="-m-1.5 p-1.5">
                    <span className="sr-only">Museum</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                         alt=""/>
                  </a>
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                       aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link to="/oeuvres">
                      <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-gray-300">Oeuvres</a>
                    </Link>
                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-gray-300">Actualité</a>
                    <Link to="/about">
                      <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:text-gray-300">A Propos</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
}

export default Header;