import Button from 'components/@shared/Button';
import * as Styled from './style';
import { useCallback, useState } from 'react';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { Link } from 'react-router-dom';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import RequestLists from 'components/Board/RequestLists';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import { isLogin } from 'utils/auth';

const Board = () => {
    const loginModal = useLoginModal();
    const [query, setQuery] = useState('list');
    const [page, setPage] = useState(0);
    const isActive = query === 'mylist' ? 'active' : '';

    const handlePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    const handleToggle = useCallback(() => {
        setQuery(query === 'list' ? 'mylist' : 'list');
        setPage(0);
    }, [query]);

    const buttonProps = {
        backgroundColor: COLOR.NAVY_200,
        color: COLOR.WHITE,
        width: '13rem',
        fontSize: FONT.REGULAR_14,
        weight: 'bold',
        borderRadius: '1.6rem',
    };

    const writeButton = <Button {...buttonProps}>글쓰기</Button>;

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
                            <Link to="request">{writeButton}</Link>
                        </>
                    ) : (
                        <Button {...buttonProps} onClick={loginModal.onOpen}>
                            글쓰기
                        </Button>
                    )}
                </Styled.Wrapper>
                <RequestLists query={query} page={page} handlePage={handlePage} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Board;
