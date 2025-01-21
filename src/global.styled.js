import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Open Sans", serif;
        background-color: #5C1F06;
    }

    #root {
        height: 100vh;
        max-width: 1080px;
        margin: 0 auto;
        background-color: white;
    }
`;
