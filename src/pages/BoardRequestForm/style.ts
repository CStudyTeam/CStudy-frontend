import { Field as InputField } from 'components/@shared/Input/style';
import { Field as TextAreaField } from './../../components/@shared/TextArea/style';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import styled from 'styled-components';
import { SHADOW } from 'constants/Shadow';

export const PageTitle = styled.div`
    ${FONT.H4};
    margin-top: 8rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 6rem;
    background-color: ${COLOR.NAVY_100};
    border: 0.1rem solid ${COLOR.WHITE};
    border-radius: 5rem;
    box-shadow: ${SHADOW.CONTENTBOX_REVERSE};

    ${InputField} + ${TextAreaField} {
        margin-top: 3rem;
    }
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

    button + button {
        margin-left: 2rem;
    }
`;
