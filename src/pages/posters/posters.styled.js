import styled from "styled-components";

export const PostersStyled = styled.div`
    display: flex;

    .genre {
        display: flex;
        flex-direction: column;
        width: 200px;
        border-right: 1.6px solid #5c1f06;
        margin-right: 40px;

        ul {
            list-style: none;

            li {
                cursor: pointer;

                a {
                    font-size: 1.4rem;
                }
            }
        }
    }

    .posters {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
        width: 100%;
        justify-content: center;

        strong {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        img {
            width: 100%;
            height: 375px;
        }
    }
`;
