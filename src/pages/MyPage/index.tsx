import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import { FieldValues, useForm } from 'react-hook-form';
import { ROUTE } from 'constants/Route';
import useMyPageFilter from 'hooks/Mypage/useBoardFilter';
import { MyPage as MyPageType, Problem, ToggleRequestList } from 'types/api';
import useMyPageActions from 'hooks/Mypage/useMyPageActions';
import { useMixMyPageAllData } from 'hooks/@query/@GETmixed/useMixMyPageAllData';
import MyPageMyInfo from 'components/Mypage/MyPageMyInfo';
import MyPageMyBoard from 'components/Mypage/MyPageMyBoard';
import MyPageMySolveProblem from 'components/Mypage/MyPageMySolveProblem';

const MyPage = () => {
    const { myPageFilter, handlePage, requestHandlePage } = useMyPageFilter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            newPassword: '',
            oldPassword: '',
        },
    });
    const { isLoading, isActive, passwordPattern, onSubmit, handleClickActive } = useMyPageActions({
        reset,
    });

    const { myPage, requestList, problemList } = useMixMyPageAllData({
        requestPage: myPageFilter.requestPageNumber,
        query: ROUTE.BOARD_MY_LIST,
        problemPage: myPageFilter.problemPageNumber,
    });

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="마이페이지" />
            <ContentBodyWrapper blue>
                <MyPageMyInfo
                    isLoading={isLoading}
                    myPage={myPage as MyPageType}
                    isActive={isActive}
                    passwordPattern={passwordPattern}
                    errors={errors}
                    register={register}
                    onSubmit={onSubmit}
                    handleClickActive={handleClickActive}
                    handleSubmit={handleSubmit}
                />
                <MyPageMyBoard
                    requestList={requestList as ToggleRequestList}
                    requestHandlePage={requestHandlePage}
                    myPageFilter={myPageFilter}
                />
                <MyPageMySolveProblem
                    problemList={problemList as Problem}
                    handlePage={handlePage}
                    myPageFilter={myPageFilter}
                />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default MyPage;
