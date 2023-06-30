import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
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

export const Status = styled.span`
    padding: 0.5rem 1.5rem;
    border-radius: 5rem;
    background: ${COLOR.NAVY_100};
    ${FONT.BOLD_18};
`;

export const Title = styled.span`
    ${FONT.BOLD_20};
    margin-left: 1rem;
`;

export const Content = styled.div`
    overflow: hidden;
    white-space: nowrap;
    font-size: ${FONT.REGULAR_16};
    text-overflow: ellipsis;
    margin-top: 1rem;
`;

export const Detail = styled.div`
    font-size: ${FONT.REGULAR_14};
    color: ${COLOR.GRAY_200};
    margin-top: 1.2rem;
`;

export const PaginationWrapper = styled.div`
    padding: 4rem 0 6rem;
`;
