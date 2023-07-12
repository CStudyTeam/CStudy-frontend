import { Field } from 'components/@shared/Input/style';
import styled from 'styled-components';

export const MyPageUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.8rem;
`;

export const InputWrapper = styled.div`
    display: flex;

    ${Field} + ${Field} {
        margin-left: 1rem;
    }
`;
