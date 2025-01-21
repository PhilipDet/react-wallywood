import styled from "styled-components";

export const AboutStyled = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;

    div {
        p {
            margin-bottom: 20px;
            font-size: 1.4rem;
        }
    }

    img {
        width: 100%;
    }
`;
