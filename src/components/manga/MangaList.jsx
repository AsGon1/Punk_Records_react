import { useState, useEffect } from "react";
import MangaCard from "./MangaCard.jsx";
import fetchData from "../../utils/api/anilistFetch.js";

import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

import './MangaList.css'


function MangaList({ query, variables }) {

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
    }, [variables])

    const handleLoadMangas = async () => {
        const variables = getVariables()
        console.log(variables)
        const result = await fetchData(query, variables);
        console.log(result);
        setMangas(result.data.Page.media);
        { result.data.Page.pageInfo ? setPageInfo(result.data.Page.pageInfo) : null }
    }

    const handlePrevPage = () => {
        setCurrentPage((prev) => {
            if (prev > 1) {
                return prev - 1;
            } else {
                return prev;
            }
        });
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => {
            if (prev < pageInfo.lastPage) {
                return prev + 1;
            } else {
                return prev;
            }
        });
    };

    return (
        <>
            <section className="manga-list">

                {mangas.map(manga => {
                    return <MangaCard manga={manga} key={manga.id} />
                })
                }

            </section>

            {pageInfo.hasNextPage && (
                <section className="pagination">
                    <button className="previous-page-button" disabled={currentPage == 1} onClick={handlePrevPage}>
                        <NavigateBeforeRoundedIcon />
                    </button>
                    <div className="pagination-list">
                        {/* {currentPage == 1? (

                        ):} */}
                    </div>
                    <button className="next-page-button"
                        disabled={pageInfo.hasNextPage ? true : false}
                        onClick={handleNextPage}>
                        <NavigateNextRoundedIcon />
                    </button>
                </section>
            )}
        </>
    )
}

export default MangaList;