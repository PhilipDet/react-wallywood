import styled from "styled-components";

export const PostersStyled = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 3fr;
    flex: 1;

    .genre {
        display: flex;
        flex-direction: column;
        border-right: 1.6px solid #5c1f06;

        ul {
            list-style: none;

            li {
                cursor: pointer;
                display: flex;

                a {
                    width: 100%;
                    font-size: 1.4rem;

                    &:hover {
                        color: #d97852;
                    }
                }
            }
        }
    }
`;
