import { HomeStyled } from "./home.styled";
import { useState, useEffect } from "react";
import { FrontpagePoster as Poster } from "../../components/poster/poster";
import supabase from "../../utils/supabaseClient";

export const Home = () => {
    const [posters, setPosters] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        if (supabase) {
            return await supabase
                .from("posters")
                .select("*")
                .then((response) => {
                    const shuffledPosters = response.data.sort(
                        () => 0.5 - Math.random()
                    );
                    return shuffledPosters;
                })
                .catch((error) => {
                    console.error(error);
                    return [];
                });
        }
    };

    useEffect(() => {
        let hasRendered = false;
        if (loading) {
            const fetchPosters = async () => {
                const shuffledPosters = await getData();
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
