import styled from "styled-components";

export const NavbarStyled = styled.nav`
    width: 100%;
    height: 60px;

    ul {
        display: flex;
        max-width: 1000px;

        li {
            list-style: none;

            a {
                text-decoration: none;
                color: #333;
                padding: 20px;
            }

            &:nth-first-child {
                margin-left: auto;
            }
        }
    }
`;
