import { useState, useEffect } from "react";
import AnimeCard from '../anime/AnimeCard.jsx';
import fetchData from "../../utils/api/anilistFetch.js";
import { GET_ANIME_UPCOMING_SEASON } from "../../utils/api/queries.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './animeNextSeason.css'

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

function AnimeNextSeason({ season, seasonYear }) {

    const [animes, setAnimes] = useState([]);

    let variables = {
        page: 1,
        perPage: 10,
        type: "ANIME",
        status: "NOT_YET_RELEASED",
        season,
        seasonYear,
        sort: "POPULARITY_DESC",
    }

    useEffect(() => {
        handleLoadAnimes();
    }, [])

    const handleLoadAnimes = async () => {
        const result = await fetchData(GET_ANIME_UPCOMING_SEASON, variables);
        console.log(result);
        setAnimes(result.data.Page.media);
    }

    return (

        <section className="upcoming-season">

            <h1>{season} SEASON</h1>

            <Carousel responsive={responsive}>
                {animes.map(anime => {
                    return <AnimeCard anime={anime} key={anime.id} />
                })
                }
            </Carousel>

        </section>
    )

}

export default AnimeNextSeason;