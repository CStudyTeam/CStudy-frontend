import { memo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import Input from '../Input';

import * as Styled from './style';

interface ContentHeaderWrapperTitleProps {
    isActive: boolean;
    title: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const ContentHeaderWrapperTitle = ({ isActive, title, register, errors }: ContentHeaderWrapperTitleProps) => {
    return (
        <Styled.Title>
            {isActive ? <Input id="title" defaultValue={title} register={register} errors={errors} required /> : title}
        </Styled.Title>
    );
};

export default memo(ContentHeaderWrapperTitle);
