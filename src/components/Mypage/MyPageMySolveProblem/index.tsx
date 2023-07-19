import { memo } from 'react';
import { MyPageFilterStoreType } from 'hooks/@zustand/filterStore';
import { Problem } from 'types/api';
import ProblemTBodyContent from '../ProblemTBodyContent';
import * as Styled from './style';

interface MyPageMySolveProblemProps {
    problemList: Problem;
    handlePage: (page: number) => void;
    myPageFilter: MyPageFilterStoreType;
}

const MyPageMySolveProblem = ({ problemList, handlePage, myPageFilter }: MyPageMySolveProblemProps) => {
    return (
        <Styled.MyPageContentWrapper>
            <Styled.MyPageLabel>내가 풀은 문제</Styled.MyPageLabel>
            <Styled.MyPageTableWrapper>
                <ProblemTBodyContent problemList={problemList} handlePage={handlePage} myPageFilter={myPageFilter} />
            </Styled.MyPageTableWrapper>
        </Styled.MyPageContentWrapper>
    );
};

export default memo(MyPageMySolveProblem);
