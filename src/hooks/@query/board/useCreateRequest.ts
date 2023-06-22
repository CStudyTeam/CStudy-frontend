import { useMutation } from '@tanstack/react-query';
import { createRequest } from 'api/board';
import { useNavigate } from 'react-router-dom';

export const useCreateRequest = () => {
    const navigate = useNavigate();

    return useMutation(createRequest, {
        onSuccess: () => {
            alert('글이 등록되었습니다.');
            navigate('/board');
        },
        onError: () => {
            alert('글 등록에 실패했습니다.');
        },
    });
};
