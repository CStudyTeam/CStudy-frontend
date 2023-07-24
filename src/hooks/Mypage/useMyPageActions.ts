import { useUpdatePassword } from 'hooks/@query/mypage/useUpdatePassword';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, UseFormReset } from 'react-hook-form';

interface MyPageActionsType {
    isLoading: boolean;
    isActive: boolean;
    passwordPattern: {
        value: RegExp;
        message: string;
    };
    onSubmit: SubmitHandler<FieldValues>;
    handleClickActive: () => void;
}

interface useMyPageActionsProps {
    reset: UseFormReset<FieldValues>;
}

const useMyPageActions = ({ reset }: useMyPageActionsProps): MyPageActionsType => {
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const passwordPattern = {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/,
        message: '문자, 숫자, 기호를 포함한 8~20자를 입력해주세요.',
    };

    const handleIsLoading = useCallback((isLoading: boolean) => {
        setIsLoading(isLoading);
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (FormData) => {
        UpdatePassword(FormData);
    };

    const handleClickActive = useCallback(() => {
        setIsActive((value) => !value);
    }, []);

    const UpdatePassword = useUpdatePassword({ handleIsLoading, reset });

    return {
        isLoading,
        isActive,
        passwordPattern,
        onSubmit,
        handleClickActive,
    };
};

export default useMyPageActions;
