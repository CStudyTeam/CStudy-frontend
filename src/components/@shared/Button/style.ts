import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
    display: inline-block;
    width: ${(props) => props.width};
    background-color: ${(props) => props.backgroundColor};
    padding: ${(props) => (props.main ? '1.5rem 0' : '1.3rem 0')};
    color: ${(props) => props.color};
    border-radius: 0.8rem;
`;
