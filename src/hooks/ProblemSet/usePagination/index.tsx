import React, { useState, useCallback, useMemo, ReactElement } from 'react';
import * as Styled from './style';
import { PaginationProps } from 'types/problemForm';

const usePagination = ({ totalPages, handlePage, page }: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pagesPerGroup = 5;
    const totalGroups = Math.ceil(totalPages / pagesPerGroup);
    const currentPageNumber = page + 1;

    const handlePrevPageGroupClick = useCallback(() => {
        setCurrentPage((prevPage) => {
            handlePage((prevPage - 1) * pagesPerGroup - 1);
            return prevPage - 1;
        });
    }, [handlePage]);

    const handleNextPageGroupClick = useCallback(() => {
        setCurrentPage((prevPage) => {
            handlePage(prevPage * pagesPerGroup);
            return prevPage + 1;
        });
    }, [handlePage]);

    const paginationButtons = useMemo(() => {
        const startIndex = (currentPage - 1) * pagesPerGroup;
        const endIndex = Math.min(startIndex + pagesPerGroup, totalPages);

        return Array.from({ length: endIndex - startIndex }, (_, index) => {
            const pageNumber = startIndex + index + 1;

            return (
                <Styled.PaginationButton
                    key={index}
                    onClick={() => handlePage(pageNumber - 1)}
                    className={pageNumber === currentPageNumber ? 'active' : ''}
                >
                    {pageNumber}
                </Styled.PaginationButton>
            );
        });
    }, [currentPage, currentPageNumber, handlePage, totalPages]);

    return {
        currentPage,
        totalGroups,
        handlePrevPageGroupClick,
        handleNextPageGroupClick,
        paginationButtons,
    };
};

export default usePagination;
