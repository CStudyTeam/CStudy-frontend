export interface RequestForm {
    title: string;
    content: string;
}

export interface RequestPost {
    content: RequestContent[];
}

export interface RequestContent {
    id: number;
    flag: boolean;
    title: string;
    content: string;
    memberId: number;
    memberName: string;
    createAt: string;
}
