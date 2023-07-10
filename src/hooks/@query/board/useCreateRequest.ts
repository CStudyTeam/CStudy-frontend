import { useMutation } from '@tanstack/react-query';
import { createRequest } from 'api/board';
import { useNavigate } from 'react-router-dom';
import toast from 'provider/Toast';

export const useCreateRequest = () => {
    const navigate = useNavigate();

    return useMutation(createRequest, {
        onSuccess: () => {
            toast.success('글이 등록되었습니다.');
            navigate('/board');
        },
        onError: () => {
            toast.error('글 등록에 실패했습니다.');
        },
    });
};
