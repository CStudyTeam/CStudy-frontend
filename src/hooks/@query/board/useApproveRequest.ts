import { useMutation } from '@tanstack/react-query';
import { approveRequest } from 'api/board';

export const useApproveRequest = () => {
    const { mutate: ApproveRequest } = useMutation(approveRequest, {
        onSuccess: () => {
            alert('글이 승인되었습니다.');
        },
        onError: () => {
            alert('글 승인에 실패했습니다.');
        },
    });

    return ApproveRequest;
};
