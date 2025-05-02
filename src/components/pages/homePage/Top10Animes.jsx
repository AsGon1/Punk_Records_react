import { useState, useRef, useEffect } from "react";
import AnimeCard from '../../anime/AnimeCard';
import fetchData from "../../../utils/api/anilistFetch.js";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './Top10Animes.css'

function reorderArrayByIndex(array, index) {
    return [
        ...array.slice(index), // Elementos desde el índice hacia adelante
        ...array.slice(0, index), // Elementos desde el inicio hasta el índice
    ];
}

let animesArray = [];

function Top10Animes({query}) {

    const [currentAnimeIndex, setCurrentAnimeIndex] = useState(0);
    const [animes,setAnimes] = useState([]);
    
    useEffect(()=>{
        handleLoadAnimes();
    },[])

    const handleLoadAnimes = async()=>{
        const result  = await fetchData(query);
        console.log(result);
        setAnimes(result.data.Page.media);
    }

    const handlePreviousAnime = () => {
        setCurrentAnimeIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : animes.length - 1
        );
    };

    const handleNextAnime = () => {
        setCurrentAnimeIndex((prevIndex) =>
            prevIndex < animes.length - 1 ? prevIndex + 1 : 0
        );
    };

    animesArray = reorderArrayByIndex(animes, currentAnimeIndex);

    return (

        <section className="topanime">

            <h1>TOP 10 ANIMES</h1>

            <button className="topanime-prev-button" onClick={() => handlePreviousAnime()}>
                <ArrowBackIosNewIcon fontSize="small" />
            </button>

            <section className="anime-list">

                {animesArray.map(anime=>{
                    return <AnimeCard anime={anime} key={anime.id} /> 
                })
                }

            </section>

            <button className="topanime-next-button" onClick={() => handleNextAnime()}>
                <ArrowForwardIosIcon fontSize="small" />
            </button>

        </section>
    )

}

export default Top10Animes;