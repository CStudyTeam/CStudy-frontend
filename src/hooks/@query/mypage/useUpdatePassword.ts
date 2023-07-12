import { useMutation } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';
import { updatePassword } from 'api/mypage';
import toast from 'provider/Toast';
import { FieldValues, UseFormReset } from 'react-hook-form';

interface UpdatePasswordProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    reset: UseFormReset<FieldValues>;
}

export const useUpdatePassword = ({ setIsLoading, reset }: UpdatePasswordProps) => {
    const { mutate: UpdatePassword } = useMutation(updatePassword, {
        onSuccess: () => {
            toast.success('비밀번호 변경에 성공했습니다.');
            reset();
        },
        onError: () => {
            toast.error('비밀번호 변경에 실패했습니다.');
        },
        onSettled: () => {
            setIsLoading(false);
        },
    });

    return UpdatePassword;
};
