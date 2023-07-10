import { useMutation, useQueryClient } from '@tanstack/react-query';
import { approveRequest } from 'api/board';
import toast from 'provider/Toast';

export const useApproveRequest = () => {
    const queryClient = useQueryClient();
    const { mutate: ApproveRequest } = useMutation(approveRequest, {
        onSuccess: () => {
            toast.success('글이 승인되었습니다.');
            queryClient.invalidateQueries(['request']);
        },
        onError: () => {
            toast.error('글 승인에 실패했습니다.');
        },
    });

    return ApproveRequest;
};
