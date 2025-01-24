import styled from "styled-components";

export const PosterListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;

    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;

        li {
            h3 {
                font-size: 2rem;
                text-transform: capitalize;
            }
        }
    }

    .posters {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
        width: 100%;
        justify-content: center;
        flex: 1;

        div {
            img {
                width: 100%;
                height: 375px;
            }

            .information {
                strong {
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    line-clamp: 1;
                    -webkit-box-orient: vertical;
                }

                p {
                    font-size: 1.4rem;
                }

                .actions {
                    margin-top: 10px;
                }
            }
        }
    }

    .loading {
        height: 100%;
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
`;
