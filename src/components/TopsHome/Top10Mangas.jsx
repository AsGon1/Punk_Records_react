import { useState, useRef, useEffect } from "react";
import MangaCard from '../manga/MangaCard.jsx';
import fetchData from "../../utils/api/anilistFetch.js";
import { topTenManga } from "../../utils/api/queries.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './Top10Mangas.css'

const responsive = {
  superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 50
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
  },
  tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
  }
};

function Top10Mangas() {

    const [mangas,setMangas] = useState([]);
    
    useEffect(()=>{
        handleLoadMangas();
    },[])

    const handleLoadMangas = async()=>{
        const result  = await fetchData(topTenManga);
        console.log(result);
        setMangas(result.data.Page.media);
    }

    return (

        <section className="topmanga">

            <h1>TOP 10 MANGAS</h1>

            <Carousel showDots={true}  partialVisible={true} responsive={responsive}>
                    {mangas.map(manga=>{
                        return <MangaCard manga={manga} key={manga.id} /> 
                    })
                    }
            </Carousel>
            
        </section>
    )

}

export default Top10Mangas;