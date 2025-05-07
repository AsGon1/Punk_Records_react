
import Top10Mangas from "../../components/TopsHome/Top10Mangas";
import Top10Animes from "../../components/TopsHome/Top10Animes";

import BrowserBar from "../../components/browser/BrowserBar";

import './Home.css'

function Home() {
    return (
        <>
            <main>
                <BrowserBar/>
                <Top10Mangas/>
                <Top10Animes/>
            </main>
        </>
    )
}

export default Home;