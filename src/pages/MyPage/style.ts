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

export const MyPageTableWrapper = styled.div`
    margin-top: 0.8rem;
`;
