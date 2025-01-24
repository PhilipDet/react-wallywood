import { PostersStyled } from "./posters.styled";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import supabase from "../../utils/supabaseClient";

export const Posters = () => {
    const { genre_id } = useParams();

    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(Number(genre_id));
    const [genreTitle, setGenreTitle] = useState(
        genres.length > 0
            ? genres.find((genre) => genre.id === selectedGenre)?.title
            : ""
    );
    const [loading, setLoading] = useState(true);

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

    const changeGenre = (genreId) => {
        setSelectedGenre(genreId);
        setGenreTitle(
            genres ? genres.find((genre) => genre.id === genreId)?.title : ""
        );
    };

    useEffect(() => {
        let hasRendered = false;
        if (loading) {
            const fetchData = async () => {
                const newGenres = await getGenres();
                setGenres(newGenres);
                const newGenreTitle = newGenres.find(
                    (genre) => genre.id === selectedGenre
                )?.title;
                setGenreTitle(newGenreTitle);
                setLoading(false);
            };

            fetchData();
        }
        return () => {
            hasRendered = true;
        };
    }, [loading]);

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

            <Outlet context={{ selectedGenre, genreTitle }} />
        </PostersStyled>
    );
};
