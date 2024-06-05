import {Link, useNavigate} from "react-router-dom";
import DarkModeToggle from "../../services/darkMode.service.tsx";
import {useState} from "react";
import logo from "../../assets/logos/logo.png";

function Header() {
    const [statusHeaderMenu, setStatusHeaderMenu] = useState(false);

    const navigate = useNavigate();
    const toggleHeaderMenu = (): void => {
        setStatusHeaderMenu(!statusHeaderMenu);
    }

    const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        navigate('/search?searchTerm=' + event.currentTarget.value);

        setTimeout((): void => {
            setStatusHeaderMenu(false);
            event.currentTarget.reset();
        }, 10);
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
              <a className="relative group">
                  <Link to="/search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                           className="dark:hover:text-gray-300 dark:text-white lucide lucide-search relative">
                          <circle cx="11" cy="11" r="8"/>
                          <path d="m21 21-4.3-4.3"/>
                      </svg>
                  </Link>
                  <form onSubmit={handleSearchSubmit} className="flex group-hover:opacity-100 max-lg:w-70 group-hover:z-10 gap-x-2 absolute w-80 top-1/2 right-0 opacity-0 -z-10"
                       style={{transform: 'translateY(-50%)'}}>
                      <input type="text" name="search" id="search"
                             className="block dark:text-white bg-white dark:bg-white/5 dark:ring-white/10 w-full rounded-md border-0 py-1.5 px-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                             placeholder="Rechercher une oeuvre"/>
                      <button type="submit"
                              className="inline-flex max-sm:justify-center items-center gap-x-1.5 rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                               fill="none"
                               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                               strokeLinejoin="round"
                               className="dark:hover:text-gray-300 dark:text-white lucide lucide-search">
                              <circle cx="11" cy="11" r="8"/>
                              <path d="m21 21-4.3-4.3"/>
                          </svg>
                      </button>
                  </form>
              </a>
              <DarkModeToggle></DarkModeToggle>
            </div>
          </nav>
            {statusHeaderMenu && (
                <div className="md:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div
                        className="fixed dark:bg-gray-900 inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 dark:sm:ring-gray-200/10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                <button onClick={toggleHeaderMenu} type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6 dark:text-white dark:hover:text-gray-300" fill="none"
                                         viewBox="0 0 24 24" strokeWidth="1.5"
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
                                <Link to="/actuality" onClick={toggleHeaderMenu}>
                                    <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-200/10 dark:text-white dark:hover:text-white">Actualité</a>
                                </Link>
                                <Link to="/about" onClick={toggleHeaderMenu}>
                                  <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-200/10 dark:text-white dark:hover:text-white">A Propos</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 py-6">
                        <form onSubmit={handleSearchSubmit} className="flex gap-x-2">
                            <input type="text" name="search" id="search"
                                   className="block dark:text-white dark:bg-white/5 dark:ring-white/10 w-full rounded-md border-0 py-1.5 px-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                   placeholder="Rechercher une oeuvre"/>
                            <button type="submit"
                                    className="inline-flex max-sm:justify-center items-center gap-x-1.5 rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                     fill="none"
                                     stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="dark:hover:text-gray-300 dark:text-white lucide lucide-search">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="m21 21-4.3-4.3"/>
                                </svg>
                            </button>
                        </form>
                        <Link to={"/search"} onClick={toggleHeaderMenu}>
                            <a className="text-indigo-600 dark:text-indigo-400 font-medium underline text-xs hover:no-underline">Recherche avancée</a>
                        </Link>
                    </div>
                </div>
              </div>
          )}
        </header>
    )
}

export default Header;