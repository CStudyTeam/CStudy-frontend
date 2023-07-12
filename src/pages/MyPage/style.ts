import { Field } from 'components/@shared/Input/style';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

export const MyPageContentWrapper = styled.div`
    & + & {
        margin-top: 3.4rem;
    }
`;

export const MyPageLabel = styled.h3`
    ${FONT.H2}
`;

export const MyPageUserInfoBg = styled.div`
    display: flex;
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

export const InputWrapper = styled.div`
    display: flex;

    ${Field} + ${Field} {
        margin-left: 1rem;
    }
`;

export const MyPageTableWrapper = styled.div`
    margin-top: 0.8rem;
`;

export const PaginationWrapper = styled.div`
    padding: 2rem 0;
`;
