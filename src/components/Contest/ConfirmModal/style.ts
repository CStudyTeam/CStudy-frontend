import { COLOR } from 'constants/Color';
import styled from 'styled-components';

export const ModalContainer = styled.div`
    background-color: ${COLOR.WHITE};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2.4rem;
    border-radius: 0.8rem;
    min-width: 30rem;

    z-index: 5;
`;

export const ModalTitle = styled.h2`
    margin-top: 0;
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.4rem;
`;
