import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

export const FormWrapper = styled.div`
    & + & {
        margin-top: 3rem;
    }
`;

export const ProblemNumber = styled.span`
    ${FONT.BOLD_20}
`;

export const FormBody = styled.div`
    background-color: ${COLOR.NAVY_100};
    border-radius: 0.8rem;
    padding: 2rem 3rem;
    border: 0.1rem solid ${COLOR.WHITE};
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2), 2rem 2rem 3rem -1.5rem rgba(0, 0, 0, 0.15),
        inset 0.8rem 0.8rem 1rem -1rem rgba(0, 0, 0, 0.15);
`;

export const FormContent = styled.div`
    & + & {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 0.2rem dashed ${COLOR.WHITE};
    }
`;
export const ContentHeader = styled.div`
    line-height: 1.4;
`;
export const ContentTitle = styled.h2`
    ${FONT.H2}
`;
export const ContentSubTitle = styled.span`
    font-size: ${FONT.REGULAR_16};
`;
export const ContentBody = styled.div`
    padding-top: 2rem;
`;
