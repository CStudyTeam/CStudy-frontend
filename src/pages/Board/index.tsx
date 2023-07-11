import * as Styled from './style';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import RequestLists from 'components/Board/RequestLists';
import useBoardFilter from 'hooks/Board/useBoardFilter';
import LoginSwitchButton from 'components/Board/LoginSwitchButton';

const Board = () => {
    const { boardFilter, handlePage, handleToggle, isActive } = useBoardFilter();

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="게시판" />
            <ContentBodyWrapper>
                <Styled.Wrapper>
                    <LoginSwitchButton isActive={isActive} handleToggle={handleToggle} />
                </Styled.Wrapper>
                <RequestLists query={boardFilter.query} page={boardFilter.pageNumber} handlePage={handlePage} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Board;
