import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Label = styled.h3`
    ${FONT.H2}
`;

export const AdminWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.6rem;

    a + button {
        margin-left: 1.2rem;
    }

    button + button {
        margin-left: 1.2rem;
    }
`;

export const ContestInfoHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.6rem;
`;

export const ButtonWrapper = styled.div`
    a + button {
        margin-left: 0.8rem;
    }
`;

export const FinishContestTableWrapper = styled.div`
    margin-bottom: 3rem;
`;

export const ContestInfoBodyWrapper = styled.div`
    display: flex;
`;

export const ContestRanking = styled.div`
    width: 100%;
    padding: 2rem 4rem 3rem 3rem;
    background-color: ${COLOR.WHITE};
    border: 0.2rem solid ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: ${SHADOW.CONTENTBOX_XLG};
    margin-left: 3rem;
`;

export const RankingTitle = styled.h4`
    ${FONT.H2}
`;
// -----------------

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1rem;
    margin-top: 1.8rem;
    background-color: ${COLOR.GRAY_50};
    box-shadow: ${SHADOW.RANKING_TABLE};
`;

export const StyledThead = styled.thead`
    ${FONT.BOLD_14}
    color: ${COLOR.NAVY_200};
`;

export const StyledTbody = styled.tbody`
    font-size: ${FONT.REGULAR_14};
    font-weight: 400;
    color: ${COLOR.BLACK};
`;

export const StyledTr = styled.tr`
    background-color: ${COLOR.WHITE};
    box-shadow: ${SHADOW.RANKING_TABLE};
    border-radius: 0.8rem;
`;

export const StyledTd = styled.td`
    padding: 1.5rem;
    text-align: center;
    min-width: 10rem;
`;

export const StyledTh = styled.th`
    padding: 1.5rem;
    text-align: center;
    min-width: 10rem;
`;

export const PaginationWrapper = styled.div`
    margin-top: 1.8rem;
`;
