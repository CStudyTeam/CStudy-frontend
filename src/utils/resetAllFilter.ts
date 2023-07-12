import {
    useBoardFilterStore,
    useContestFilterStore,
    useProblemFilter,
    useWorkbookFilterStore,
} from 'hooks/@zustand/filterStore';

export const resetAllFilters = () => {
    // store의 reset 함수들을 호출하여 모든 필터 초기
    useProblemFilter.getState().reset();
    useBoardFilterStore.getState().reset();
    useContestFilterStore.getState().reset();
    useWorkbookFilterStore.getState().reset();
};
