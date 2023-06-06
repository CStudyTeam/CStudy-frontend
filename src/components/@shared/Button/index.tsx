import React, { PropsWithChildren } from 'react';
import * as Styled from './style';

export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    width?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    main?: boolean;
};

const Button = ({
    children,
    type = 'button',
    main,
    width,
    backgroundColor,
    color,
    fontSize,
}: PropsWithChildren<ButtonProps>) => {
    return (
        <Styled.Button
            type={type}
            main={main}
            width={width}
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
        >
            {children}
        </Styled.Button>
    );
};

export default Button;
