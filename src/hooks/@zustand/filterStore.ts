import { ROUTE } from 'constants/Route';
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
            status: '상태',
            statusValue: 0,
            category: '카테고리',
            categoryValue: '',
        }),
}));

export interface BoardFilterStoreType {
    pageNumber: number;
    query: string;
    setQuery: (query: string) => void;
    setPageNumber: (pageNumber: number) => void;
    reset: () => void;
}

export const useBoardFilterStore = create<BoardFilterStoreType>((set) => ({
    pageNumber: 0,
    query: ROUTE.BOARD_LIST,
    setPageNumber: (pageNumber) => set({ pageNumber }),
    setQuery: (query) => set({ query }),
    reset: () =>
        set({
            pageNumber: 0,
        }),
}));

export interface ContestFilterStoreType {
    pageNumber: number;
    query: string;
    setQuery: (query: string) => void;
    setPageNumber: (pageNumber: number) => void;
    reset: () => void;
}

export const useContestFilterStore = create<ContestFilterStoreType>((set) => ({
    pageNumber: 0,
    query: ROUTE.CONTEST_FINISH,
    setPageNumber: (pageNumber) => set({ pageNumber }),
    setQuery: (query) => set({ query }),
    reset: () =>
        set({
            pageNumber: 0,
        }),
}));

export interface WorkbookFilterStoreType {
    pageNumber: number;
    title: string;
    description: string;
    setPageNumber: (pageNumber: number) => void;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    reset: () => void;
}

export const useWorkbookFilterStore = create<WorkbookFilterStoreType>((set) => ({
    pageNumber: 0,
    title: '',
    description: '',
    setPageNumber: (pageNumber) => set({ pageNumber }),
    setTitle: (title) => set({ title }),
    setDescription: (description) => set({ description }),
    reset: () =>
        set({
            pageNumber: 0,
            title: '',
            description: '',
        }),
}));
