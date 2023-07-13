import Input from 'components/@shared/Input';
import * as Styled from './style';
import Button from 'components/@shared/Button';
import { FieldErrors, FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface MyPageUpdatePasswordFieldProps {
    errors: FieldErrors<FieldValues>;
    register: UseFormRegister<FieldValues>;
    passwordPattern: {
        value: RegExp;
        message: string;
    };
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    onSubmit: SubmitHandler<FieldValues>;
}

const MyPageUpdatePasswordField = ({
    errors,
    register,
    passwordPattern,
    handleSubmit,
    onSubmit,
}: MyPageUpdatePasswordFieldProps) => {
    return (
        <Styled.MyPageUserInfo>
            <Styled.InputWrapper>
                <Input label="현재 비밀번호" smallLabel id="oldPassword" errors={errors} register={register} required />
                <Input
                    label="바꿀 비밀번호"
                    smallLabel
                    id="newPassword"
                    errors={errors}
                    register={register}
                    pattern={passwordPattern}
                    onErrorMsg
                    required
                />
            </Styled.InputWrapper>
            <Button type="button" onClick={handleSubmit(onSubmit)} className="mt lg navy style">
                변경하기
            </Button>
        </Styled.MyPageUserInfo>
    );
};

export default MyPageUpdatePasswordField;
