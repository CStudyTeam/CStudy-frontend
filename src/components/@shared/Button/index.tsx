import { PropsWithChildren } from 'react';
import * as Styled from './style';

export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    width?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    main?: boolean;
    margin?: string;
};

const Button = ({
    children,
    type = 'button',
    main,
    width,
    backgroundColor,
    color,
    fontSize,
    margin,
}: PropsWithChildren<ButtonProps>) => {
    return (
        <Styled.Button
            type={type}
            main={main}
            width={width}
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
            margin={margin}
        >
            {children}
        </Styled.Button>
    );
};

export default Button;
