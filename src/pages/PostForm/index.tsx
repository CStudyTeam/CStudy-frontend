import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';

const PostForm = () => {
    return (
        <>
            <Styled.PageTitle>게시판</Styled.PageTitle>
            <Styled.Container>
                <Styled.TitleInput type="text" placeholder="제목을 입력해주세요" />
                <Styled.ContentInput placeholder="내용을 적어주세요" />
                <Styled.ButtonWrapper>
                    <Button
                        backgroundColor={COLOR.NAVY_200}
                        color={COLOR.WHITE}
                        width="14.5rem"
                        borderRadius="1.6rem"
                        fontSize={FONT.REGULAR_14}
                    >
                        등록하기
                    </Button>
                </Styled.ButtonWrapper>
            </Styled.Container>
        </>
    );
};

export default PostForm;
