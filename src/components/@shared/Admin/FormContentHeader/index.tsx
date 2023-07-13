import * as Styled from './style';
import { memo } from 'react';

interface FormContentHeaderProps {
    title: string;
    subtitle?: string;
}

const FormContentHeader = ({ title, subtitle }: FormContentHeaderProps) => {
    return (
        <Styled.ContentHeader>
            <Styled.ContentTitle>{title}</Styled.ContentTitle>
            <Styled.ContentSubTitle>{subtitle}</Styled.ContentSubTitle>
        </Styled.ContentHeader>
    );
};

export default memo(FormContentHeader);
