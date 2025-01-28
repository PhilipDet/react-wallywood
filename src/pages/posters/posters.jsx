import { PostersStyled } from "./posters.styled";
import { useContext, useEffect, useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { GenresContext } from "../../provider/genres";

export const Posters = () => {
    const { genre_id } = useParams();
    const navigate = useNavigate();

    const { genres } = useContext(GenresContext);
    const [selectedGenre, setSelectedGenre] = useState(Number(genre_id));
    const [genreTitle, setGenreTitle] = useState(
        genres.length > 0
            ? genres.find((genre) => genre.id === selectedGenre)?.title
            : ""
    );

    const changeGenre = (genreId) => {
        setSelectedGenre(genreId);
        navigate(`/posters/${genreId}`);
    };

    useEffect(() => {
        setGenreTitle(
            genres
                ? genres.find((genre) => genre.id === selectedGenre)?.title
                : ""
        );
    }, [genres, selectedGenre]);

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
