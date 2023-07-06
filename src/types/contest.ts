import { Dispatch, SetStateAction } from 'react';

export interface UseJoinContestProps {
    contestId?: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

// component: Quiz

export interface UseSubmitContestProps {
    contestId: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}
