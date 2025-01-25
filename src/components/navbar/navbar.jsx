import React, { useEffect, useState } from "react";
import supabase from "../../utils/supabaseClient";

import { NavbarStyled } from "./navbar.styled";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (user) {
                setUserEmail(user.email);
            }
        };
        checkUser();
    }, []);

    return (
        <NavbarStyled>
            <ul>
                <li>
                    <NavLink to="/">Wallywood</NavLink>
                </li>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/posters/1">Plakater</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Om Os</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Kontakt Os</NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        {userEmail ? "Logged In" : "Login"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart">
                        <img src="src/assets/cart.svg" alt="" />
                    </NavLink>
                </li>
            </ul>
        </NavbarStyled>
    );
};
