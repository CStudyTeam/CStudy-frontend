import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useCreateRequest } from 'hooks/@query/board/useCreateRequest';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Input from 'components/@shared/Input';
import TextArea from 'components/@shared/TextArea';
import { useNavigate } from 'react-router-dom';

const BoardRequestForm = () => {
    const navigate = useNavigate();

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

    const { mutate: createRequest } = useCreateRequest();

    const submitForm: SubmitHandler<FieldValues> = (FormData) => {
        createRequest(FormData);
    };

    const handleNavigate = () => {
        navigate(-1);
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="게시판" />
            <ContentBodyWrapper>
                <Styled.Form onSubmit={handleSubmit(submitForm)}>
                    <Input
                        id="title"
                        label="게시판에 올릴 제목을 적어주세요"
                        placeholder="제목을 입력해주세요"
                        required
                        register={register}
                        errors={errors}
                    />
                    <TextArea
                        id="description"
                        label="게시판에 올릴 내용을 적어주세요"
                        placeholder="내용을 적어주세요"
                        required
                        register={register}
                        errors={errors}
                    />
                    <Styled.ButtonWrapper>
                        <Button type="submit" className="xl wide navy style">
                            등록하기
                        </Button>
                        <Button type="button" className="xl gray style" onClick={handleNavigate}>
                            돌아가기
                        </Button>
                    </Styled.ButtonWrapper>
                </Styled.Form>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default BoardRequestForm;
