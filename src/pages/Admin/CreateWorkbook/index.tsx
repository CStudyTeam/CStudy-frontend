import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useWorkbookSet } from 'hooks/@query/workbook/useWorkbookSet';

import Button from 'components/@shared/Button';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import FormSection from 'components/@shared/Admin/FormSection';
import AdminInput from 'components/@shared/Admin/AdminInput';
import FormBody from 'components/@shared/Admin/FormBody';

import { WorkbookSetForm } from 'types/Form';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';

const CreateWorkbook = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const WorkbookSet = useWorkbookSet({ setIsLoading });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            title: '',
            description: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        WorkbookSet(data as WorkbookSetForm);
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제집생성" />
            <ContentBodyWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormBody>
                        <FormSection title="문제집 이름을 입력해 주세요">
                            <AdminInput
                                id="title"
                                name="title"
                                label="문제집 이름"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                                required
                            />
                        </FormSection>
                        <FormSection title="문제집 설명을 입력해 주세요">
                            <AdminInput
                                id="description"
                                name="description"
                                label="문제집 설명"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                                required
                            />
                        </FormSection>
                        <Button type="submit" className="mt xl navy style" disabled={isLoading}>
                            문제집 등록하기
                        </Button>
                        <Button type="button" className="revert mt ml xl2" onClick={() => navigate(-1)}>
                            돌아가기
                        </Button>
                    </FormBody>
                </Form>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default CreateWorkbook;
