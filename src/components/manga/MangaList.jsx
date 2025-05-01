import { useState,useEffect } from "react";
import MangaCard from "./MangaCard.jsx";
import fetchData from "../../utils/api/anilistFetch.js";
import './MangaList.css'


function AnimeList({query, variables}){
    const [mangas,setMangas] = useState([]);
    
    useEffect(()=>{
        handleLoadMangas();
    },[])

    const handleLoadMangas = async()=>{
        const result  = await fetchData(query, variables);
        console.log(result);
        setMangas(result.data.Page.media);
    }

    return (
        <section className="anime-list">

            {mangas.map(manga => {
                return <MangaCard manga={manga} key={manga.id} /> 
            })
            }

        </section>
    )
}

export default AnimeList;