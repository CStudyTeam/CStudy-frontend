import { useState } from 'react';
import { Form } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useWorkbookSet } from 'hooks/@query/workbookList/useWorkbookSet';

import Button from 'components/@shared/Button';
import ContentContainer from 'components/@shared/ContentContainer';
import AdminContentHeaderWrapper from 'components/@shared/Admin/AdminContentHeaderWrapper';
import AdminContentBodyWrapper from 'components/@shared/Admin/AdminContentBodyWrapper';
import FormSection from 'components/@shared/Admin/FormSection';
import AdminInput from 'components/@shared/Admin/AdminInput';
import FormBody from 'components/@shared/Admin/FormBody';

import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { WorkbookSetForm } from 'types/Form';

const CreateWorkbook = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { mutate: WorkbookSet } = useWorkbookSet({ setIsLoading });

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
            <AdminContentHeaderWrapper title="문제집생성" />
            <AdminContentBodyWrapper>
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
                        <Button
                            type="submit"
                            width="16rem"
                            fontSize={FONT.REGULAR_16}
                            backgroundColor={COLOR.NAVY_200}
                            color={COLOR.WHITE}
                            margin="2rem 0 0 0"
                            disabled={isLoading}
                        >
                            문제집 등록하기
                        </Button>
                    </FormBody>
                </Form>
            </AdminContentBodyWrapper>
        </ContentContainer>
    );
};

export default CreateWorkbook;
