import { useState, useEffect } from "react";
import { HeadlineStyled } from "./headline.styled";
import { useLocation } from "react-router-dom";

export const Headline = () => {
    const [headline, setHeadline] = useState("");
    const location = useLocation();
    const path = location.pathname;

    const headlineText = () => {
        switch (path) {
            case "/":
                return <img src="../../assets/curtain.jpg" />;
            case "/about":
                return <h2>Om os</h2>;
            case "/contact":
                return <h2>Kontakt os</h2>;
            case "/login":
                return <h2>Login</h2>;
            case "/register":
                return <h2>Registering af Profil</h2>;
            default:
                if (path.includes("/posters")) {
                    return <h2>Plakater</h2>;
                }
                return <h2>404</h2>;
        }
    };

    useEffect(() => {
        setHeadline(headlineText());
    }, [path]);

    return <HeadlineStyled>{headline}</HeadlineStyled>;
};
