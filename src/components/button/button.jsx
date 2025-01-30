import { ButtonStyled } from "./button.styled";

export const Button = ({ onClick, children, type }) => {
    return (
        <ButtonStyled onClick={onClick} $type={type}>
            {children}
        </ButtonStyled>
    );
};
