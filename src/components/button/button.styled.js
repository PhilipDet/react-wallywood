import styled from "styled-components";

export const ButtonStyled = styled.button`
    padding: ${(props) => (props.$type === "square" ? "6px" : "6px 24px")};
    background-color: #d1b3a7;
    border-radius: 3px;
    border: 1px solid #524641;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition: all 0.2s;

    &:hover {
        background-color:rgb(241, 209, 196);
        scale: 1.05;
    }
`;
