import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Headline } from "./components/headline/headline";

// Pages
import { Home } from "./pages/home/home";
import { Posters } from "./pages/posters/posters";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Login } from "./pages/login/login";

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
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Footer />
        </>
    );
};
