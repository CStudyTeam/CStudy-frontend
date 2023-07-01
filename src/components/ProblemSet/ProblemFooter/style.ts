import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const Footer = styled.div`
    margin: 5rem 0 3rem;
    padding: 4rem 3rem;
    background-color: ${COLOR.NAVY_100};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: ${SHADOW.CONTENTBOX_REVERSE};
`;
export const FooterComment = styled.div`
    ${FONT.BOLD_20}
`;
export const FooterCommentDesc = styled.p`
    margin-top: 1.2rem;
    font-size: ${FONT.REGULAR_20};
`;
