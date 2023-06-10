import { ButtonHTMLAttributes } from 'react';
import * as Styled from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    width?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    main?: boolean;
    margin?: string;
    weight?: string;
    borderRadius?: string;
}

const Button = ({
    children,
    type = 'button',
    main,
    width,
    backgroundColor,
    color,
    fontSize,
    margin,
    weight,
    borderRadius,
    ...rest
}: ButtonProps) => {
    return (
        <Styled.Button
            type={type}
            main={main}
            width={width}
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
            margin={margin}
            weight={weight}
            borderRadius={borderRadius}
            {...rest}
        >
            {children}
        </Styled.Button>
    );
};

export default Button;
