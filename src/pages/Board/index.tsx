import Button from 'components/@shared/Button';
import * as Styled from './style';
import { useCallback, useState } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import RequestLists from 'components/Board/RequestLists';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { isLogin } from 'utils/auth';
import StyleLink from 'components/@shared/StyleLink';

const Board = () => {
    const loginModal = useLoginModal();
    const [query, setQuery] = useState('list');
    const [page, setPage] = useState(0);
    const isActive = query === 'mylist' ? 'active' : '';

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    const handleToggle = () => {
        setQuery(query === 'list' ? 'mylist' : 'list');
        setPage(0);
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="게시판" />
            <ContentBodyWrapper>
                <Styled.Wrapper>
                    {isLogin() ? (
                        <>
                            <div>
                                <Styled.Filter className={isActive} onClick={handleToggle}>
                                    내가 낸 문제
                                </Styled.Filter>
                            </div>
                            <StyleLink to="request" className="xl navy style">
                                게시글 작성하기
                            </StyleLink>
                        </>
                    ) : (
                        <Button className="xl navy style" onClick={loginModal.onOpen}>
                            게시글 작성하기
                        </Button>
                    )}
                </Styled.Wrapper>
                <RequestLists query={query} page={page} handlePage={handlePage} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Board;
