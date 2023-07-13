import * as Styled from './style';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import { FieldValues, useForm } from 'react-hook-form';
import { ROUTE } from 'constants/Route';
import useMyPageFilter from 'hooks/Mypage/useBoardFilter';
import MyPageUserInfo from 'components/Mypage/MyPageUserInfo';
import { MyPage as MyPageType, Problem, ToggleRequestList } from 'types/api';
import useMyPageActions from 'hooks/Mypage/useMyPageActions';
import MyPageUpdatePasswordField from 'components/Mypage/MyPageUpdatePasswordField';
import RequestTBodyContent from 'components/Mypage/RequestTBodyContent';
import ProblemTBodyContent from 'components/Mypage/ProblemTBodyContent';
import { useMixMyPageAllData } from 'hooks/@query/@GETmixed/useMixMyPageAllData';

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
                <Styled.MyPageContentWrapper>
                    <Styled.MyPageLabel>내 정보</Styled.MyPageLabel>
                    <Styled.MyPageUserInfoBg>
                        <Styled.MyPageUserInfoWrapper>
                            <MyPageUserInfo
                                myPage={myPage as MyPageType}
                                handleClickActive={handleClickActive}
                                isLoading={isLoading}
                            />
                        </Styled.MyPageUserInfoWrapper>
                        {isActive && (
                            <Styled.MyPageUserInfoWrapper>
                                <MyPageUpdatePasswordField
                                    errors={errors}
                                    register={register}
                                    passwordPattern={passwordPattern}
                                    handleSubmit={handleSubmit}
                                    onSubmit={onSubmit}
                                />
                            </Styled.MyPageUserInfoWrapper>
                        )}
                    </Styled.MyPageUserInfoBg>
                </Styled.MyPageContentWrapper>
                <Styled.MyPageContentWrapper>
                    <Styled.MyPageLabel>나의 게시판 승인 현황</Styled.MyPageLabel>
                    <Styled.MyPageTableWrapper>
                        <RequestTBodyContent
                            requestList={requestList as ToggleRequestList}
                            requestHandlePage={requestHandlePage}
                            myPageFilter={myPageFilter}
                        />
                    </Styled.MyPageTableWrapper>
                </Styled.MyPageContentWrapper>
                <Styled.MyPageContentWrapper>
                    <Styled.MyPageLabel>내가 풀은 문제</Styled.MyPageLabel>
                    <Styled.MyPageTableWrapper>
                        <ProblemTBodyContent
                            problemList={problemList as Problem}
                            handlePage={handlePage}
                            myPageFilter={myPageFilter}
                        />
                    </Styled.MyPageTableWrapper>
                </Styled.MyPageContentWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default MyPage;
