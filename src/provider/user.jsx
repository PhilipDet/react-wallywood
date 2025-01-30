import { createContext, useState, useContext, useEffect } from "react";
import { GetUser } from "../hooks/fetch";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        const userInfo = await GetUser();

        if (userInfo !== null) {
            setUser(userInfo);
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
