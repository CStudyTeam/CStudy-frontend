export interface RequestForm {
    title: string;
    content: string;
}

export interface RequestPost {
    content: {
        id: number;
        flag: boolean;
        title: string;
        content: string;
        memberId: number;
        memberName: string;
        createAt: string;
    }[];
}
