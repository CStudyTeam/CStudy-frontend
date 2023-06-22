export interface RequestForm {
    title: string;
    description: string;
}

export interface RequestPost {
    content: RequestDetail[];
}

export interface RequestDetail {
    id: number;
    flag: boolean;
    title: string;
    description: string;
    memberId: number;
    memberName: string;
    createAt: string;
}
