import styled from "styled-components";

export const FrontpagePosterStyled = styled.div`
    display: flex;
    gap: 20px;
    max-width: 490px;

    img {
        height: 208px;
        width: 140px;
    }

    .information {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 9px;
        }

        p {
            font-size: 1.4rem;
            font-weight: 400;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 5; /* number of lines to show */
            line-clamp: 5;
            -webkit-box-orient: vertical;
        }

        .actions {
            display: flex;
            gap: 10px;
            margin-top: auto;
        }
    }
`;

export const PosterStyled = styled.div``;

export const ProductStyled = styled.div``;
