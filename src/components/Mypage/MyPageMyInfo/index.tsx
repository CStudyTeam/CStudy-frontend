import { MyPage } from 'types/api';
import MyPageUpdatePasswordField from '../MyPageUpdatePasswordField';
import MyPageUserInfo from '../MyPageUserInfo';
import * as Styled from './style';
import { memo } from 'react';
import { FieldErrors, FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface MyPageMyInfoProps {
    isLoading: boolean;
    myPage: MyPage;
    isActive: boolean;
    passwordPattern: {
        value: RegExp;
        message: string;
    };
    errors: FieldErrors<FieldValues>;
    register: UseFormRegister<FieldValues>;
    onSubmit: SubmitHandler<FieldValues>;
    handleClickActive: () => void;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
}

const MyPageMyInfo = ({
    isLoading,
    myPage,
    isActive,
    passwordPattern,
    errors,
    register,
    onSubmit,
    handleClickActive,
    handleSubmit,
}: MyPageMyInfoProps) => {
    return (
        <>
            <Styled.MyPageLabel>내 정보</Styled.MyPageLabel>
            <Styled.MyPageUserInfoBg>
                <Styled.MyPageUserInfoWrapper>
                    <MyPageUserInfo
                        myPage={myPage as MyPage}
                        handleClickActive={handleClickActive}
                        isLoading={isLoading}
                    />
                </Styled.MyPageUserInfoWrapper>
                {isActive && (
                    <Styled.MyPageUserInfoWrapper>
                        <MyPageUpdatePasswordField
                            errors={errors}
                            register={register}
                            passwordPattern={passwordPattern}
                            handleSubmit={handleSubmit}
                            onSubmit={onSubmit}
                        />
                    </Styled.MyPageUserInfoWrapper>
                )}
            </Styled.MyPageUserInfoBg>
        </>
    );
};

export default memo(MyPageMyInfo);
