import { COLOR } from 'constants/Color';
import styled from 'styled-components';

export const FormBody = styled.div`
    background-color: ${COLOR.NAVY_100};
    border-radius: 0.8rem;
    padding: 2rem 3rem;
    border: 0.1rem solid ${COLOR.WHITE};
    box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2), 2rem 2rem 3rem -1.5rem rgba(0, 0, 0, 0.15),
        inset 0.8rem 0.8rem 1rem -1rem rgba(0, 0, 0, 0.15);
`;
