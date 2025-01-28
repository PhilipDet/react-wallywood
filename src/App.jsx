import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Headline } from "./components/headline/headline";

// Pages
import { Home } from "./pages/home/home";
import { Posters } from "./pages/posters/posters";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";

// Components
import { PosterList } from "./components/posterList/posterList";
import { PosterDetails } from "./components/posterDetails/posterDetails";

export const App = () => {
    return (
        <>
            <Header>
                <Navbar />
                <Headline />
            </Header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posters" element={<Posters />}>
                    <Route path=":genre_id" element={<PosterList />} />
                    <Route
                        path=":genre_id/:poster_id"
                        element={<PosterDetails />}
                    />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </>
    );
};
