import { PosterListStyled } from "./posterList.styled";
import React, { useEffect, useState } from "react";
import { Poster } from "../poster/poster";
import supabase from "../../utils/supabaseClient";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Spinner } from "../spinner/spinner";

export const PosterList = () => {
    const navigate = useNavigate();
    const { selectedGenre, genreTitle } = useOutletContext();
    const [posters, setPosters] = useState([]);
    const [sortBy, setSortBy] = useState(["name", true]);
    const [loading, setLoading] = useState(true);

    const fetchPosters = async () => {
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
                const newPosters = await fetchPosters();
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
    }, [selectedGenre, sortBy]);

    return (
        <PosterListStyled>
            <ul>
                <li>
                    <h3>{`${genreTitle} - ${
                        loading ? "0" : posters.length
                    } plakater`}</h3>
                </li>
                <li>
                    <select
                        onChange={(e) => {
                            let newSortBy = [];

                            switch (e.target.value) {
                                default:
                                case "nameASC":
                                    newSortBy = ["name", true];
                                    break;
                                case "nameDESC":
                                    newSortBy = ["name", false];
                                    break;
                                case "priceASC":
                                    newSortBy = ["price", true];
                                    break;
                                case "priceDESC":
                                    newSortBy = ["price", false];
                                    break;
                            }

                            console.log(newSortBy);

                            setSortBy(newSortBy);
                        }}
                    >
                        <option value="nameASC">Navn: A - Å</option>
                        <option value="nameDESC">Navn: Å - A</option>
                        <option value="priceDESC">Pris: Høj - Lav</option>
                        <option value="priceASC">Pris: Lav - Høj</option>
                    </select>
                </li>
            </ul>

            <div className="posters">
                {loading ? (
                    <div className="loading">
                        <Spinner />
                    </div>
                ) : (
                    posters.map((poster) => (
                        <Poster key={poster.id} poster={poster} />
                    ))
                )}
            </div>
        </PosterListStyled>
    );
};
