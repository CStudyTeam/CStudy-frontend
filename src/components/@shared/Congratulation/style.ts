import styled, { keyframes } from 'styled-components';
import { COLOR } from 'constants/Color';

export const ConfettiWrapper = styled.div`
    @keyframes confetti-slow {
        0% {
            transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
        }

        100% {
            transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg);
        }
    }

    @keyframes confetti-medium {
        0% {
            transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
        }

        100% {
            transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg);
        }
    }

    @keyframes confetti-fast {
        0% {
            transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
        }

        100% {
            transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg);
        }
    }

    .confetti-container {
        perspective: 700px;
        position: fixed;
        overflow: hidden;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
    }

    .confetti {
        position: absolute;
        z-index: 1001;
        top: -10px;
        border-radius: 0%;
        will-change: transform;

        &--animation-slow {
            animation: confetti-slow 2.3s linear 1 forwards;
        }

        &--animation-medium {
            animation: confetti-medium 1.55s linear 1 forwards;
        }

        &--animation-fast {
            animation: confetti-fast 1.05s linear 1 forwards;
        }
    }
`;

export const ContestFinishSvgWrapper = styled.svg`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: none;
    width: 55rem;
    height: 60rem;
    stroke-width: 15rem;
    stroke-linecap: round;
    will-change: contents;
    z-index: 1000;

    & path {
        stroke-dasharray: var(--length);
        stroke-dashoffset: var(--length);
    }
`;

const svgAnimation = keyframes`
        100% {
            stroke-dashoffset: 0;
        }
`;

export const BgGroup = styled.g`
    & > path {
        stroke: ${COLOR.GRAY_100};
        animation: ${svgAnimation} var(--duration) ease forwards;
        animation-delay: var(--delay);
    }
`;

export const MainGroup = styled.g`
    & > path {
        stroke: ${COLOR.RED};
        animation: ${svgAnimation} var(--duration) ease-in forwards;
        animation-delay: var(--delay);
    }
`;
