import { ROUTE } from 'constants/Route';
import { create } from 'zustand';

export interface PageNumberStoreType {
    pageNumber: number;
    handlePage: (pageNumber: number) => void;
    reset: () => void;
}

export const usePageNumberStore = create<PageNumberStoreType>((set) => ({
    pageNumber: 0,
    handlePage: (pageNumber) => set({ pageNumber }),
    reset: () => {
        set({ pageNumber: 0 });
        useStatusFilter.setState({ status: '상태', statusValue: 0 });
        useCategoryFilter.setState({ category: '카테고리', categoryValue: '' });
        useQueryFilter.setState({ query: '' });
    },
}));

export interface StatusFilterStoreType {
    status: string;
    statusValue: number;
    setStatus: (status: string) => void;
    setStatusValue: (statusValue: number) => void;
}

export const useStatusFilter = create<StatusFilterStoreType>((set) => ({
    status: '상태',
    statusValue: 0,
    setStatus: (status) => set({ status }),
    setStatusValue: (statusValue) => set({ statusValue }),
}));

export interface QueryFilterStoreType {
    query: string;
    setQuery: (query: string) => void;
}

export const useQueryFilter = create<QueryFilterStoreType>((set) => ({
    query: '',
    setQuery: (query) => set({ query }),
}));

export interface CategoryFilterStoreType {
    category: string;
    categoryValue: string;
    setCategory: (category: string) => void;
    setCategoryValue: (categoryValue: string) => void;
}

export const useCategoryFilter = create<CategoryFilterStoreType>((set) => ({
    category: '카테고리',
    categoryValue: '',
    setCategory: (category) => set({ category }),
    setCategoryValue: (categoryValue) => set({ categoryValue }),
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
            query: ROUTE.BOARD_LIST,
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
    query: '',
    setPageNumber: (pageNumber) => set({ pageNumber }),
    setQuery: (query) => set({ query }),
    reset: () =>
        set({
            query: '',
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

export interface MyPageFilterStoreType {
    requestPageNumber: number;
    problemPageNumber: number;
    setRequestPageNumber: (requestPageNumber: number) => void;
    setProblemPageNumber: (problemPageNumber: number) => void;
    reset: () => void;
}

export const useMyPageFilterStore = create<MyPageFilterStoreType>((set) => ({
    requestPageNumber: 0,
    problemPageNumber: 0,
    setRequestPageNumber: (requestPageNumber) => set({ requestPageNumber }),
    setProblemPageNumber: (problemPageNumber) => set({ problemPageNumber }),
    reset: () =>
        set({
            requestPageNumber: 0,
            problemPageNumber: 0,
        }),
}));
