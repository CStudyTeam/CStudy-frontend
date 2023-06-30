import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

interface Props {
    isApproved?: boolean;
}

export const Container = styled.div`
    min-height: 60vh;
    padding: 6rem;
    background-color: ${COLOR.WHITE};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 5rem;
    box-shadow: ${SHADOW.CONTENTBOX_LG};
`;

export const Status = styled.div<Props>`
    width: 8rem;
    padding: 0.5rem 0;
    border-radius: 5rem;
    background: ${({ isApproved }) => (isApproved ? COLOR.GREEN : COLOR.NAVY_100)};
    color: ${({ isApproved }) => (isApproved ? COLOR.WHITE : COLOR.BLACK)};
    box-shadow: ${({ isApproved }) => isApproved && SHADOW.CONTENTBOX_REVERSE};
    text-shadow: ${({ isApproved }) => isApproved && '0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);'};
    text-align: center;
    ${FONT.BOLD_20};
`;

export const Title = styled.div`
    ${FONT.H3};
    margin-top: 1.2rem;
`;

export const Detail = styled.div`
    font-size: ${FONT.REGULAR_16};
    color: ${COLOR.GRAY_200};
    margin-top: 0.8rem;
    border-bottom: 0.1rem solid ${COLOR.GRAY_100};
    padding-bottom: 3rem;
`;

export const Content = styled.div`
    margin-top: 4rem;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 3rem 0 0 auto;

    button + button {
        margin-left: 2rem;
    }
`;
