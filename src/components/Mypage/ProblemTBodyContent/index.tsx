import { useMemo } from 'react';
import { MyPageFilterStoreType } from 'hooks/@zustand/filterStore';
import { Problem } from 'types/api';
import Table from 'components/ProblemSet/Table';
import ProblemTBodyContentTableLists from '../ProblemTBodyContentTableLists';
import ProblemTBodyContentPagination from '../ProblemTBodyContentPagination';
import NoData from 'components/@shared/NoData';

interface ProblemTBodyContentProps {
    problemList: Problem;
    handlePage: (page: number) => void;
    myPageFilter: MyPageFilterStoreType;
}

const ProblemTBodyContent = ({ problemList, myPageFilter, handlePage }: ProblemTBodyContentProps) => {
    const tableColRate = useMemo(() => ['10%', '50%', '20%', '10%', '10%'], []);
    const tableTitle = useMemo(() => ['NO.', '문제이름', '카테고리', '맞춘 문제', '틀린 문제'], []);

    return (
        <>
            <Table white narrow colRate={tableColRate} title={tableTitle}>
                {problemList?.totalElements === 0 && (
                    <tr>
                        <td colSpan={5}>
                            <NoData>문제가 없습니다.</NoData>
                        </td>
                    </tr>
                )}
                <ProblemTBodyContentTableLists problemList={problemList} />
            </Table>
            <ProblemTBodyContentPagination
                problemList={problemList}
                myPageFilter={myPageFilter}
                handlePage={handlePage}
            />
        </>
    );
};

export default ProblemTBodyContent;
