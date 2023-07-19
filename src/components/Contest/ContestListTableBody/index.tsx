import { memo } from 'react';
import { ContestFilterStoreType } from 'hooks/@zustand/filterStore';
import { ContestContent } from 'types/api';
import StyleLink from 'components/@shared/StyleLink';
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
            {contestList?.map(({ id, title, startTime, endTime, participants }) => (
                <tr key={id}>
                    <TBodyTd className="bold">
                        <StyleLink
                            className="bold fs--xl"
                            to={`${id}`}
                            state={!!isActive}
                            onClick={checkAndDisplayLoginModal}
                        >
                            {title}
                        </StyleLink>
                    </TBodyTd>
                    <TBodyTd>{participants}</TBodyTd>
                    <TBodyTd>
                        {startTime.split(' ')[0]} ~ {endTime.split(' ')[0]}
                    </TBodyTd>
                </tr>
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

export default memo(ContestListTableBody);
