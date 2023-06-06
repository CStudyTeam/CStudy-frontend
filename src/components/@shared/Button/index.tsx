import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode | string;
}

const Button = ({ children, ...rest }: ButtonProps) => {
    return <button {...rest}>{children}</button>;
};

export default Button;
