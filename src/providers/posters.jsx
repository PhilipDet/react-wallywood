import { createContext, useState, useEffect } from "react";
import { fetchData } from "../config/supa";

export const PostersContext = createContext();

export const PostersProvider = ({ children }) => {
    const [posters, setPosters] = useState({});

    const getData = async () => {
        try {
            const data = await fetchData("http://localhost:2024/posters");
            setPosters(data);
        } catch (error) {
            console.error("Error fetching posters in Provider:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <PostersContext.Provider value={{ posters }}>
            {children}
        </PostersContext.Provider>
    );
};
