import useGetRequest from 'hooks/@query/board/useGetRequest';
import * as Styled from './style';
import { useNavigate, useParams } from 'react-router-dom';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Button from 'components/@shared/Button';
import { isAdmin } from 'utils/auth';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useApproveRequest } from 'hooks/@query/board/useApproveRequest';
import BoardDetailBoard from 'components/BoardDetail/BoardDetailBoard';
import { RequestDetail } from 'types/api';

const BoardDetail = () => {
    const { requestId } = useParams();
    const navigate = useNavigate();

    const request = useGetRequest(requestId);
    const { handleSubmit } = useForm<FieldValues>();

    const handleNavigate = () => {
        navigate(-1);
    };

    const ApproveRequest = useApproveRequest();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        formData.id = request?.id;
        formData.flag = true;
        ApproveRequest(formData);
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="게시판" />
            <ContentBodyWrapper blue>
                <BoardDetailBoard request={request as RequestDetail} />
                <Styled.ButtonWrapper>
                    {isAdmin() && (
                        <>
                            <Button type="submit" className="xl wide navy style" onClick={handleSubmit(onSubmit)}>
                                승인하기
                            </Button>
                        </>
                    )}
                    <Button type="button" className="xl gray style" onClick={handleNavigate}>
                        돌아가기
                    </Button>
                </Styled.ButtonWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default BoardDetail;
