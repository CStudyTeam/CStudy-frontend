import { memo } from 'react';
import { ToggleRequestList } from 'types/api';
import { MyPageFilterStoreType } from 'hooks/@zustand/filterStore';
import RequestTBodyContent from '../RequestTBodyContent';
import * as Styled from './style';

interface MyPageMyBoardProps {
    requestList: ToggleRequestList;
    requestHandlePage: (page: number) => void;
    myPageFilter: MyPageFilterStoreType;
}

const MyPageMyBoard = ({ requestList, requestHandlePage, myPageFilter }: MyPageMyBoardProps) => {
    return (
        <Styled.MyPageContentWrapper>
            <Styled.MyPageLabel>나의 게시판 승인 현황</Styled.MyPageLabel>
            <Styled.MyPageTableWrapper>
                <RequestTBodyContent
                    requestList={requestList}
                    requestHandlePage={requestHandlePage}
                    myPageFilter={myPageFilter}
                />
            </Styled.MyPageTableWrapper>
        </Styled.MyPageContentWrapper>
    );
};

export default memo(MyPageMyBoard);
