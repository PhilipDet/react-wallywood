import styled from "styled-components";

export const NavbarStyled = styled.nav`
    width: 100%;

    ul {
        display: flex;
        align-items: center;
        max-width: 1000px;
        margin: 0 auto;
        border-bottom: 1.5px solid #5c1f06;

        li {
            list-style: none;

            a {
                text-decoration: none;
                color: #333;
                padding: 0 20px;
                font-family: "Titillium Web", serif;
                font-size: 1.8rem;
                text-transform: uppercase;
                font-weight: 300;
                cursor: pointer;
            }

            &:first-child {
                margin-right: auto;

                a {
                    color: #d97852;
                    font-weight: 900;
                    font-size: 5.4rem;
                    text-transform: uppercase;
                }
            }
        }
    }
`;
