import { getToken } from "../../utils/localstorage";
import {
    getFavoriteByMediaID, editFavorite, createFavorite, deleteReviewByFavoriteID, deleteFavoriteByID,
    getReviewByFavoriteID
} from "../../utils/backend/functions"

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import InfoIcon from '@mui/icons-material/Info';

import parse from "html-react-parser";

import './AnimeCard.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";

function AnimeCard({ anime }) {

    // Estados
    const [favData, setFavData] = useState({});

    const [isFav, setIsFav] = useState(false);
    const [isViewed, setIsViewed] = useState(false);

    const [isMessage, setIsMessage] = useState(false);

    const token = getToken();

    const {userData} = useContext(AuthContext);

    useEffect(() => {
        handleFavData();
    }, [isMessage])

    const handleFavData = async () => {
        if (token) {
            const data = await getFavoriteByMediaID(anime.id);
            console.log(data)
            if (data !== null) {
                setFavData(data);
                setIsFav(true);
                setIsViewed(data.finished);
            }else{
                setFavData({});
                setIsFav(false);
                setIsViewed(false);
            }
        }
    }

    // Funciones de Favoritado
    const handleFavorite = () => {
        if (token) {
            if (favData.favorite_id){
                deleteFavoriteByID(favData.favorite_id);
            }else{
                const data = {
                    media_name: anime.title.english,
                    media_id: anime.id,
                    media_type: anime.type,
                    finished: false,
                    user_id: userData.user_id
                }

                const newData = createFavorite(data);
            }
            setIsMessage(!isMessage);
        }
    }

    const handleViewed = () => {
        if (token) {
            if(favData.favorite_id){

                const data = {
                    finished: !favData.finished
                }

                console.log(data);

                const edition = editFavorite(favData.favorite_id, data);
            }else{
                const data = {
                    media_name: anime.title.english,
                    media_id: anime.id,
                    media_type: anime.type,
                    finished: true,
                    user_id: userData.user_id
                }

                const newData = createFavorite(data);
            }
            setIsMessage(!isMessage);
        }
    }

    return (
        <article className="anime card">

            <section className="anime-image">
                <img src={anime.coverImage.large} alt={anime.title.english ? anime.title.english : anime.title.romaji} />
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

                <button className='favButton' onClick={handleFavorite}>
                    {!isFav ? <FavoriteBorderIcon fontSize='small' /> : <FavoriteIcon fontSize='small' />}
                </button>
                <button className='viewedButton' onClick={handleViewed}>
                    {!isViewed ? <VisibilityOutlinedIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
                </button>
                <NavLink className='infoButton' to={"/media/" + anime.id}>
                    <InfoIcon fontSize='small' />
                </NavLink>

            </section>

        </article>
    )
}

export default AnimeCard;