import FormContentHeader from '../FormContentHeader';
import * as Styled from './style';
import { PropsWithChildren, memo } from 'react';

interface FormSectionProps {
    title: string;
    subtitle?: string;
}

const FormSection = ({ children, title, subtitle }: PropsWithChildren<FormSectionProps>) => {
    return (
        <Styled.FormSectionWrapper>
            <FormContentHeader title={title} subtitle={subtitle} />
            <Styled.ContentBody>{children}</Styled.ContentBody>
        </Styled.FormSectionWrapper>
    );
};

export default memo(FormSection);
