import { useMutation } from '@tanstack/react-query';
import { createRequest } from 'api/board';

export const useCreateRequest = () => {
    return useMutation(createRequest, {
        onSuccess: () => {
            alert('글이 등록되었습니다.');
        },
        onError: () => {
            alert('글 등록에 실패했습니다.');
        },
    });
};
