import * as Styled from './style';
import usePagination from '../../../hooks/ProblemSet/usePagination';
import { PaginationProps } from 'types/problemForm';

const Pagination = ({ totalPages, handlePage, page }: PaginationProps) => {
    const { currentPage, handlePrevPageGroupClick, handleNextPageGroupClick, paginationButtons, totalGroups } =
        usePagination({
            totalPages,
            handlePage,
            page,
        });

    return (
        <Styled.Pagination>
            <Styled.LeftArrowButton onClick={handlePrevPageGroupClick} disabled={currentPage === 1} />
            <Styled.PaginationButtonWrapper>{paginationButtons}</Styled.PaginationButtonWrapper>
            <Styled.RightArrowButton onClick={handleNextPageGroupClick} disabled={currentPage === totalGroups} />
        </Styled.Pagination>
    );
};

export default Pagination;
