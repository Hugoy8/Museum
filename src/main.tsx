import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/header/header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import NotFound from "./pages/errors/notFound/notFound.tsx";
import Footer from "./components/footer/footer.tsx";
import './styles.css'
import OeuvreSingle from "./pages/oeuvre-single/oeuvre-single.tsx";
import Search from "./pages/search/search.tsx";
import {Toaster} from "sonner";
import About from "./pages/about/about.tsx";
import Actuality from "./pages/actuality/actuality.tsx";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Oeuvres from "./pages/oeuvres/oeuvres.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Toaster position="bottom-center" richColors={true} closeButton={true} pauseWhenPageIsHidden={true} />
      <BrowserRouter>
          <div className="app bg-white dark:bg-gray-900">
              <Header />
              <main>
                  <Routes>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="/search" element={<Search />}></Route>
                      <Route path="/oeuvres" element={<Oeuvres />}></Route>
                      <Route path="/about" element={<About />}></Route>
                      <Route path="/actuality" element={<Actuality />}></Route>
                      <Route path="/oeuvre/:id" element={<OeuvreSingle />}></Route>
                      <Route path="*" element={<NotFound />}></Route>
                  </Routes>
              </main>
              <Footer />
          </div>
      </BrowserRouter>
  </React.StrictMode>,
)
