import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { useForm } from 'react-hook-form';
import { RequestForm } from 'types/board';
import { useCreateRequest } from 'hooks/@query/board/useCreateRequest';

const QuestionRequestForm = () => {
    const { register, handleSubmit } = useForm<RequestForm>();
    const { mutate: createRequest } = useCreateRequest();

    const submitForm = (FormData: RequestForm) => {
        createRequest({ ...FormData });
    };

    return (
        <>
            <Styled.PageTitle>게시판</Styled.PageTitle>
            <Styled.Form onSubmit={handleSubmit(submitForm)}>
                <Styled.TitleInput
                    placeholder="제목을 입력해주세요"
                    {...register('title', {
                        required: '제목을 입력해주세요.',
                    })}
                />
                <Styled.ContentInput
                    placeholder="내용을 적어주세요"
                    {...register('description', {
                        required: '내용을 적어주세요.',
                    })}
                />
                <Styled.ButtonWrapper>
                    <Button
                        backgroundColor={COLOR.NAVY_200}
                        color={COLOR.WHITE}
                        width="14.5rem"
                        borderRadius="1.6rem"
                        fontSize={FONT.REGULAR_14}
                        type="submit"
                    >
                        등록하기
                    </Button>
                </Styled.ButtonWrapper>
            </Styled.Form>
        </>
    );
};

export default QuestionRequestForm;
