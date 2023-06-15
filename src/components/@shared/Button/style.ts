import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
    display: inline-block;
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    padding: ${(props) => (props.main ? '1.5rem 0' : '1.3rem 0')};
    border-radius: 0.8rem;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
`;
