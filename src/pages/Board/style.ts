import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 0.1rem solid ${COLOR.GRAY_100};
    padding-bottom: 2rem;
`;

export const Filter = styled.li`
    padding: 1rem;
    border-radius: 5rem;
    text-align: center;
    font-size: ${FONT.REGULAR_14};
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
