import { PostersStyled } from "./posters.styled";
import { useEffect, useState } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import supabase from "../../utils/supabaseClient";

export const Posters = () => {
    const { genre_id } = useParams();
    const location = useLocation();
    const posterLength = location.state?.postersLength;

    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(genre_id);
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
    };

    useEffect(() => {
        let hasRendered = false;
        if (loading) {
            const fetchData = async () => {
                setGenres(await getGenres());
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

            <ul>
                <li>
                    <h3>
                        {`${
                            genres.find((genre) => genre.id === selectedGenre)
                                ?.title
                        } - ${posterLength} plakater`}
                    </h3>
                </li>
            </ul>

            <Outlet context={{ selectedGenre }} />
        </PostersStyled>
    );
};
