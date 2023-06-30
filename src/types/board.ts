export interface RequestForm {
    id: string;
    flag: string;
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
