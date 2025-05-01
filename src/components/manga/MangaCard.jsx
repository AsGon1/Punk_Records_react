import './MangaCard.css';

function MangaCard ({manga}){

    return(
        <article className="manga card">
            
            <section className="manga-image">
                <img src={manga.coverImage.large} alt={manga.title.english? manga.title.english : manga.title.romaji}/>
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
                        Realese Date: {manga.title.english}
                    </li>
                    <li className="attribute episodes" >
                        Chapters: {manga.chapters}
                    </li>
                    <li className="attribute duration" >
                        Volumes: {manga.volumes}
                    </li>

                    <li className="attribute description" >
                        {manga.description}
                    </li>

                </ul>

                <p className="attribute genres" >
                        Genres: {manga.genres.join(", ")}
                </p>

                <button className='favButton'>Favorite</button>
                <button className='viewedButton'>Viewed</button>
                <button className='infoButton'>Info</button>

            </section>

        </article>
    )
}

export default MangaCard;