
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import InfoIcon from '@mui/icons-material/Info';

import parse from "html-react-parser";

import './AnimeCard.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function AnimeCard ({anime}){

    // Estado
    const [isFav, setIsFav] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    return(
        <article className="anime card">
            
            <section className="anime-image">
                <img src={anime.coverImage.large} alt={anime.title.english? anime.title.english : anime.title.romaji}/>
            </section>

            <section className="anime-data">
                
                <ul className="title-list">
                    <li className="title-english" >
                        English: {anime.title.english}
                    </li>
                    <li className="title-native" >
                        Native: {anime.title.native}
                    </li>
                    <li className="title-romaji" >
                        Romaji: {anime.title.romaji}
                    </li>
                </ul>

                <h4 className="anime-format">{anime.format}</h4>

                <ul className="anime-attributes">
                    <li className="attribute date" >
                        Realese Date: {anime.startDate.year}
                    </li>
                    <li className="attribute episodes" >
                        Episodes: {anime.episodes}
                    </li>
                    <li className="attribute duration" >
                        Average Duration: {anime.duration}
                    </li>

                    <li className="attribute description" >
                        <p>{parse(anime.description)}</p>
                    </li>

                </ul>

                <p className="attribute genres" >
                        Genres: {anime.genres.join(", ")}
                </p>

                <button className='favButton'>
                    {!isFav? <FavoriteBorderIcon fontSize='small'/> : <FavoriteIcon fontSize='small'/> }
                </button>
                <button className='viewedButton'>
                    {!isFinished? <VisibilityOutlinedIcon fontSize='small'/> : <VisibilityIcon fontSize='small'/> }
                </button>
                <NavLink className='infoButton' to={"/media/" + anime.id}>
                    <InfoIcon fontSize='small'/>
                </NavLink>

            </section>

        </article>
    )
}

export default AnimeCard;