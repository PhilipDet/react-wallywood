import { NavbarStyled } from "./navbar.styled";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
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
                    <NavLink to="/posters">Plakater</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Om Os</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Kontakt Os</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/cart"><img src="src/assets/cart.svg" alt="" /></NavLink>
                </li>
            </ul>
        </NavbarStyled>
    );
};
