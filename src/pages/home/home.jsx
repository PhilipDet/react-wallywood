import { HomeStyled } from "./home.styled";
import { useState, useEffect } from "react";
import { FrontpagePoster as Poster } from "../../components/poster/poster";
import { GetData } from "../../hooks/fetch";

export const Home = () => {
    const [posters, setPosters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let hasRendered = false;
        if (loading) {
            const fetchPosters = async () => {
                const shuffledPosters = await GetData("posters").then(
                    (response) => {
                        return response.sort(() => 0.5 - Math.random());
                    }
                );
                if (!hasRendered) {
                    setPosters(shuffledPosters);
                    setLoading(false);
                }
            };

            fetchPosters();
        }
        return () => {
            hasRendered = true;
        };
    }, [loading]);

    return (
        <HomeStyled>
            <h3>Fire tilfældige...</h3>
            {loading ? (
                <p>Henter Plakater...</p>
            ) : (
                <div className="posters">
                    {posters.slice(0, 4).map((poster) => (
                        <Poster key={poster.id} poster={poster} />
                    ))}
                </div>
            )}
        </HomeStyled>
    );
};
