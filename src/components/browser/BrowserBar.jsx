import Selector from "./filters/Selector";
import MultOptSelector from "./filters/MultOptSelector";
import SearchBar from "./searchbar/SearchBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./BrowserBar.css";
import { useState } from "react";

function BrowserBar({ onSubmit }) {

    // Estado que guarda el título de lo que queremos buscar
    const [mediaTitle, setMediaTitle] = useState("");

    // Estados que guardan la información de los filtros de busqueda
    const [type, setType] = useState("MANGA");
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("POPULARITY_DESC");

    // Funcion handle del título de busqueda
    const handleMediaTitle = (mediaInput) => {
        setMediaTitle(mediaInput);
    }

    // Funciones Handle de los filtros
    const handleSelectedType = (filterType) => {
        setType(filterType);
    }

    const handleSelectedGenres = (filterGenres) => {
        setGenres(filterGenres);
    }

    const handleSelectedSort = (filterSort) => {
        setSort(filterSort);
    }

    const handleSubmit = () => {
        const variables = getFilterVariables();
        console.log(variables);
        onSubmit(variables);
    }

    // función para construir el objeto que guarda la información de la query que se va ha hacer
    const getFilterVariables = () => {
        const filterVariables = {
            sort: sort,
            type: type,
            genres: genres.length > 0 ? genres : null,
            search: mediaTitle || null
        };

        // Se filtran aquellas variables que sean null o undefined
        return Object.fromEntries(
            Object.entries(filterVariables).filter(([_, value]) => value !== null)
        );
    };

    return (
        <section className="search">
            <section className="search-bar">
                <SearchBar onSubmit={handleMediaTitle} />
                <button className="search-button" onClick={handleSubmit}>
                    <SearchOutlinedIcon fontSize="small" />
                </button>
            </section>

            <section className="filters">
                <Selector
                    options={[
                        { id: "ANIME", label: "Anime" },
                        { id: "MANGA", label: "Manga" },
                    ]}
                    noOptionText={"Any"}
                    defaultValue={1}
                    noNull={true}
                    onChange={handleSelectedType}
                />
                <MultOptSelector
                    options={[
                        {
                            id: "Action",
                            label: "Action",
                        },
                        {
                            id: "Adventure",
                            label: "Adventure",
                        },
                        {
                            id: "Comedy",
                            label: "Comedy",
                        },
                        {
                            id: "Drama",
                            label: "Drama",
                        },
                        {
                            id: "Fantasy",
                            label: "Fantasy",
                        },
                        {
                            id: "Horror",
                            label: "Horror",
                        },
                        {
                            id: "Mahou Shoujo",
                            label: "Mahou Shoujo",
                        },
                        {
                            id: "Mecha",
                            label: "Mecha",
                        },
                        {
                            id: "Music",
                            label: "Music",
                        },
                        {
                            id: "Mystery",
                            label: "Mystery",
                        },
                        {
                            id: "Psychological",
                            label: "Psychological",
                        },
                        {
                            id: "Romance",
                            label: "Romance",
                        },
                        {
                            id: "Sci-Fi",
                            label: "Sci-Fi",
                        },
                        {
                            id: "Slice of Life",
                            label: "Slice of Life",
                        },
                        {
                            id: "Sports",
                            label: "Sports",
                        },
                        {
                            id: "Supernatural",
                            label: "Supernatural",
                        },
                        {
                            id: "Thriller",
                            label: "Thriller",
                        },
                    ]}
                    noOptionText={"Any"}
                    onChange={handleSelectedGenres}
                />
                <Selector
                    options={[
                        {
                            id: "POPULARITY_DESC",
                            label: "Popularity",
                        },
                        {
                            id: "TRENDING_DESC",
                            label: "Trending",
                        },
                        {
                            id: "SCORE_DESC",
                            label: "Average Score",
                        },
                    ]}
                    noOptionText={"Any"}
                    defaultValue={0}
                    onChange={handleSelectedSort}
                />
            </section>

        </section>
    )
}

export default BrowserBar;