import { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import BrowserBar from "../../components/browser/BrowserBar";
import AnimeList from "../../components/anime/AnimeList";
import MangaList from "../../components/manga/MangaList.jsx";
import { GET_MEDIA_BY_FILTER, GET_MEDIA_BY_FILTER_NO_SEARCH } from "../../utils/api/queries.js"

import './Browser.css'

function Browser() {

    const [searchFilters, setSearchFilters] = useState({
        sort: "POPULARITY_DESC",
        type: "MANGA",
        genreIn: null,
        search: ""
    });

    const handleFilters = (filters) => {
        setSearchFilters((oldFilters) => {
            return {
                ...oldFilters, ...filters
            }
        })
    }
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <BrowserBar onSubmit={handleFilters} />
                {searchFilters.type === "MANGA" ? (
                    <>
                        {searchFilters.search === "" ?
                            <MangaList query={GET_MEDIA_BY_FILTER_NO_SEARCH} variables={searchFilters} />
                            : <MangaList query={GET_MEDIA_BY_FILTER} variables={searchFilters} />}
                    </>
                ) : (
                    <>
                        {searchFilters.search === "" ?
                            <AnimeList query={GET_MEDIA_BY_FILTER_NO_SEARCH} variables={searchFilters} />
                            : <AnimeList query={GET_MEDIA_BY_FILTER} variables={searchFilters} />}
                    </>
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Browser;