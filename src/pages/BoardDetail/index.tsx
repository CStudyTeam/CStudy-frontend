import useGetRequest from 'hooks/@query/board/useGetRequest';
import * as Styled from './style';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Button from 'components/@shared/Button';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { isAdmin } from 'utils/auth';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useApproveRequest } from 'hooks/@query/board/useApproveRequest';

const BoardDetail = () => {
    const { requestId } = useParams();
    const navigate = useNavigate();
    const request = useGetRequest(requestId);
    const ApproveRequest = useApproveRequest();
    const { handleSubmit } = useForm<FieldValues>();

    const handleNavigate = () => {
        navigate(-1);
    };

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        formData.id = request?.id;
        formData.flag = true;
        ApproveRequest(formData);
    };

    const isApproved = request?.flag;

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="게시판" />
            <ContentBodyWrapper blue>
                <Styled.Container>
                    <Styled.Status isApproved={isApproved}>{request?.flag ? '승인' : '대기'}</Styled.Status>
                    <Styled.Title>{request?.title}</Styled.Title>
                    <Styled.Detail>
                        {request?.memberName}
                        <span>·</span>
                        {request?.createAt}
                    </Styled.Detail>
                    <Styled.Content>{request?.description}</Styled.Content>
                </Styled.Container>
                <Styled.ButtonWrapper>
                    {isAdmin() && (
                        <>
                            <Button
                                backgroundColor={COLOR.NAVY_200}
                                color={COLOR.WHITE}
                                width="14.5rem"
                                borderRadius="1.6rem"
                                fontSize={FONT.REGULAR_14}
                                type="submit"
                                shadow
                                onClick={handleSubmit(onSubmit)}
                            >
                                승인하기
                            </Button>
                        </>
                    )}
                    <Button
                        backgroundColor={COLOR.WHITE}
                        color={COLOR.BLACK}
                        width="14.5rem"
                        borderRadius="1.6rem"
                        fontSize={FONT.REGULAR_14}
                        type="button"
                        onClick={handleNavigate}
                        shadow
                    >
                        돌아가기
                    </Button>
                </Styled.ButtonWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default BoardDetail;
