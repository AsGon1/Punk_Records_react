import { useState, useEffect } from "react";
import AnimeCard from '../anime/AnimeCard.jsx';
import fetchData from "../../utils/api/anilistFetch.js";
import { topTenAnime } from "../../utils/api/queries.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './Top10Animes.css'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Top10Animes() {

    const [animes,setAnimes] = useState([]);
    
    useEffect(()=>{
        handleLoadAnimes();
    },[])

    const handleLoadAnimes = async()=>{
        const result  = await fetchData(topTenAnime);
        console.log(result);
        setAnimes(result.data.Page.media);
    }

    return (

        <section className="topanime">

            <h1>TOP 10 ANIMES</h1>

            <Carousel showDots={true} responsive={responsive}>
                {animes.map(anime=>{
                    return <AnimeCard anime={anime} key={anime.id} /> 
                })
                }
            </Carousel>

        </section>
    )

}

export default Top10Animes;