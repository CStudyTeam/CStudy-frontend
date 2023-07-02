import styled from 'styled-components';

import { ButtonProps } from '.';
import { SHADOW } from 'constants/Shadow';

export const Button = styled.button<ButtonProps>`
    display: inline-block;
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    padding: ${(props) => (props.main ? '1.5rem 0' : '1.3rem 0')};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.weight};
    border-radius: ${(props) => props.borderRadius};
    box-shadow: ${(props) => props.shadow && SHADOW.CONTENTBOX_MD};
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
`;
