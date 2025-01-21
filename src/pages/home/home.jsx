import { HomeStyled } from "./home.styled";
import { useContext, useEffect } from "react";
import { PostersContext } from "../../providers/posters";

export const Home = () => {
    const { posters } = useContext(PostersContext);

    useEffect(() => {
        console.log(posters);
    }, [posters]);
    return (
        <HomeStyled>
            <h1>Home</h1>
        </HomeStyled>
    );
};
