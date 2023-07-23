import { ContestFilterStoreType } from 'hooks/@zustand/filterStore';
import { ContestContent } from 'types/api';
import ContestListTableList from '../ContestListTableList';
import Pagination from 'components/ProblemSet/Pagination';
import { TBodyTd } from 'components/ProblemSet/Table/style';

interface ContestListTableBodyProps {
    contestList: ContestContent[];
    contestFilter: ContestFilterStoreType;
    isActive: string;
    totalPages: number;
    checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
    handlePage: (page: number) => void;
}

const ContestListTableBody = ({
    contestList,
    contestFilter,
    isActive,
    totalPages,
    checkAndDisplayLoginModal,
    handlePage,
}: ContestListTableBodyProps) => {
    return (
        <>
            {contestList?.map((listData) => (
                <ContestListTableList
                    key={listData.id}
                    listData={listData}
                    isActive={!!isActive}
                    checkAndDisplayLoginModal={checkAndDisplayLoginModal}
                />
            ))}
            {(totalPages as number) > 1 && (
                <tr>
                    <TBodyTd colSpan={3}>
                        <Pagination
                            totalPages={totalPages as number}
                            handlePage={handlePage}
                            page={contestFilter.pageNumber}
                            white
                        />
                    </TBodyTd>
                </tr>
            )}
        </>
    );
};

export default ContestListTableBody;
