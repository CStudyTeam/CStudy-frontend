export type LoginResponse = {
    accessToken: string;
    refreshToken: string;
    email: string;
    name: string;
};

// Contest

export interface Contest {
    title: string;
    startTime: string;
    endTime: string;
    participants: number;
    maxParticipants: number;
}

type Choices = {
    number: number;
    content: string;
};

export interface ContestProblem {
    questionId: number;
    description: string;
    choices: Choices[];
}

type ContestSort = {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
};

type ContestPageAble = {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: ContestSort;
    unpaged: boolean;
};

type ContestContent = {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    participants: number;
};

export interface ContestList {
    content: ContestContent[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: ContestPageAble;
    size: number;
    sort: ContestSort;
    totalElements: number;
    totalPages: number;
}

type ContestDetail = {
    questionId: number;
    choiceNumber: number;
    correct: boolean;
};

export interface ContestResult {
    score: number;
    total: number;
    details: ContestDetail[];
}

type ContestRankingContent = {
    memberId: number;
    name: string;
    score: number;
    endTime: number | null;
};

export interface ContestRanking extends Omit<ContestList, 'content'> {
    content: ContestRankingContent[];
}

// Problem

type ProblemContent = {
    questionId: number;
    questionTitle: string;
    categoryTitle: string;
    questionSuccess: number;
};
export interface Problem extends Omit<ContestList, 'content'> {
    content: ProblemContent[];
}

export interface OneProblem {
    title: string;
    categoryTitle: string;
    description: string;
    explain: string;
    choices: Choices[];
}

// Board
export interface RequestDetail {
    id: number;
    flag: boolean;
    title: string;
    description: string;
    memberId: number;
    memberName: string;
    createAt: string;
}

type RequestContent = {
    id: number;
    memberId: number;
    title: string;
    memberName: string;
    description: string;
    createAt: string;
    flag: boolean;
};
export interface ToggleRequestList extends Omit<ContestList, 'content'> {
    content: RequestContent[];
}

// Workbook

type WorkbookContent = {
    id: number;
    title: string;
    description: string;
    createdAt: string;
};
export interface WorkbookList extends Omit<ContestList, 'content'> {
    content: WorkbookContent[];
}

export type Workbook = WorkbookContent;

type WorkbookQuestionContent = {
    title: string;
    questionId: number;
    workbookQuestionId: number;
};
export interface WorkbookQuestion extends Omit<ContestList, 'content'> {
    content: WorkbookQuestionContent[];
}

// mypage

export interface MyImageProps {
    memberId: string;
    roles: string;
}

export interface MyPage {
    id: number;
    name: string;
    email: string;
}
