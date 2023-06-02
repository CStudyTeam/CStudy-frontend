import React from 'react';
import '../../../../reset.css';
import * as Styled from './style';

interface ButtonProps {
    /**
     * 버튼의 이름에 해당합니다.
     */
    label: string;
    /**
     * 버튼 py 크기를 담당하며 small을 넣으면 py값이 1.8rem 이며, 없을 경우 1.5rem 입니다. 로그인, 회원가입 버튼에는 small이 들어가지 않습니다.
     */
    small?: boolean;
    /**
     * 버튼의 넓이를 담당합니다. 기본값은 100% 이며, rem, % 등 단위를 넣어주어야 합니다.
     */
    width?: string;
}

const Button = ({ label, small, width, ...props }: ButtonProps) => {
    return (
        <Styled.Button small={small} width={width} {...props}>
            {label}
        </Styled.Button>
    );
};

export default Button;
