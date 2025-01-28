import styled from "styled-components";

export const PosterDetailsStyled = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: auto 1fr;
    gap: 20px 35px;

    h3 {
        grid-column: 1 / -1;
        font-size: 2rem;
    }

    .information {
        grid-column: 1 / 2;
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 1.4rem;

        strong {
            font-size: 2rem;
        }

        .actions {
            display: flex;
            gap: 13px;
        }
    }

    img {
        grid-column: 2 / 3;
        width: 100%;
    }

    .loading {
        height: 100%;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
`;
