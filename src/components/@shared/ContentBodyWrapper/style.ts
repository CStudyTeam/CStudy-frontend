import styled from 'styled-components';
import { COLOR } from 'constants/Color';
import { SHADOW } from 'constants/Shadow';

interface BodyProps {
    blue?: boolean;
}

export const Body = styled.div`
    padding: 3rem 5rem;
    margin: 3rem 0 4rem;
    background-color: ${({ blue }: BodyProps) => (blue ? COLOR.NAVY_100 : COLOR.WHITE)};
    box-shadow: ${SHADOW.CONTENTBOX_LG};
    border-radius: 1.2rem;
`;
