import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';

export const ProfileImg = styled.img`
    width: 14rem;
    height: 14rem;
    border: 0.2rem solid ${COLOR.WHITE};
    border-radius: 100%;
    box-shadow: ${SHADOW.CONTENTBOX_MD};
`;

export const MyPageUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.8rem;
`;

export const MyPageUserInfoName = styled.span`
    ${FONT.BOLD_18}
`;

export const MyPageUserInfoEmail = styled.span`
    font-size: ${FONT.REGULAR_16};
`;
