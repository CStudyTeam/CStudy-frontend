import { create } from 'zustand';

export interface StatusFilterStore {
    pageNumber: number;
    query: string;
    status: string;
    statusValue: number;
    categoryValue: string;
    category: string;
    setQuery: (query: string) => void;
    setStatus: (status: string) => void;
    setStatusValue: (statusValue: number) => void;
    setCategory: (category: string) => void;
    setCategoryValue: (categoryValue: string) => void;
    setPageNumber: (pageNumber: number) => void;
    reset: () => void;
}

export const useProblemFilter = create<StatusFilterStore>((set) => ({
    pageNumber: 0,
    query: '',
    status: '상태',
    statusValue: 0,
    category: '카테고리',
    categoryValue: '',
    setQuery: (query) => set({ query }),
    setStatus: (status) => set({ status }),
    setStatusValue: (statusValue) => set({ statusValue }),
    setCategory: (category) => set({ category }),
    setCategoryValue: (categoryValue) => set({ categoryValue }),
    setPageNumber: (pageNumber) => set({ pageNumber }),
    reset: () =>
        set({
            pageNumber: 0,
            query: '',
            status: '상태',
            statusValue: 0,
            category: '카테고리',
            categoryValue: '',
        }),
}));
