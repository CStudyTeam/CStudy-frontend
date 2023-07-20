import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';

export const MyPageLabel = styled.h3`
    ${FONT.H2}
`;

export const MyPageUserInfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    background-color: ${COLOR.WHITE};
    border: 0.2rem solid ${COLOR.WHITE};
    border-radius: 1.2rem;
    box-shadow: ${SHADOW.CONTENTBOX_XLG};
    margin-top: 0.8rem;

    & + & {
        margin-left: 1.8rem;
    }
`;

export const MyPageUserInfoBg = styled.div`
    display: flex;

    @media all and (max-device-width: 540px) {
        & {
            flex-wrap: wrap;
        }

        ${MyPageUserInfoWrapper} {
            margin-left: 0;
            margin-right: 1.8rem;
        }
    }
`;
