import styled from 'styled-components';
import { COLOR } from './../../../../constants/Color';

interface ButtonProps {
    background?: string;
    width?: string;
    fontSize?: string;
    small?: boolean;
}

export const Button = styled.button`
    width: ${(props: ButtonProps) => props.width || '100%'};
    padding: ${(props: ButtonProps) => (props.small ? '1.8rem 0' : '1.5rem 0')};
    border-radius: 0.8rem;
    background-color: ${(props: ButtonProps) => props.background || COLOR.NAVY_200};
    color: #eee;
    font-size: ${(props: ButtonProps) => props.fontSize || '1.4rem'};
    cursor: pointer;
`;
