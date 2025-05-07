import { useState, useEffect, useActionState } from "react";
import AnimeCard from "./AnimeCard";
import fetchData from "../../utils/api/anilistFetch.js";

import { Pagination } from '@mui/material';

import './AnimeList.css'


function AnimeList({ query, variables }) {

    // Estados
    const [animes, setAnimes] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    // Función que recoge todas las variables finales para la busqueda, la diferencia con variables es que aquí se introduce la página
    const getVariables = () => {
        const finalVariables = {
            page: currentPage,
            perPage: 10,
            sort: variables.sort,
            type: variables.type,
            genreIn: variables.genres ? variables.genres : null,
            search: variables.search || "One Piece"
        };

        // Filtrar las variables que sean null o undefined
        return Object.fromEntries(
            Object.entries(finalVariables).filter(([_, value]) => value !== null)
        );
    };

    useEffect(() => {
        handleLoadAnimes();
    }, [variables, currentPage])

    const handleLoadAnimes = async () => {
        const variables = getVariables()
        console.log(variables)
        const result = await fetchData(query, variables);
        console.log(result);
        setAnimes(result.data.Page.media);
        { result.data.Page.pageInfo ? setPageInfo(result.data.Page.pageInfo) : null }
    }

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <section className="anime-browse-section">

                <section className="anime-list">

                    {animes.map(anime => {
                        return <AnimeCard anime={anime} key={anime.id} />
                    })
                    }

                </section>

                {pageInfo.hasNextPage && (
                    <section className="pagination">
                        <Pagination count={pageInfo.lastPage} page={currentPage} onChange={handlePageChange}
                            boundaryCount={2} showFirstButton showLastButton size="large" />
                    </section>
                )}

            </section>

        </>

    )
}

export default AnimeList;