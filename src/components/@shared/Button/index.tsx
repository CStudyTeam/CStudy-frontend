import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as Styled from './style';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode | string;
    width?: string;
    backgroundColor?: string;
    main?: boolean;
    margin?: string;
    color?: string;
    fontSize?: string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return <Styled.Button {...rest}>{children}</Styled.Button>;
};

export default Button;
