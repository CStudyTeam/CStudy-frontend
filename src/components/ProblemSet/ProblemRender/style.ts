import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    margin-top: 3rem;
    padding: 3rem 4rem 3rem 7rem;
    background-color: ${COLOR.WHITE};
    border: 0.2rem solid ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: ${SHADOW.CONTENTBOX_XLG};
`;

export const BodyTitleWrapper = styled.div`
    display: flex;
    align-items: center;
`;
export const ProblemBodyTitle = styled.h3`
    ${FONT.H3}
`;
export const ProblemCategory = styled.div`
    font-size: ${FONT.REGULAR_20};
    padding-left: 6rem;
`;
