import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"

function Root() {
    return (
        <section>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}

export default Root;