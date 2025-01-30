import { useEffect, useState, createContext } from "react";
import { GetData } from "../hooks/fetch";

export const GenresContext = createContext();

export const GenresProvider = ({ children }) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const newGenres = await GetData("genres");
            setGenres(newGenres);
        };

        fetchData();
    }, []);

    return (
        <GenresContext.Provider value={{ genres }}>
            {children}
        </GenresContext.Provider>
    );
};
