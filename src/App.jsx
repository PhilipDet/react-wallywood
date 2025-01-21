import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

// Pages
import { Home } from "./pages/home/home";
import { Posters } from "./pages/posters/posters";
import { About } from "./pages/about/about";

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posters" element={<Posters />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
};
