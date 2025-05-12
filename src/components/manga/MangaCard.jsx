import { getToken } from "../../utils/localstorage";

import {
    getFavoriteByMediaID, editFavorite, createFavorite, deleteReviewByFavoriteID, deleteFavoriteByID,
    getReviewByFavoriteID
} from "../../utils/backend/functions"

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import InfoIcon from '@mui/icons-material/Info';

import parse from "html-react-parser";

import './MangaCard.css';

import { NavLink } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";

function MangaCard({ manga }) {

    // Estados
    const [favData, setFavData] = useState({});

    const [isFav, setIsFav] = useState(false);
    const [isRead, setIsRead] = useState(false);

    const [isMessage, setIsMessage] = useState(false);

    const token = getToken();

    const {userData} = useContext(AuthContext);

    useEffect(() => {
        handleFavData();
    }, [isMessage])

    const handleFavData = async () => {
        if (token) {
            const data = await getFavoriteByMediaID(manga.id);
            console.log(data)
            if (data !== null) {
                setFavData(data);
                setIsFav(true);
                setIsRead(data.finished);
            }else{
                setFavData({});
                setIsFav(false);
                setIsRead(false);
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
                media_name: manga.title.english,
                media_id: manga.id,
                media_type: manga.type,
                finished: false,
                user_id: userData.user_id
            }

            const newData = createFavorite(data);
        }
        setIsMessage(!isMessage);
    }
}

const handleRead = () => {
    if (token) {
        if(favData.favorite_id){

            const data = {
                finished: !favData.finished
            }

            console.log(data);

            const edition = editFavorite(favData.favorite_id, data);
        }else{
            const data = {
                media_name: manga.title.english,
                media_id: manga.id,
                media_type: manga.type,
                finished: true,
                user_id: userData.user_id
            }

            const newData = createFavorite(data);
        }
        setIsMessage(!isMessage);
    }
}

    return (
        <article className="manga card">

            <section className="manga-image">
                <img src={manga.coverImage.large} alt={manga.title.english ? manga.title.english : manga.title.romaji} />
            </section>

            <section className="manga-data">

                <ul className="title-list">
                    <li className="title-english" >
                        English: {manga.title.english}
                    </li>
                    <li className="title-native" >
                        Native: {manga.title.native}
                    </li>
                    <li className="title-romaji" >
                        Romaji: {manga.title.romaji}
                    </li>
                </ul>

                <h4 className="manga-format">{manga.format}</h4>

                <ul className="manga-attributes">
                    <li className="attribute date" >
                        Realese Date: {manga.startDate.year}
                    </li>
                    <li className="attribute episodes" >
                        Chapters: {manga.chapters}
                    </li>
                    <li className="attribute duration" >
                        Volumes: {manga.volumes}
                    </li>

                    <li className="attribute description" >
                        {parse(manga.description)}
                    </li>

                </ul>

                <p className="attribute genres" >
                    Genres: {manga.genres.join(", ")}
                </p>

                <button className='favButton' onClick={handleFavorite}>
                    {!isFav ? <FavoriteBorderIcon fontSize='small' /> : <FavoriteIcon fontSize='small' />}
                </button>
                <button className='readButton' onClick={handleRead}>
                    {!isRead ? <BookmarkBorderIcon fontSize='small' /> : <BookmarkIcon fontSize='small' />}
                </button>
                <NavLink className='infoButton' to={"/media/" + manga.id}>
                    <InfoIcon fontSize='small'/>
                </NavLink>

            </section>

        </article>
    )
}

export default MangaCard;