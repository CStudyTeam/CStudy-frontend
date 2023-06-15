import * as Styled from './style';

const WorkbookQuestion = () => {
    return (
        <div>
            <Styled.PageTitle>기출 문제 A</Styled.PageTitle>
            <Styled.ContestTable cellSpacing={0}>
                <thead>
                    <tr>
                        <Styled.Th>문제번호</Styled.Th>
                        <Styled.Th>문제이름</Styled.Th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Styled.Td>1</Styled.Td>
                        <Styled.Td>1946</Styled.Td>
                    </tr>
                    <tr>
                        <Styled.Td>2</Styled.Td>
                        <Styled.Td>1905</Styled.Td>
                    </tr>
                    <tr>
                        <Styled.Td>3</Styled.Td>
                        <Styled.Td>1885</Styled.Td>
                    </tr>
                </tbody>
            </Styled.ContestTable>
        </div>
    );
};

export default WorkbookQuestion;
