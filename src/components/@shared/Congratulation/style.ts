import styled from 'styled-components';

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
