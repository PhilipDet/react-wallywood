import { PostersStyled } from "./posters.styled";
import { useEffect, useState } from "react";
import { Poster } from "../../components/poster/poster";
import supabase from "../../utils/supabaseClient";

export const Posters = () => {
    const [posters, setPosters] = useState([]);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosters = async () => {
        if (supabase) {
            return await supabase
                .from("posters")
                .select("*")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    console.error(error);
                    return [];
                });
        }
    };

    const getGenres = async () => {
        if (supabase) {
            return await supabase
                .from("genres")
                .select("*")
                .then((response) => {
                    return response.data;
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
            const fetchData = async () => {
                setPosters(await getPosters());
                setGenres(await getGenres());
                setLoading(false);
            };

            fetchData();
        }
        return () => {
            hasRendered = true;
        };
    }, [loading]);

    const fetchPostersByGenreId = async (genre_id, sortBy) => {
        if (supabase) {
            return await supabase
                .from("genre_poster_rel")
                .select("*")
                .eq("genre_id", genre_id)
                .then(async (response) => {
                    const relations = response.data;

                    console.log(relations);

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

    const changeGenre = (genre) => {
        setLoading(true);

        if (genre === "all") {
            getPosters().then((posters) => {
                setPosters(posters.slice(0, 20));
            });
        } else {
            fetchPostersByGenreId(genre, ["name", true]).then((posters) => {
                setPosters(posters);
            });
        }

        setLoading(false);
    };

    return (
        <PostersStyled>
            <div className="genre">
                <ul>
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            <a onClick={() => changeGenre(genre.id)}>
                                {genre.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="posters">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    posters
                        .slice(0, 20)
                        .map((poster) => (
                            <Poster key={poster.id} poster={poster} />
                        ))
                )}
            </div>
        </PostersStyled>
    );
};
