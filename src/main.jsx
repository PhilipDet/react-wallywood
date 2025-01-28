import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { GenresProvider } from "./provider/genres.jsx";
import { UserProvider } from "./provider/user.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./global.styled";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GenresProvider>
            <UserProvider>
                <BrowserRouter>
                    <GlobalStyled />
                    <App />
                </BrowserRouter>
            </UserProvider>
        </GenresProvider>
    </StrictMode>
);
