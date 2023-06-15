import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
    display: inline-block;
    width: ${(props) => props.width};
    background-color: ${(props) => props.backgroundColor};
    padding: ${(props) => (props.main ? '1.5rem 3rem' : '1.3rem 0')};
    margin: ${(props) => props.margin};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    border-radius: 0.8rem;
`;
