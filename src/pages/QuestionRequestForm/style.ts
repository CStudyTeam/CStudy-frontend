import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 120rem;
    height: 100vh;
    padding: 6rem;
    border: 0.1rem solid ${COLOR.GRAY_100};
    border-radius: 5rem;
    margin-top: 6rem;
`;

export const TitleInput = styled.input`
    width: 57.5rem;
    padding: 1.3rem 3rem;
    border: 0.1rem solid ${COLOR.GRAY_100};
    border-radius: 1.6rem;
`;

export const ContentInput = styled.textarea`
    height: 100%;
    padding: 3rem;
    border: 0.1rem solid ${COLOR.GRAY_100};
    border-radius: 1.6rem;
    margin-top: 3rem;
`;

export const ButtonWrapper = styled.div`
    margin: 3rem 0 0 auto;
`;
