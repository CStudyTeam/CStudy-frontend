import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

interface Props {
    isApproved?: boolean;
}

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const Container = styled.div`
    height: 100vh;
    padding: 6rem;
    border: 0.1rem solid ${COLOR.GRAY_100};
    border-radius: 5rem;
    margin-top: 6rem;
`;

export const Status = styled.div<Props>`
    width: 8rem;
    padding: 0.5rem 0;
    border-radius: 5rem;
    background: ${({ isApproved }) => (isApproved ? COLOR.NAVY_200 : COLOR.NAVY_100)};
    color: ${COLOR.BLACK};
    text-align: center;
    ${FONT.H2};
`;

export const Title = styled.div`
    ${FONT.H3};
    margin-top: 1.2rem;
`;

export const Detail = styled.div`
    font-size: ${FONT.REGULAR_16};
    color: ${COLOR.GRAY_200};
    margin-top: 0.8rem;
    border-bottom: 0.1rem solid ${COLOR.GRAY_100};
    padding-bottom: 3rem;
`;

export const Content = styled.div`
    margin-top: 4rem;
`;
