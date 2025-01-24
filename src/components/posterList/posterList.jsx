import { PosterListStyled } from "./posterList.styled";
import React, { useEffect, useState } from "react";
import { Poster } from "../poster/poster";
import supabase from "../../utils/supabaseClient";
import { useOutletContext, useNavigate } from "react-router-dom";

export const PosterList = () => {
    const navigate = useNavigate();
    const { selectedGenre } = useOutletContext();
    const [posters, setPosters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPosters = async (sortBy) => {
        if (supabase) {
            return await supabase
                .from("genre_poster_rel")
                .select("*")
                .eq("genre_id", selectedGenre)
                .then(async (response) => {
                    const relations = response.data;

                    let posters = await Promise.all(
                        relations.map(async (rel) => {
                            try {
                                const response = await supabase
                                    .from("posters")
                                    .select("*")
                                    .eq("id", rel.poster_id);
                                return response.data[0];
                            } catch (error) {
                                console.error("Error fetching data:", error);
                                throw error;
                            }
                        })
                    );

                    posters.sort((a, b) => {
                        if (sortBy[1]) {
                            return a[sortBy[0]] > b[sortBy[0]] ? 1 : -1;
                        } else {
                            return a[sortBy[0]] < b[sortBy[0]] ? 1 : -1;
                        }
                    });

                    return posters;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    return [];
                });
        }
    };

    useEffect(() => {
        if (loading) {
            const fetchData = async () => {
                const newPosters = await fetchPosters(["name", true]);
                setPosters(newPosters);
                setLoading(false);
                navigate(`/posters/${selectedGenre}`, {
                    state: { postersLength: newPosters.length },
                });
            };

            fetchData();
        }
    }, [loading]);

    useEffect(() => {
        !loading && setLoading(true);
    }, [selectedGenre]);

    return (
        <PosterListStyled>
            {loading ? (
                <p>Loading...</p>
            ) : (
                posters
                    .slice(0, 20)
                    .map((poster) => <Poster key={poster.id} poster={poster} />)
            )}
        </PosterListStyled>
    );
};
