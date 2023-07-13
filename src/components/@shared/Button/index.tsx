import { ButtonHTMLAttributes } from 'react';
import * as Styled from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const Button = ({ children, type = 'button', disabled, ...rest }: ButtonProps) => {
    return (
        <Styled.Button type={type} disabled={disabled} {...rest}>
            {children}
        </Styled.Button>
    );
};

export default Button;
