import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const Container = styled.main`
    display: flex;
`;

export const ContestTable = styled.table`
    width: 83rem;
    height: 83rem;
    border: 0.1rem solid;
    border-radius: 5rem;
    text-align: center;
    margin-top: 6rem;
`;

export const ContestTh = styled.th`
    border-bottom: 0.1rem solid ${COLOR.BLACK};
    height: 9rem;
    ${FONT.BOLD_20}
`;

export const Name = styled.td`
    border-bottom: 0.1rem solid ${COLOR.BLACK};
    ${FONT.BOLD_20};
`;

export const Period = styled.td`
    border-bottom: 0.1rem solid ${COLOR.BLACK};
    ${FONT.BOLD_16};
`;

export const Pagination = styled.tr`
    height: 11rem;
`;

export const Aside = styled.aside`
    width: 32rem;
    margin: 6rem 0 0 4.8rem;
    padding: 3rem;
    border: 0.1rem solid ${COLOR.BLACK};
    border-radius: 5rem;
`;

export const Title = styled.div`
    ${FONT.BOLD_20};
`;

export const UserName = styled.div`
    & > span:first-child {
        ${FONT.BOLD_20};
    }

    & > span:nth-child(2) {
        ${FONT.BOLD_18};
        margin-left: 0.5rem;
    }

    text-align: center;
    margin-top: 1rem;
`;

export const ProfileImg = styled.div`
    width: 15rem;
    height: 15rem;
    margin: 1rem auto 0;
    border-radius: 50%;
    background: gray;
`;

export const UserRanking = styled.div`
    ${FONT.H2};
    margin: 1.8rem 0;
    text-align: center;
`;

export const RankingTable = styled.table`
    width: 100%;
    height: 47rem;
    border: 0.1rem solid ${COLOR.BLACK};
    border-radius: 1.6rem;
    text-align: center;
`;

export const RankingTh = styled.th`
    height: 6rem;
    border-bottom: 0.1rem solid ${COLOR.BLACK};
`;
