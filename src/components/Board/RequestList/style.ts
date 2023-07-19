import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Container = styled.div`
    &:hover {
        background-color: ${COLOR.GRAY_50};
    }
`;

export const Article = styled.article`
    border-bottom: 0.1rem solid ${COLOR.GRAY_100};
    padding: 2.5rem;
`;

export const ArticleHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.span`
    display: block;
    margin-left: 1rem;
    ${FONT.BOLD_20};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Content = styled.div`
    margin-top: 1rem;
    font-size: ${FONT.REGULAR_16};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Detail = styled.div`
    font-size: ${FONT.REGULAR_14};
    color: ${COLOR.GRAY_200};
    margin-top: 1.2rem;
`;
