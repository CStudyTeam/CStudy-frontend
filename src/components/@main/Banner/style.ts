import styled from 'styled-components';
import { FONT } from 'constants/Font';

export const BannerContent = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    width: 40%;
    padding: 2rem 0;
    z-index: 1;

    & a {
        display: inline-block;
        margin-top: 1.2rem;
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: #121212;
        z-index: -1;
        filter: blur(50px);
    }
`;

export const BannerTitle = styled.h2`
    font-size: 4rem;
    font-weight: bold;
    color: #ddd;
    word-break: keep-all;

    & > span {
        font-size: ${FONT.REGULAR_18};
    }
`;
