import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./components/header/header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import NotFound from "./pages/errors/notFound/notFound.tsx";
import Footer from "./components/footer/footer.tsx";
import './styles.css'
import OeuvreSingle from "./pages/oeuvre-single/oeuvre-single.tsx";
import OeuvreList from "./components/oeuvre/oeuvre-list.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <div className="app bg-white dark:bg-gray-900">
              <Header />
              <main>
                  <Routes>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="/oeuvres" element={<OeuvreList />}></Route>
                      <Route path="/oeuvre/:id" element={<OeuvreSingle />}></Route>
                      <Route path="*" element={<NotFound />}></Route>
                  </Routes>
              </main>
              <Footer />
          </div>
      </BrowserRouter>
  </React.StrictMode>,
)
