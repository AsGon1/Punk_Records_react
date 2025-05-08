import { useParams, useLoaderData } from "react-router-dom";
import { useState } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

function MediaDetails() {

    const media = useLoaderData();
    console.log(media[0].characters.nodes)
    // Estado
    const [isFav, setIsFav] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    return (
        <section className="media-details">
            <section className="media-data">
                <section className="media-data-img">
                    <img src={media[0].coverImage.large} alt={media[0].title.english ? media[0].title.english : media[0].title.romaji} />
                    <section className="buttons">
                        <button className='favButton'>
                            {!isFav ? <FavoriteBorderIcon fontSize='small' /> : <FavoriteIcon fontSize='small' />}
                        </button>
                        <button className='viewedButton'>
                            {!isFinished ? <VisibilityOutlinedIcon fontSize='small' /> : <VisibilityIcon fontSize='small' />}
                        </button>
                    </section>
                </section>
                <section className="media-data-info">
                    <h3>{media[0].type} Details</h3>
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
                                Realese Date: {media[0].startDate.year}
                            </li>
                            <li className="attribute episodes" >
                                Episodes: {media[0].episodes}
                            </li>
                            <li className="attribute duration" >
                                Average Duration: {media[0].duration}
                            </li>
                        </ul>
                    ) : (
                        <ul className="attributes">
                            <li className="attribute date" >
                                Format: {media[0].format}
                            </li>
                            <li className="attribute date" >
                                Realese Date: {media[0].startDate.year}
                            </li>
                            <li className="attribute episodes" >
                                Chapters: {media[0].chapters}
                            </li>
                            <li className="attribute duration" >
                                Volumes: {media[0].volumes}
                            </li>
                        </ul>
                    )}
                </section>
            </section>

            <section className="media-description">
                <h3>Description</h3>
                <p>{media[0].description}</p>
            </section>
            
            {media[0].characters.nodes.length > 0 ? (
                <section className="media-characters">
                    <h3>Characters</h3>
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
            ) : (
                <section className="media-characters">
                    <h3>Characters</h3>
                    <h1>There is no characters info for this site</h1>
                </section>
            )}

        </section>
    )
}

export default MediaDetails;