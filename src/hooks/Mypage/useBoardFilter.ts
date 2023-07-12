import { MyPageFilterStoreType, useMyPageFilterStore } from 'hooks/@zustand/filterStore';
import { useCallback } from 'react';

interface MyPageFilterType {
    myPageFilter: MyPageFilterStoreType;
    handlePage: (page: number) => void;
    requestHandlePage: (page: number) => void;
}

const useMyPageFilter = (): MyPageFilterType => {
    const myPageFilter = useMyPageFilterStore();

    const handlePage = useCallback(
        (page: number) => {
            myPageFilter.setProblemPageNumber(page);
        },
        [myPageFilter],
    );

    const requestHandlePage = useCallback(
        (page: number) => {
            myPageFilter.setRequestPageNumber(page);
        },
        [myPageFilter],
    );

    return {
        myPageFilter,
        handlePage,
        requestHandlePage,
    };
};

export default useMyPageFilter;
