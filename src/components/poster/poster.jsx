import {
    FrontpagePosterStyled,
    PosterStyled,
    ProductStyled,
} from "./poster.styled";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "../button/button";

export const FrontpagePoster = ({ poster }) => {
    return (
        <FrontpagePosterStyled>
            <img src={poster.image} alt={poster.name} />
            <div className="information">
                <strong>{poster.name}</strong>
                <p>
                    {poster.description === null
                        ? "Ingen beskrivelse.."
                        : poster.description}
                </p>
                <div className="actions">
                    <Button>Læs mere</Button>
                    <Button type="square">
                        <FaRegHeart />
                    </Button>
                </div>
            </div>
        </FrontpagePosterStyled>
    );
};

export const Poster = ({ poster }) => {
    return (
        <PosterStyled>
            <img src={poster.image} alt={poster.name} />
            <div className="information">
                <strong>{poster.name}</strong>
                <p>Kr. {poster.price},00</p>
                <div className="actions">
                    <Button>Læg i kurv</Button>
                    <Button type="square">
                        <FaRegHeart />
                    </Button>
                </div>
            </div>
        </PosterStyled>
    );
};
