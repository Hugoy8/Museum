import {Link} from "react-router-dom";
import DarkModeToggle from "../../services/darkMode.service.tsx";
import {useState} from "react";
import logo from "../../assets/logos/logo.png";

function Header() {
    const [statusHeaderMenu, setStatusHeaderMenu] = useState(false);

    const toggleHeaderMenu = (): void => {
        setStatusHeaderMenu(!statusHeaderMenu);
    }

    return (
        <header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8" aria-label="Global">
            <div className="flex md:flex-1">
              <Link to={"/"}>
                <a className="-m-1.5 p-1.5">
                  <span className="sr-only">Museum</span>
                  <img className="h-16 w-auto" src={logo} alt=""/>
                </a>
              </Link>
            </div>
            <div className="flex md:hidden">
              <button type="button" onClick={toggleHeaderMenu} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                     aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              </button>
            </div>
            <div className="hidden md:flex md:gap-x-12">
              <Link to="/oeuvres">
                <a className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:text-gray-300">Oeuvres</a>
              </Link>
              <Link to="/actuality">
                <a className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:text-gray-300">Actualité</a>
              </Link>
              <Link to="/about">
                <a className="text-sm font-semibold leading-6 text-gray-900 dark:text-white dark:hover:text-gray-300">A Propos</a>
              </Link>
            </div>
            <div className="hidden md:flex md:flex-1 md:justify-end gap-4 align-middle">
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
          {statusHeaderMenu && (
              <div className="md:hidden" role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-10"></div>
                <div className="fixed dark:bg-gray-900 inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 dark:sm:ring-gray-200/10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <Link to="/">
                        <a className="-m-1.5 p-1.5">
                            <span className="sr-only">Museum</span>
                            <img className="h-12 w-auto" src={logo} alt=""/>
                        </a>
                    </Link>
                      <div className="flex gap-2 w-auto">
                          <div className="p-2.5">
                              <DarkModeToggle></DarkModeToggle>
                          </div>
                          <button onClick={toggleHeaderMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                              <span className="sr-only">Close menu</span>
                              <svg className="h-6 w-6 dark:text-white dark:hover:text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                   stroke="currentColor"
                                   aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                              </svg>
                          </button>
                      </div>
                  </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link to="/" onClick={toggleHeaderMenu}>
                                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-200/10 dark:text-white dark:hover:text-white">Accueil</a>
                                </Link>
                                <Link to="/oeuvres" onClick={toggleHeaderMenu}>
                                  <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-200/10 dark:text-white dark:hover:text-white">Oeuvres</a>
                                </Link>
                                <Link to="/search">
                                  <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-200/10 dark:text-white dark:hover:text-white">Recherche</a>
                                </Link>
                                <Link to="/actuality" onClick={toggleHeaderMenu}>
                                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-200/10 dark:text-white dark:hover:text-white">Actualité</a>
                                </Link>
                                <Link to="/about" onClick={toggleHeaderMenu}>
                                  <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-200/10 dark:text-white dark:hover:text-white">A Propos</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          )}
        </header>
    )
}

export default Header;