import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';

const Workbook = () => {
    return (
        <>
            <Styled.Head>
                <Styled.PageTitle>문제집</Styled.PageTitle>
                <div>
                    <Styled.SearchInput type="text" />
                    <Button width="5rem" backgroundColor={COLOR.NAVY_200} color="#eee">
                        검색
                    </Button>
                </div>
            </Styled.Head>
            <Styled.WorkBookCards>
                <Styled.WorkBookCard>
                    <Styled.Title>타이틀</Styled.Title>
                    <Styled.Time>2022.02.03</Styled.Time>
                    <Styled.Img>이미지</Styled.Img>
                    <Styled.Description>설명설명설명설명설명설명설명설명설명설명설명설</Styled.Description>
                </Styled.WorkBookCard>
            </Styled.WorkBookCards>
        </>
    );
};

export default Workbook;
