import styled from "styled-components";

export const NavbarStyled = styled.nav`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    .toggle-button {
        display: none;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 2;
    }

    .logo {
        display: none;
        color: #d97852;
        font-weight: 900;
        font-size: 5.4rem;
        text-transform: uppercase;
        text-decoration: none;
        font-family: "Titillium Web", serif;
    }

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

    @media (max-width: 1043px) {
        .toggle-button {
            display: block;
        }

        .logo {
            display: block;
        }

        .mobilelogo {
            display: none;
        }

        ul {
            display: none;
            flex-direction: column;
            width: 100%;

            &.open {
                display: flex;
            }

            li {
                width: 100%;
                text-align: center;

                a {
                    padding: 10px 0;
                    width: 100%;
                    display: block;
                }
            }
        }
        @media (max-width: 400px) {
            ul li a {
                font-size: 1.7rem;
            }

            ul li:first-child a {
                font-size: 2rem;
            }
        }
    }
`;
