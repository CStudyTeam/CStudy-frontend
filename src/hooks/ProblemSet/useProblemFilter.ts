import { ROUTE } from 'constants/Route';
import { useGetProblem } from 'hooks/@query/problem/useGetProblem';
import { StatusFilterStore, useProblemFilter } from 'hooks/@zustand/filterStore';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { useState, useCallback } from 'react';
import { Problem } from 'types/api';
import { isLogin } from 'utils/auth';

interface ProblemSetType {
    problemFilter: StatusFilterStore;
    statusActive: boolean;
    categoryActive: boolean;
    problemList: Problem;
    isActive: string;
    handlePage: (page: number) => void;
    handleToggle: () => void;
    statusHandleActive: (e: React.MouseEvent) => void;
    categoryHandleActive: (e: React.MouseEvent) => void;
    checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
}

const useProblemSetFilter = (): ProblemSetType => {
    const problemFilter = useProblemFilter();
    const [statusActive, setStatusActive] = useState(false);
    const [categoryActive, setCategoryActive] = useState(false);
    const isActive = problemFilter.query === ROUTE.PROBLEMSET_MYQUESTION ? 'active' : '';
    const loginModal = useLoginModal();
    const problemList = useGetProblem({
        categoryTitle: problemFilter.categoryValue,
        status: problemFilter.statusValue,
        page: problemFilter.pageNumber,
        query: problemFilter.query,
    });

    const statusHandleActive = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLElement;
            setStatusActive((value) => !value);
            if (target.nodeName === 'LI') {
                problemFilter.setStatus(target.innerText);
                problemFilter.setStatusValue(Number(target.dataset.value));
            }
        },
        [problemFilter],
    );

    const categoryHandleActive = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLElement;
            setCategoryActive((value) => !value);
            if (target.nodeName === 'LI') {
                problemFilter.setCategory(target.innerText);
                problemFilter.setCategoryValue(target.dataset.value as string);
            }
        },
        [problemFilter],
    );

    const handleToggle = useCallback(() => {
        problemFilter.reset();
        problemFilter.setQuery(problemFilter.query === '' ? ROUTE.PROBLEMSET_MYQUESTION : '');
    }, [problemFilter]);

    const handlePage = useCallback(
        (page: number) => {
            problemFilter.setPageNumber(page);
        },
        [problemFilter],
    );

    const checkAndDisplayLoginModal = useCallback(
        (e: React.MouseEvent) => {
            if (!isLogin()) {
                e.preventDefault();
                loginModal.onOpen();
            }
        },
        [loginModal],
    );

    return {
        problemFilter,
        problemList: problemList as Problem,
        isActive,
        statusActive,
        categoryActive,
        handlePage,
        handleToggle,
        statusHandleActive,
        categoryHandleActive,
        checkAndDisplayLoginModal,
    };
};

export default useProblemSetFilter;
