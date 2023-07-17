import React from 'react';
import { BiError } from '@react-icons/all-files/bi/BiError';
import { AiFillCheckCircle } from '@react-icons/all-files/ai/AiFillCheckCircle';
import * as Styled from './style';
import { Message } from 'provider/Toast';

interface ToastMessageProps {
    messages: Message[];
}

const ToastMessage = ({ messages }: ToastMessageProps) => {
    const getIcon = (type: string) => {
        if (type === 'success') return <AiFillCheckCircle size={20} color="white" />;
        if (type === 'error') return <BiError size={20} color="white" />;
    };

    return (
        <>
            {messages?.map(({ id, message, type }) => (
                <Styled.ToastContainer key={id} type={type}>
                    <Styled.ToastIconContainer>{getIcon(type)}</Styled.ToastIconContainer>
                    <Styled.ToastMessage>{message}</Styled.ToastMessage>
                </Styled.ToastContainer>
            ))}
        </>
    );
};

export default ToastMessage;
