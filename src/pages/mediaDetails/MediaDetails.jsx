import { getToken } from "../../utils/localstorage";
import {
    getFavoriteByMediaID, editFavorite, createFavorite, deleteReviewByFavoriteID, deleteFavoriteByID,
    getReviewByFavoriteID
} from "../../utils/backend/functions"

import { useParams, useLoaderData } from "react-router-dom";
import parse from "html-react-parser";

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";

import './MediaDetails.css'

function MediaDetails() {

    const media = useLoaderData();

    // Estados
    const [favData, setFavData] = useState({});

    const [isFav, setIsFav] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const [isMessage, setIsMessage] = useState(false);

    const token = getToken();

    const { userData } = useContext(AuthContext);

    useEffect(() => {
        handleFavData();
    }, [isMessage])

    const handleFavData = async () => {
        if (token) {
            const data = await getFavoriteByMediaID(media[0].id);
            console.log(data)
            if (data !== null) {
                setFavData(data);
                setIsFav(true);
                setIsFinished(data.finished);
            }else{
                setFavData({});
                setIsFav(false);
                setIsFinished(false);
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
                    media_name: media[0].title.english,
                    media_id: media[0].id,
                    media_type: media[0].type,
                    finished: false,
                    user_id: userData.user_id
                }

                const newData = createFavorite(data);
            }
            setIsMessage(!isMessage);
        }
    }

    const handleFinished = () => {
        if (token) {
            if(favData.favorite_id){

                const data = {
                    finished: !favData.finished
                }

                console.log(data);

                const edition = editFavorite(favData.favorite_id, data);
            }else{
                const data = {
                    media_name: media[0].title.english,
                    media_id: media[0].id,
                    media_type: media[0].type,
                    finished: true,
                    user_id: userData.user_id
                }

                const newData = createFavorite(data);
            }
            setIsMessage(!isMessage);
        }
    }

    return (
        <section className="media-details">
            <section className="media-data">
                <section className="media-data-img">
                    <img src={media[0].coverImage.extraLarge} alt={media[0].title.english ? media[0].title.english : media[0].title.romaji} />
                    <section className="buttons">
                        <button className='favButton' onClick={handleFavorite}>
                            {!isFav ? <FavoriteBorderIcon fontSize='medium' /> : <FavoriteIcon fontSize='medium' />}
                        </button>
                        {media[0].type === "ANIME" ? (
                            <button className='viewedButton' onClick={handleFinished}>
                                {!isFinished ? <VisibilityOffOutlinedIcon fontSize='medium' /> : <VisibilityIcon fontSize='medium' />}
                            </button>
                        ) : (
                            <button className='readButton' onClick={handleFinished}>
                                {!isFinished ? <BookmarkBorderIcon fontSize='medium' /> : <BookmarkIcon fontSize='medium' />}
                            </button>
                        )}
                    </section>
                </section>
                <section className="media-data-info">
                    <h3>{media[0].type} DETAILS</h3>
                    <ul className="title-list">
                        <li className="title-english" >
                            English: {media[0].title.english}
                        </li>
                        <li className="title-native" >
                            Native: {media[0].title.native}
                        </li>
                        <li className="title-romaji" >
                            Romaji: {media[0].title.romaji}
                        </li>
                    </ul>

                    {media[0].type === "ANIME" ? (
                        <ul className="attributes">
                            <li className="attribute date" >
                                Format: {media[0].format}
                            </li>
                            <li className="attribute date" >
                                Realese Date: {media[0].startDate.month + "/" + media[0].startDate.year}
                            </li>
                            <li className="attribute episodes" >
                                Episodes: {media[0].episodes === null ? "N/A" : media[0].episodes}
                            </li>
                            <li className="attribute duration" >
                                Average Duration: {media[0].duration === null ? "N/A" : media[0].duration}
                            </li>
                        </ul>
                    ) : (
                        <ul className="attributes">
                            <li className="attribute date" >
                                Format: {media[0].format}
                            </li>
                            <li className="attribute date" >
                                Realese Date: {media[0].startDate.month + "/" + media[0].startDate.year}
                            </li>
                            <li className="attribute episodes" >
                                Chapters: {media[0].chapters === null ? "N/A" : media[0].chapters}
                            </li>
                            <li className="attribute duration" >
                                Volumes: {media[0].volumes === null ? "N/A" : media[0].volumes}
                            </li>
                        </ul>
                    )}
                </section>
            </section>

            <section className="media-description">
                <h3>Description</h3>
                <p>{parse(media[0].description)}</p>
            </section>

            {media[0].characters.nodes.length > 0 ? (
                <section className="media-characters">
                    <h3>Characters</h3>
                    <section className="characters">
                        {media[0].characters.nodes.map(character => {
                            return (
                                <article className="character">
                                    <img src={character.image.medium} alt="Character" />
                                    <p>{character.name.first}</p>
                                </article>
                            )
                        })
                        }
                    </section>
                </section>
            ) : (
                <section className="media-characters">
                    <h3>Characters</h3>
                    <section className="no-characters-section">
                        <img className="no-characters-img" src={'../../public/sin_personajes.png'} alt="Character" />
                        <h4>There isn't characters info for this site</h4>
                    </section>
                </section>
            )}
        </section>
    )
}

export default MediaDetails;