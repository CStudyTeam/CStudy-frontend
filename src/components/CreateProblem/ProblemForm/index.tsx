import { Fragment } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import FormSection from 'components/@shared/Admin/FormSection';
import AdminInput from 'components/@shared/Admin/AdminInput';

import { FormBody } from './../../@shared/Admin/FormBody/style';
import * as Styled from './style';

interface ProblemFormProps {
    isLoading?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    form: { id: number; titleNumber: number; basicInfoNumber: number; contentNumber: number[] };
}

const ProblemForm = ({ isLoading, register, errors, form }: ProblemFormProps) => {
    const { titleNumber, basicInfoNumber, contentNumber } = form;
    const basicInfoInputs = [
        { name: 'questionTitle', label: '문제 제목' },
        { name: 'questionDesc', label: '문제 설명' },
        { name: 'questionExplain', label: '문제 해설' },
    ];
    const categories = ['자바', '네트워크', '운영체제', '데이터베이스'];
    const totalChoices = 5;

    return (
        <Styled.FormWrapper>
            <Styled.ProblemNumber>#{titleNumber}</Styled.ProblemNumber>
            <FormBody>
                <FormSection title="문제 기본정보를 설정해주세요" subtitle="제목, 설명, 해설을 기입해주세요.">
                    {basicInfoInputs.map(({ name, label }, index) => (
                        <AdminInput
                            key={index}
                            id={`${name}${basicInfoNumber}`}
                            name={`${name}${basicInfoNumber}`}
                            label={label}
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                            required
                        />
                    ))}
                </FormSection>
                <FormSection title="문제 카테고리를 설정해주세요" subtitle="문제에 해당하는 카테고리를 체크해 주세요.">
                    {categories.map((category, index) => (
                        <AdminInput
                            key={index}
                            id={`category${contentNumber[index]}`}
                            name={`category${basicInfoNumber}`}
                            type="radio"
                            label={category}
                            register={register}
                            errors={errors}
                            value={category}
                            disabled={isLoading}
                            required
                        />
                    ))}
                </FormSection>
                <FormSection title="문제 보기를 설정해주세요" subtitle="문제 보기를 기입하고, 정답을 체크해 주세요.">
                    {Array.from({ length: totalChoices }, (_, index) => (
                        <Fragment key={index}>
                            <AdminInput
                                id={`content${contentNumber[index]}`}
                                name={`content${contentNumber[index]}`}
                                label={`문제 보기${index + 1}`}
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                                required
                                textarea
                            />
                            <AdminInput
                                id={`answer${contentNumber[index]}`}
                                type="radio"
                                name={`answer${basicInfoNumber}`}
                                label="정답"
                                register={register}
                                errors={errors}
                                value={`정답 ${index}`}
                                disabled={isLoading}
                                required
                            />
                        </Fragment>
                    ))}
                </FormSection>
            </FormBody>
        </Styled.FormWrapper>
    );
};

export default ProblemForm;
