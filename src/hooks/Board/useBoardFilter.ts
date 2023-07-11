import { ROUTE } from 'constants/Route';
import { BoardFilterStoreType, useBoardFilterStore } from 'hooks/@zustand/filterStore';
import { useCallback } from 'react';

interface BoardFilterType {
    boardFilter: BoardFilterStoreType;
    handlePage: (page: number) => void;
    handleToggle: () => void;
    isActive: string;
}

const useBoardFilter = (): BoardFilterType => {
    const boardFilter = useBoardFilterStore();
    const isActive = boardFilter.query === ROUTE.BOARD_MY_LIST ? 'active' : '';

    const handlePage = useCallback(
        (page: number) => {
            boardFilter.setPageNumber(page);
        },
        [boardFilter],
    );

    const handleToggle = useCallback(() => {
        boardFilter.reset();
        boardFilter.setQuery(boardFilter.query === ROUTE.BOARD_LIST ? ROUTE.BOARD_MY_LIST : ROUTE.BOARD_LIST);
    }, [boardFilter]);
    return {
        boardFilter,
        handlePage,
        handleToggle,
        isActive,
    };
};

export default useBoardFilter;
