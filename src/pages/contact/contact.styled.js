import styled from "styled-components";

export const ContactStyled = styled.div`
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

            input,
            textarea {
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

            textarea {
                resize: vertical;
                min-height: 120px;
                max-height: 300px;
            }
        }

        .actions {
            display: flex;
            gap: 14px;
        }
    }
`;
