import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const WorkBookCard = styled.article`
    width: 24rem;
    height: 35.2rem;
    padding: 2rem;
    background-color: ${COLOR.WHITE};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 1.6rem;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);
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
    background-color: ${COLOR.GRAY_100};
`;

export const Description = styled.div`
    margin-top: 2rem;
    font-size: ${FONT.REGULAR_14};
`;
