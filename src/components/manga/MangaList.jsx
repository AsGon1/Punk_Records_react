import { useState, useEffect } from "react";
import MangaCard from "./MangaCard.jsx";
import fetchData from "../../utils/api/anilistFetch.js";

import { Pagination } from '@mui/material';

import './MangaList.css'


function MangaList({ query, variables }) {

    // Estados
    const [mangas, setMangas] = useState([]);
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
        handleLoadMangas();
    }, [variables, currentPage])

    useEffect(() => {
        setCurrentPage(1);
    }, [variables.search])

    const handleLoadMangas = async () => {
        const variables = getVariables()
        console.log(variables)
        const result = await fetchData(query, variables);
        console.log(result);
        setMangas(result.data.Page.media);
        { result.data.Page.pageInfo ? setPageInfo(result.data.Page.pageInfo) : null }
    }

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <section className="manga-browse-section">
                <section className="manga-list">

                    {mangas.map(manga => {
                        return <MangaCard manga={manga} key={manga.id} />
                    })
                    }

                </section>

                <section className="pagination">
                    <Pagination count={pageInfo.lastPage} page={currentPage} onChange={handlePageChange}
                        boundaryCount={2} showFirstButton showLastButton size="large" />
                </section>

            </section>

        </>
    )
}

export default MangaList;