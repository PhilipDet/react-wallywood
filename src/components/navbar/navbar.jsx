import { useState } from "react";
import { useUser } from "../../provider/user";
import { NavbarStyled } from "./navbar.styled";
import { NavLink, useNavigate } from "react-router-dom";
import supabase from "../../utils/supabaseClient";

export const Navbar = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const logOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        navigate("/login");
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavbarStyled>
            <NavLink className="logo" to="/">
                Wallywood
            </NavLink>

            <button className="toggle-button" onClick={toggleNavbar}>
                ☰
            </button>
            <ul className={isOpen ? "open" : ""}>
                <li>
                    <NavLink className="mobilelogo" to="/">WALLYWOOD</NavLink>
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
                    {user !== null ? (
                        <a onClick={() => logOut()}>Log ud</a>
                    ) : (
                        <NavLink to="/login">Login</NavLink>
                    )}
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
