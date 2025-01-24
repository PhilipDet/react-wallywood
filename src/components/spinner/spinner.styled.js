import styled from "styled-components";

export const SpinnerStyled = styled.svg`
    animation: rotator 1.4s linear infinite;

    .path {
        stroke: #4285f4;
        stroke-dasharray: 282.6; /* Adjusted for r = 45 (2 * Math.PI * r) */
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash 1.4s ease-in-out infinite,
            colors 5.6s ease-in-out infinite;
    }

    @keyframes rotator {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(270deg);
        }
    }

    @keyframes colors {
        0% {
            stroke: #d97852;
        }
        50% {
            stroke: #5c1f06;
        }
        100% {
            stroke: #d97852;
        }
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: 282.6;
        }
        50% {
            stroke-dashoffset: 70.65; /* One-quarter of the dash array */
            transform: rotate(135deg);
        }
        100% {
            stroke-dashoffset: 282.6;
            transform: rotate(450deg);
        }
    }
`;
