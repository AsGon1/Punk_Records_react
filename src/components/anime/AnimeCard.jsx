import './AnimeCard.css';

function AnimeCard ({anime}){

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
                        Realese Date: {anime.title.english}
                    </li>
                    <li className="attribute episodes" >
                        Episodes: {anime.episodes}
                    </li>
                    <li className="attribute duration" >
                        Average Duration: {anime.duration}
                    </li>

                    <li className="attribute description" >
                        {anime.description}
                    </li>

                    <li className="attribute genres" >
                        Genres: {anime.genres.join(", ")}
                    </li>

                </ul>

                <button className='favButton'>Favorite</button>
                <button className='viewedButton'>Viewed</button>
                <button className='infoButton'>Info</button>

            </section>

        </article>
    )
}

export default AnimeCard;