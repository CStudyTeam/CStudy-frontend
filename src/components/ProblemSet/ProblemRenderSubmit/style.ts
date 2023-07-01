import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const ProblemSubmitWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-top: 6rem;
`;

export const SubmitButton = styled.button`
    padding: 1.2rem 4rem;
    background-color: ${COLOR.NAVY_200};
    font-size: ${FONT.REGULAR_20};
    color: ${COLOR.WHITE};
    border-radius: 1.2rem;
`;

export const ProblemAnswerWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5rem;
`;
export const ProblemAnswerTitle = styled.div`
    ${FONT.BOLD_20}
`;
export const ProblemAnswerNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 6rem;
    min-height: 6rem;
    background-color: ${COLOR.NAVY_100};
    margin-left: 1rem;
    ${FONT.BOLD_20}
    border: 0.5rem solid ${COLOR.GREEN};
    border-radius: 100%;
    box-shadow: ${SHADOW.CONTENTBOX_LG};
`;
