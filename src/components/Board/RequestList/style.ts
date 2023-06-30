import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';
import styled from 'styled-components';

interface Props {
    isApproved?: boolean;
}

export const Container = styled.div`
    &:hover {
        background-color: ${COLOR.GRAY_50};
    }
`;

export const Article = styled.article`
    border-bottom: 0.1rem solid ${COLOR.GRAY_100};
    padding: 2.5rem;
`;

export const Status = styled.span<Props>`
    padding: 0.5rem 1.5rem;
    border-radius: 5rem;
    background: ${({ isApproved }) => (isApproved ? COLOR.GREEN : COLOR.NAVY_100)};
    color: ${({ isApproved }) => (isApproved ? COLOR.WHITE : COLOR.BLACK)};
    box-shadow: ${({ isApproved }) => isApproved && SHADOW.CONTENTBOX_REVERSE};
    text-shadow: ${({ isApproved }) => isApproved && '0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);'};
    ${FONT.BOLD_18};
`;

export const Title = styled.span`
    ${FONT.BOLD_20};
    margin-left: 1rem;
`;

export const Content = styled.div`
    overflow: hidden;
    white-space: nowrap;
    font-size: ${FONT.REGULAR_16};
    text-overflow: ellipsis;
    margin-top: 1rem;
`;

export const Detail = styled.div`
    font-size: ${FONT.REGULAR_14};
    color: ${COLOR.GRAY_200};
    margin-top: 1.2rem;
`;
