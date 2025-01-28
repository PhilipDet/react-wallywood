import { createContext, useState, useContext, useEffect } from "react";
import supabase from "../utils/supabaseClient";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        const userInfo = await supabase.auth.getUser();
        if (userInfo.data.user !== null) {
            setUser(userInfo.data.user);
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
