import styled from "styled-components";

export const HomeStyled = styled.div`
    flex: 1;

    h3 {
        font-size: 3.4rem;
        font-weight: 700;
        color: #d97852;
        margin: 17px 0 17px 0;
    }

    .posters {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex: 1;
        gap: 40px 20px;
    }
`;
