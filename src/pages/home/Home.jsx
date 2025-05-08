
import Top10Mangas from "../../components/TopsHome/Top10Mangas";
import Top10Animes from "../../components/TopsHome/Top10Animes";

import AnimeNextSeason from "../../components/animeNextSeason/animeNextSeason";

import './Home.css'

function getSeasonAndYear() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let season;
    let nextSeason;
    let nextSeasonYear = year;

    if (month >= 1 && month <= 3) {
        season = "WINTER"; // Enero, Febrero, Marzo
        nextSeason = "SPRING"; // Invierno ➡ Primavera
    } else if (month >= 4 && month <= 6) {
        season = "SPRING"; // Abril, Mayo, Junio
        nextSeason = "SUMMER"; // Primavera ➡ Verano
    } else if (month >= 7 && month <= 9) {
        season = "SUMMER"; // Julio, Agosto, Septiembre
        nextSeason = "FALL"; // Verano ➡ Otoño
    } else {
        season = "FALL"; // Octubre, Noviembre, Diciembre
        nextSeason = "WINTER"; // Otoño ➡ Invierno (cambia el año)
        nextSeasonYear += 1;
    }

    return { season, seasonYear: year, nextSeason, nextSeasonYear };
}


function Home() {

    const { season, seasonYear, nextSeason, nextSeasonYear } = getSeasonAndYear();

    return (
        <>
            <AnimeNextSeason season={nextSeason} seasonYear={nextSeasonYear}/>
            <Top10Mangas/>
            <Top10Animes/>
        </>
    )
}

export default Home;