import useBoardFilter from 'hooks/Board/useBoardFilter';
import useGetToggleRequestList from 'hooks/@query/board/useGetRequestList';
import { ToggleRequestList } from 'types/api';

import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import RequestLists from 'components/Board/RequestLists';
import LoginSwitchButton from 'components/Board/LoginSwitchButton';
import * as Styled from './style';

const Board = () => {
    const { boardFilter, handlePage, handleToggle, isActive } = useBoardFilter();
    const requestList = useGetToggleRequestList({ page: boardFilter.pageNumber, query: boardFilter.query });

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="게시판" />
            <ContentBodyWrapper>
                <Styled.Wrapper>
                    <LoginSwitchButton isActive={isActive} handleToggle={handleToggle} />
                </Styled.Wrapper>
                <RequestLists
                    requestList={requestList as ToggleRequestList}
                    handlePage={handlePage}
                    page={boardFilter.pageNumber}
                />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Board;
