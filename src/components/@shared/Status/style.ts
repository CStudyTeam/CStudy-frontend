import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';
import { FONT } from 'constants/Font';

interface ApproveStatusStyleProps {
    isApproved?: boolean;
    small?: boolean;
}

export const ApproveStatus = styled.span<ApproveStatusStyleProps>`
    flex-shrink: 0;
    padding: ${({ small }) => (small ? '0.3rem 1rem' : '0.5rem 1.5rem')};
    border-radius: 5rem;
    background: ${({ isApproved }) => (isApproved ? COLOR.GREEN : COLOR.NAVY_100)};
    color: ${({ isApproved }) => (isApproved ? COLOR.WHITE : COLOR.BLACK)};
    box-shadow: ${({ isApproved }) => isApproved && SHADOW.CONTENTBOX_REVERSE};
    text-shadow: ${({ isApproved }) => isApproved && '0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.5);'};
    ${({ small }) => (small ? FONT.BOLD_14 : FONT.BOLD_18)};
`;
