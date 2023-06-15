import Button from 'components/@shared/Button';
import * as Styled from './style';
import { COLOR } from 'constants/Color';
import { Link } from 'react-router-dom';
import { ROUTE } from 'constants/Route';
import useGetWorkbookList from 'hooks/@query/workbookList/useGetWorkbookList';

const Workbook = () => {
    const workbookList = useGetWorkbookList();

    const id = 1;

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
                    <Link to={`${ROUTE.WORKBOOK_QUESTION}/${id}`}>
                        <Styled.Title>타이틀</Styled.Title>
                        <Styled.Time>2022.02.03</Styled.Time>
                        <Styled.Img>이미지</Styled.Img>
                        <Styled.Description>설명설명설명설명설명설명설명설명설명설명설명설</Styled.Description>
                    </Link>
                </Styled.WorkBookCard>
            </Styled.WorkBookCards>
        </>
    );
};

export default Workbook;
