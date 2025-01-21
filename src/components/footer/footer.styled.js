import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;

    .container {
        display: flex;
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;
        border-top: 1.5px solid #5c1f06;

        .footer-left {
            display: flex;
            width: 50%;
            gap: 10rem;

            .footer-text {
                p {
                    font-size: 1.4rem;
                    font-weight: 400;
                }

                .highlight {
                    font-weight: 700;
                    font-size: 1.8rem;
                    color: #d97852;
                }
            }
        }

        .footer-right {
            display: flex;
            width: 50%;
            justify-content: flex-end;
            align-items: center;

            svg {
                font-size: 3.6rem;
                margin-left: 20px;
            }
        }
    }
`;
