import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';

export const Section = styled.section`
    padding-top: 6rem;

    &:first-of-type {
        padding-top: 4rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    background-color: ${COLOR.WHITE};
    padding: 4rem 3rem;
    border-radius: 1.2rem;
    box-shadow: ${SHADOW.CONTENTBOX_LG};
`;

export const ContentsTitleImg = styled.div`
    padding-right: 7.2rem;

    &:nth-of-type(2) {
        padding-right: 0;
        padding-left: 7.2rem;
    }
`;

export const Title = styled.h2`
    ${FONT.H2};
`;

export const ContentsImg = styled.img`
    padding-top: 3rem;
    width: 55rem;
    height: 55rem;
    border-radius: 5rem;
`;

export const ContentsItem = styled.div`
    padding-top: 12rem;

    &:nth-of-type(1) {
        padding-top: 11rem;
    }
`;

export const ContentsTexts = styled.p`
    word-break: keep-all;

    & > a {
        display: inline-block;
        margin-top: 1.5rem;
    }
`;

export const ContentsTextsTitle = styled.span`
    ${FONT.BOLD_16}
`;

export const ContentsTextsDesc = styled.span`
    display: inline-block;
    font-size: ${FONT.REGULAR_14};
    margin-top: 1rem;
`;

export const ContentsTextDescBold = styled.span`
    display: inline-block;
    ${FONT.BOLD_14}
`;
