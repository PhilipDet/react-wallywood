import { SpinnerStyled } from "./spinner.styled";

export const Spinner = () => {
    return (
        <SpinnerStyled
            width="100" // Increased size
            height="100" // Increased size
            viewBox="0 0 100 100" // Match the increased dimensions
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className="path"
                fill="none"
                strokeWidth="9" // Increased stroke width
                strokeLinecap="round"
                cx="50" // Centered based on the new size
                cy="50" // Centered based on the new size
                r="45" // Increased radius
            ></circle>
        </SpinnerStyled>
    );
};
