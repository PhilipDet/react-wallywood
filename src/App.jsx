import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Headline } from "./components/headline/headline";

// Pages
import { Home } from "./pages/home/home";
import { Posters } from "./pages/posters/posters";
import { About } from "./pages/about/about";

export const App = () => {
    return (
        <>
            <header>
                <Navbar />
                <Headline />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posters" element={<Posters />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
};
