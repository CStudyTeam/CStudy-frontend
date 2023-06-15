import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8rem;
`;

export const PageTitle = styled.div`
    ${FONT.H4};
`;

export const SearchInput = styled.input`
    width: 34.8rem;
    padding: 1.2rem;
    border: 1px solid ${COLOR.NAVY_200};
    border-radius: 0.8rem;
    margin-right: 1rem;
`;

export const WorkBookCards = styled.section`
    margin-top: 6rem;
`;

export const WorkBookCard = styled.article`
    width: 24rem;
    height: 35.2rem;
    padding: 2rem;
    border-radius: 1.6rem;
    box-shadow: 0 0.1rem 0.5rem 0 #d3d3d3;
`;

export const Title = styled.div`
    ${FONT.H1}
`;

export const Time = styled.div`
    font-size: ${FONT.REGULAR_12};
    color: #949494;
`;

export const Img = styled.div`
    height: 18.1rem;
    margin: 1rem -2rem 0;
    background-color: #000;
`;

export const Description = styled.div`
    margin-top: 2rem;
    font-size: ${FONT.REGULAR_14};
`;
