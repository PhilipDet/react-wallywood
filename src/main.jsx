import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { PostersProvider } from "./providers/posters.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./global.styled";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <PostersProvider>
            <BrowserRouter>
                <GlobalStyled />
                <App />
            </BrowserRouter>
        </PostersProvider>
    </StrictMode>
);
