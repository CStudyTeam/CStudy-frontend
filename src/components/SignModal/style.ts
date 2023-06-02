import styled from 'styled-components';
import { THEME_COLOR } from 'constants/themeColor';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    &:focus {
        border: 0.1rem solid ${THEME_COLOR.NAVY_200};
    }

    width: 33.6rem;
    height: 4rem;
    padding: 1rem;
    border: 0.1rem solid #d3d3d3;
    border-radius: 0.8rem;
    margin-bottom: 4rem;
`;

export const Button = styled.button`
    width: 33.6rem;
    height: 4.8rem;
    border-radius: 0.8rem;
    background: ${THEME_COLOR.NAVY_200};
    color: white;
`;
