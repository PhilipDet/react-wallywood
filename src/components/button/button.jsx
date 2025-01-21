import { ButtonStyled } from "./button.styled";

export const Button = ({ children, type }) => {
    return <ButtonStyled $type={type}>{children}</ButtonStyled>;
};
