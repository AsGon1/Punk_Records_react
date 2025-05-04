import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchbar/SearchBar";
import Top10Mangas from "../../components/pages/homePage/Top10Mangas";
import Top10Animes from "../../components/pages/homePage/Top10Animes";
import Footer from "../../components/footer/Footer";
import Selector from "../../components/filters/Selector";
import MultOptSelector from "../../components/filters/MultOptSelector";

import types from "../../utils/api/selectOptions.js"

import './Home.css'

function Home() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
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
                
                <Top10Mangas/>
                <Top10Animes/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Home;