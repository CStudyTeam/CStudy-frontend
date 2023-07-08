import Button from 'components/@shared/Button';
import * as Styled from './style';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import { useGetMyImage } from 'hooks/@query/mypage/useGetMyImage';
import { useGetMyPage } from 'hooks/@query/mypage/useGetMyPage';
import { userInfo } from 'utils/auth';
import { TBodyTd } from 'components/ProblemSet/Table/style';
import { useCallback, useState } from 'react';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import Table from 'components/ProblemSet/Table';
import Pagination from 'components/ProblemSet/Pagination';
import { AiFillCheckCircle } from 'react-icons/ai';
import { COLOR } from 'constants/Color';
import { BiSolidError } from 'react-icons/bi';
import useGetToggleRequestList from 'hooks/@query/board/useGetRequestList';
import { Status } from 'components/Board/RequestList/style';
import { Link } from 'react-router-dom';
import ApproveStatus from 'components/@shared/Status';

const MyPage = () => {
    const [page, setPage] = useState(0);
    const [requestPage, setRequestPage] = useState(0);
    // const user = userInfo();
    // const myImage = useGetMyImage({});
    const myPage = useGetMyPage();
    const requestList = useGetToggleRequestList({ page: requestPage, query: 'mylist' });

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    console.log(myPage);
    const requestHandlePage = useCallback((page: number) => {
        setRequestPage(page);
    }, []);

    const problemList = useGetProblem({
        page,
    });

    const requestTBodyContent = requestList?.content?.map(({ id, flag, title }, index: number) => (
        <tr key={index}>
            <TBodyTd white narrow>
                {id}
            </TBodyTd>
            <TBodyTd white narrow className="title">
                <Link to={`/board/${id}`}>{title}</Link>
            </TBodyTd>
            <TBodyTd white narrow>
                <ApproveStatus small flag={flag} />
            </TBodyTd>
        </tr>
    ));

    const TBodyContent = problemList?.content?.map(
        ({ questionId, questionTitle, categoryTitle, status }, index: number) => (
            <tr key={index}>
                <TBodyTd white narrow>
                    {questionId}
                </TBodyTd>
                <TBodyTd white narrow className="title">
                    <Link to={`/problemset/${questionId}`}>{questionTitle}</Link>
                </TBodyTd>
                <TBodyTd white narrow>
                    {categoryTitle}
                </TBodyTd>
                <TBodyTd white narrow>
                    {status === 1 ? <AiFillCheckCircle size={30} color={COLOR.GREEN} /> : ''}
                </TBodyTd>
                <TBodyTd white narrow>
                    {status === 2 ? <BiSolidError size={30} color={COLOR.RED} /> : ''}
                </TBodyTd>
            </tr>
        ),
    );

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="마이페이지" />
            <ContentBodyWrapper blue>
                <Styled.MyPageContentWrapper>
                    <Styled.MyPageLabel>내 정보</Styled.MyPageLabel>
                    <Styled.MyPageUserInfoWrapper>
                        <div>
                            <Styled.ProfileImg src="basic_profile.jpg" alt="사용자 프로필 이미지" />
                        </div>
                        <Styled.MyPageUserInfo>
                            <Styled.MyPageUserInfoName>{myPage?.name}</Styled.MyPageUserInfoName>
                            <Styled.MyPageUserInfoEmail>{myPage?.email}</Styled.MyPageUserInfoEmail>
                            <Button type="button" className="mt-sm lg gray style">
                                비밀번호 수정하기
                            </Button>
                        </Styled.MyPageUserInfo>
                    </Styled.MyPageUserInfoWrapper>
                </Styled.MyPageContentWrapper>
                <Styled.MyPageContentWrapper>
                    <Styled.MyPageLabel>나의 게시판 승인 현황</Styled.MyPageLabel>
                    <Styled.MyPageTableWrapper>
                        <Table white narrow colRate={['10%', '70%', '30%']} title={['NO.', '게시글 제목', '승인상태']}>
                            {requestTBodyContent}
                        </Table>
                        {(requestList?.totalPages as number) > 1 && (
                            <Styled.PaginationWrapper>
                                <Pagination
                                    white
                                    totalPages={requestList?.totalPages as number}
                                    handlePage={requestHandlePage}
                                    page={requestPage}
                                />
                            </Styled.PaginationWrapper>
                        )}
                    </Styled.MyPageTableWrapper>
                </Styled.MyPageContentWrapper>
                <Styled.MyPageContentWrapper>
                    <Styled.MyPageLabel>내가 풀은 문제</Styled.MyPageLabel>
                    <Styled.MyPageTableWrapper>
                        <Table
                            white
                            narrow
                            colRate={['10%', '50%', '20%', '10%', '10%']}
                            title={['NO.', '문제이름', '카테고리', '맞춘 문제', '틀린 문제']}
                        >
                            {TBodyContent}
                        </Table>
                        {(problemList?.totalPages as number) > 1 && (
                            <Styled.PaginationWrapper>
                                <Pagination
                                    white
                                    totalPages={problemList?.totalPages as number}
                                    handlePage={handlePage}
                                    page={page}
                                />
                            </Styled.PaginationWrapper>
                        )}
                    </Styled.MyPageTableWrapper>
                </Styled.MyPageContentWrapper>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default MyPage;
