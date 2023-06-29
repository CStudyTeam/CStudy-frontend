import styled from 'styled-components';
import { COLOR } from 'constants/Color';

interface BodyProps {
    blue?: boolean;
}

export const Body = styled.div`
    padding: 3rem 5rem;
    margin: 3rem 0 4rem;
    background-color: ${({ blue }: BodyProps) => (blue ? COLOR.NAVY_100 : COLOR.WHITE)};
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
    border-radius: 1.2rem;
`;
