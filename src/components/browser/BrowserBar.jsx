import Selector from "./filters/Selector";
import MultOptSelector from "./filters/MultOptSelector";
import SearchBar from "./searchbar/SearchBar";

import "./BrowserBar.css";

function BrowserBar () {


    return(
        <section className="search">
            
            <SearchBar/>
            <section className="filters">
                <Selector
                    options={[
                        { id: "ANIME", label: "Anime" },
                        { id: "MANGA", label: "Manga" },
                    ]}
                    noOptionText={"Any"}
                    defaultValue={0}
                    noNull={true}
                />
                <MultOptSelector
                            options={[
                                {
                                    id: "Action",
                                    label: "Action",
                                },
                                {
                                    id: "Adventure",
                                    label: "Adventure",
                                },
                                {
                                    id: "Comedy",
                                    label: "Comedy",
                                },
                                {
                                    id: "Drama",
                                    label: "Drama",
                                },
                                {
                                    id: "Fantasy",
                                    label: "Fantasy",
                                },
                                {
                                    id: "Horror",
                                    label: "Horror",
                                },
                                {
                                    id: "Mahou Shoujo",
                                    label: "Mahou Shoujo",
                                },
                                {
                                    id: "Mecha",
                                    label: "Mecha",
                                },
                                {
                                    id: "Music",
                                    label: "Music",
                                },
                                {
                                    id: "Mystery",
                                    label: "Mystery",
                                },
                                {
                                    id: "Psychological",
                                    label: "Psychological",
                                },
                                {
                                    id: "Romance",
                                    label: "Romance",
                                },
                                {
                                    id: "Sci-Fi",
                                    label: "Sci-Fi",
                                },
                                {
                                    id: "Slice of Life",
                                   label: "Slice of Life",
                                },
                                {
                                    id: "Sports",
                                    label: "Sports",
                                },
                                {
                                    id: "Supernatural",
                                    label: "Supernatural",
                                },
                                {
                                    id: "Thriller",
                                    label: "Thriller",
                                },
                            ]}
                            noOptionText={"Any"}
                />
                <Selector
                            options={[
                                {
                                    id: "POPULARITY_DESC",
                                    label: "Popularity",
                                },
                                {
                                    id: "TRENDING_DESC",
                                    label: "Trending",
                                },
                                {
                                    id: "SCORE_DESC",
                                    label: "Average Score",
                                },
                            ]}
                            noOptionText={"Any"}
                            defaultValue={0}
                            noNull={true}
                />
            </section>

        </section>
    )
}

export default BrowserBar;