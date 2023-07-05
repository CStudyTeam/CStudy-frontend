import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Table from 'components/ProblemSet/Table';
import { TBodyTd } from 'components/ProblemSet/Table/style';
import Pagination from 'components/ProblemSet/Pagination';
import { useState, useCallback } from 'react';
import useGetContestList from 'hooks/@query/contest/useGetContestList';
import { Link } from 'react-router-dom';
import { ContestListData } from 'types/contest';

const Contest = () => {
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');

    const contestList = useGetContestList({ page, query });

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="대회" adminLink="대회생성 페이지 이동" />
            <ContentBodyWrapper>
                <Table colRate={['60%', '10%', '30%']} title={['대회명', '최대 인원수', '기간']}>
                    {contestList?.content?.map(({ id, title, startTime, endTime, participants }: ContestListData) => (
                        <tr key={id}>
                            <TBodyTd className="bold">
                                <Link to={`${id}`}>{title}</Link>
                            </TBodyTd>
                            <TBodyTd>{participants}</TBodyTd>
                            <TBodyTd>
                                {startTime.split(' ')[0]} ~ {endTime.split(' ')[0]}
                            </TBodyTd>
                        </tr>
                    ))}
                    {contestList?.totalPages > 1 && (
                        <tr>
                            <TBodyTd colSpan={3}>
                                <Pagination
                                    totalPages={contestList?.totalPages}
                                    handlePage={handlePage}
                                    page={page}
                                    white
                                />
                            </TBodyTd>
                        </tr>
                    )}
                </Table>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Contest;
