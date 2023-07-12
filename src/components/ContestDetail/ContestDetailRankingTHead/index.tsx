import * as Styled from './style';

const ContestDetailRankingTHead = () => {
    const columns = [
        { field: 'name', headerName: '이름' },
        { field: 'score', headerName: '점수(맞은 개수/총개수)' },
        { field: 'endTime', headerName: '끝난 시간' },
    ];
    return (
        <Styled.StyledThead>
            <Styled.StyledTr>
                {columns.map((column) => (
                    <Styled.StyledTh key={column.field}>{column.headerName}</Styled.StyledTh>
                ))}
            </Styled.StyledTr>
        </Styled.StyledThead>
    );
};

export default ContestDetailRankingTHead;
