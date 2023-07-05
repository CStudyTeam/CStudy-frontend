import { Dispatch, SetStateAction } from 'react';

export interface UseJoinContestProps {
    contestId?: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

// component: Contest

export interface ContestListData {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    participants: number;
}

// component: Quiz

type Choice = {
    number: number;
    content: string;
};

type Question = {
    description: string;
    questionId: number;
    choices: Choice[];
};

export interface QuizAppProps {
    quizData: Question[];
    competitionId: string;
}

export interface UseSubmitContestProps {
    contestId: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

// component: QuizResult

type Detail = {
    correct: boolean;
    questionId: number;
    choiceNumber: number;
};

export interface QuizResultProps {
    testResultData: {
        score: number;
        total: number;
        details: Detail[];
    };
}
