import { PosterListStyled } from "./posterList.styled";
import React, { useEffect, useState } from "react";
import { Poster } from "../poster/poster";
import { GetData } from "../../hooks/fetch";
import { useOutletContext, useNavigate } from "react-router-dom";
import { Spinner } from "../spinner/spinner";

export const PosterList = () => {
    const navigate = useNavigate();
    const { selectedGenre, genreTitle } = useOutletContext();
    const [posters, setPosters] = useState([]);
    const [sortBy, setSortBy] = useState(["name", true]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            const fetchData = async () => {
                try {
                    const responses = await GetData("genre_poster_rel", [
                        "genre_id",
                        selectedGenre,
                    ]);

                    const newPosters = await Promise.all(
                        responses.map(async (res) => {
                            try {
                                const response = await GetData("posters", [
                                    "id",
                                    res.poster_id,
                                ]);
                                return response[0];
                            } catch (error) {
                                console.error("Error fetching poster:", error);
                                return null;
                            }
                        })
                    );

                    const filteredPosters = newPosters.filter(Boolean);

                    filteredPosters.sort((a, b) => {
                        if (sortBy[1]) {
                            return a[sortBy[0]] > b[sortBy[0]] ? 1 : -1;
                        } else {
                            return a[sortBy[0]] < b[sortBy[0]] ? 1 : -1;
                        }
                    });

                    setPosters(filteredPosters);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [loading]);

    useEffect(() => {
        !loading && setLoading(true);
    }, [selectedGenre, sortBy]);

    const getSortBy = (value) => {
        switch (value) {
            default:
            case "nameASC":
                return ["name", true];
            case "nameDESC":
                return ["name", false];
            case "priceASC":
                return ["price", true];
            case "priceDESC":
                return ["price", false];
        }
    };

    const showPoster = (id) => {
        navigate(`/posters/${selectedGenre}/${id}`);
    };

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
                            setSortBy(getSortBy(e.target.value));
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
                        <Poster
                            key={poster.id}
                            poster={poster}
                            showPoster={() => showPoster(poster.id)}
                        />
                    ))
                )}
            </div>
        </PosterListStyled>
    );
};
