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

    @media (max-width: 1043px) {
        grid-template-columns: 1fr;

        .genre {
            border-right: none;
            display: flex;
    
            overflow-x: auto;
            white-space: nowrap;

            &::-webkit-scrollbar {
                display: none;
            }

            ul {
                display: flex;
            
                li {
                    flex: 0 0 auto;

                    a {
                        padding: 5px;
                        border-right: 1px solid #5c1f06; 
                    }

                    &:last-child a {
                        border-right: none;
                    }
                }
            }
        }
    }
`;
