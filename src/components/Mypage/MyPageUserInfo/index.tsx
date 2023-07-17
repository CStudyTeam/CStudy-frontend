import Button from 'components/@shared/Button';
import * as Styled from './style';
import { MyPage } from 'types/api';
import { memo } from 'react';
import Profile_Jpg from 'assets/profile/basic_profile.jpg';
import Profile_Webp from 'assets/profile/basic_profile.webp';

interface MyPageUserInfoProps {
    myPage: MyPage;
    handleClickActive: () => void;
    isLoading: boolean;
}

const MyPageUserInfo = ({ myPage, handleClickActive, isLoading }: MyPageUserInfoProps) => {
    return (
        <>
            <picture>
                <source srcSet={Profile_Webp} type="image/webp" />
                <source srcSet={Profile_Jpg} type="image/jpg" />
                <Styled.ProfileImg src={Profile_Jpg} alt="사용자 프로필 이미지" />
            </picture>
            <Styled.MyPageUserInfo>
                <Styled.MyPageUserInfoName>{myPage?.name}</Styled.MyPageUserInfoName>
                <Styled.MyPageUserInfoEmail>{myPage?.email}</Styled.MyPageUserInfoEmail>
                <Button type="button" onClick={handleClickActive} disabled={isLoading} className="mt-sm lg gray style">
                    비밀번호 변경
                </Button>
            </Styled.MyPageUserInfo>
        </>
    );
};

export default memo(MyPageUserInfo);
