import { useEffect, useState, createContext } from "react";
import supabase from "../utils/supabaseClient";

export const GenresContext = createContext();

export const GenresProvider = ({ children }) => {
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        if (supabase) {
            return await supabase
                .from("genres")
                .select("*")
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    console.error(error);
                    return [];
                });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const newGenres = await getGenres();
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
