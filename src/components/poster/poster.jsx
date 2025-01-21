import {
    FrontpagePosterStyled,
    PosterStyled,
    ProductStyled,
} from "./poster.styled";
import { Button } from "../button/button";

export const FrontpagePoster = ({ poster }) => {
    return (
        <FrontpagePosterStyled>
            <img src={poster.image} alt={poster.name} />
            <div className="information">
                <strong>{poster.name}</strong>
                <p>
                    {poster.description === undefined
                        ? "Ingen beskrivelse.."
                        : poster.description}
                </p>
                <div className="actions">
                    <Button>Læs mere</Button>
                    <Button></Button>
                </div>
            </div>
        </FrontpagePosterStyled>
    );
};
