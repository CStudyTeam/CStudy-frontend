import Button from 'components/@shared/Button';
import * as Styled from './style';
import { MyPage } from 'types/api';

interface MyPageUserInfoProps {
    myPage: MyPage;
    handleClickActive: () => void;
    isLoading: boolean;
}

const MyPageUserInfo = ({ myPage, handleClickActive, isLoading }: MyPageUserInfoProps) => {
    return (
        <>
            <div>
                <Styled.ProfileImg src="basic_profile.jpg" alt="사용자 프로필 이미지" />
            </div>
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

export default MyPageUserInfo;
