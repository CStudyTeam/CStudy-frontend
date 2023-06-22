import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import AdminInput from 'components/@shared/Admin/AdminInput';

import * as Styled from './style';
import { Fragment } from 'react';

interface ProblemFormProps {
    isLoading?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    titleNumber: number;
    basicInfoNumber: number;
    contentNumber: number[];
}

const ProblemForm = ({
    isLoading,
    register,
    errors,
    titleNumber,
    basicInfoNumber,
    contentNumber,
}: ProblemFormProps) => {
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
            <Styled.FormBody>
                <Styled.FormContent>
                    <Styled.ContentHeader>
                        <Styled.ContentTitle>문제 기본정보를 설정해주세요</Styled.ContentTitle>
                        <Styled.ContentSubTitle>제목, 설명, 해설을 기입해주세요.</Styled.ContentSubTitle>
                    </Styled.ContentHeader>
                    <Styled.ContentBody>
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
                    </Styled.ContentBody>
                </Styled.FormContent>
                <Styled.FormContent>
                    <Styled.ContentHeader>
                        <Styled.ContentTitle>문제 카테고리를 설정해주세요</Styled.ContentTitle>
                        <Styled.ContentSubTitle>문제에 해당하는 카테고리를 체크해 주세요.</Styled.ContentSubTitle>
                    </Styled.ContentHeader>
                    <Styled.ContentBody>
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
                    </Styled.ContentBody>
                </Styled.FormContent>
                <Styled.FormContent>
                    <Styled.ContentHeader>
                        <Styled.ContentTitle>문제 보기를 설정해주세요</Styled.ContentTitle>
                        <Styled.ContentSubTitle>문제 보기를 기입하고, 정답을 체크해 주세요.</Styled.ContentSubTitle>
                    </Styled.ContentHeader>
                    <Styled.ContentBody>
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
                    </Styled.ContentBody>
                </Styled.FormContent>
            </Styled.FormBody>
        </Styled.FormWrapper>
    );
};

export default ProblemForm;
