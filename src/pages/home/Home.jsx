import Navbar from "../../components/navbar/Navbar";
import Top10Mangas from "../../components/TopsHome/Top10Mangas";
import Top10Animes from "../../components/TopsHome/Top10Animes";
import Footer from "../../components/footer/Footer";
import BrowserBar from "../../components/browser/BrowserBar";

import './Home.css'

function Home() {
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <BrowserBar/>
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