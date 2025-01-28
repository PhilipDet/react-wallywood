import styled from "styled-components";

export const RegisterStyled = styled.div`
    flex: 1;

    form {
        display: flex;
        flex-direction: column;
        max-width: 365px;
        gap: 20px;

        .form-group {
            display: flex;
            flex-direction: column;

            label {
                font-size: 14px;

                &::after {
                    content: "*";
                    color: #d97852;
                    margin-left: 4px;
                }
            }

            input {
                font-family: "Open Sans", sans-serif;
                background-color: #5c1f060a;
                border: none;
                border-top: 1px solid #d1b3a7;
                padding: 5px 10px;
                font-size: 14px;

                &::placeholder {
                    color: #bbbbbb;
                }
            }
        }

        .actions {
            display: flex;
            gap: 14px;
        }

        a {
            font-size: 14px;
            color: #4088ad;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
