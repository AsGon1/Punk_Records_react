import { useState,useEffect } from "react";
import AnimeCard from "./AnimeCard";
import fetchData from "../../utils/api/anilistFetch.js";


function AnimeList({query, variables}){
    const [animes,setAnimes] = useState([]);
    
    useEffect(()=>{
        handleLoadAnimes();
    },[])

    const handleLoadAnimes = async()=>{
        const result  = await fetchData(query, variables);
        console.log(result);
        setAnimes(result.data.Page.media);
    }

    return (
        <section className="anime-list">

            {animes.map(anime=>{
                return <AnimeCard anime={anime} key={anime.id} /> 
            })
            }

        </section>
    )
}

export default AnimeList;