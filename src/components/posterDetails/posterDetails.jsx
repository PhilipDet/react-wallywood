import { useParams } from "react-router-dom";
import { PosterDetailsStyled } from "./posterDetails.styled";
import { useEffect, useState } from "react";
import { GetData } from "../../hooks/fetch";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "../button/button";
import { Spinner } from "../spinner/spinner";

export const PosterDetails = () => {
    const { poster_id } = useParams();
    const [poster, setPoster] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            const fetchData = async () => {
                const newPoster = await GetData("posters", ["id", poster_id]);
                setPoster(newPoster[0]);
                setLoading(false);
            };

            fetchData();
        }
    }, [poster_id]);

    return (
        <PosterDetailsStyled>
            {loading ? (
                <div className="loading">
                    <Spinner />
                </div>
            ) : (
                <h3>{poster.name}</h3>
            )}
            {loading ? (
                ""
            ) : (
                <>
                    <div className="information">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: poster.description,
                            }}
                        ></div>
                        <p>
                            Størrelse: {poster.width} x {poster.height} cm
                        </p>
                        <p>Varenummer (SKU): {poster_id}</p>
                        <strong>Pris: {poster.price},00 DKK</strong>

                        <div className="actions">
                            <Button>Læg i kurv</Button>
                            <Button type="square">
                                <FaRegHeart />
                            </Button>
                        </div>
                    </div>
                    <img src={poster.image} alt={poster.name} />
                </>
            )}
        </PosterDetailsStyled>
    );
};
