import { useState, useRef, useEffect } from "react";
import MangaCard from '../../manga/MangaCard';
import fetchData from "../../../utils/api/anilistFetch.js";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './Top10Mangas.css'

function reorderArrayByIndex(array, index) {
    return [
        ...array.slice(index), // Elementos desde el índice hacia adelante
        ...array.slice(0, index), // Elementos desde el inicio hasta el índice
    ];
}

let animesArray = [];

function Top10Mangas({query}) {

    const [currentMangaIndex, setCurrentMangaIndex] = useState(0);
    const [animes,setMangas] = useState([]);
    
    useEffect(()=>{
        handleLoadMangas();
    },[])

    const handleLoadMangas = async()=>{
        const result  = await fetchData(query);
        console.log(result);
        setMangas(result.data.Page.media);
    }

    const handlePreviousManga = () => {
        setCurrentMangaIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : animes.length - 1
        );
    };

    const handleNextManga = () => {
        setCurrentMangaIndex((prevIndex) =>
            prevIndex < animes.length - 1 ? prevIndex + 1 : 0
        );
    };

    animesArray = reorderArrayByIndex(animes, currentMangaIndex);

    return (

        <section className="topmanga">

            <h1>TOP 10 MANGAS</h1>

            <button className="topmanga-prev-button" onClick={() => handlePreviousManga()}>
                <ArrowBackIosNewIcon fontSize="small" />
            </button>

            <section className="manga-list">

                {animesArray.map(manga=>{
                    return <MangaCard manga={manga} key={manga.id} /> 
                })
                }

            </section>

            <button className="topmanga-next-button" onClick={() => handleNextManga()}>
                <ArrowForwardIosIcon fontSize="small" />
            </button>

        </section>
    )

}

export default Top10Mangas;