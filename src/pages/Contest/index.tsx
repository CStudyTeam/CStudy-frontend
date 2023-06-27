import * as Styled from './style';

const Contest = () => {
    return (
        <>
            <Styled.PageTitle>대회</Styled.PageTitle>
            <Styled.Container>
                <Styled.ContestTable cellSpacing={0}>
                    <thead>
                        <tr>
                            <Styled.ContestTh>대회명</Styled.ContestTh>
                            <Styled.ContestTh>기간</Styled.ContestTh>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Styled.Name>문제 이름 문제 이름</Styled.Name>
                            <Styled.Period>2023.03.02~2023.05.05</Styled.Period>
                        </tr>
                        <tr>
                            <Styled.Name>문제 이름 문제 이름</Styled.Name>
                            <Styled.Period>2023.03.02~2023.05.05</Styled.Period>
                        </tr>
                        <tr>
                            <Styled.Name>문제 이름 문제 이름</Styled.Name>
                            <Styled.Period>2023.03.02~2023.05.05</Styled.Period>
                        </tr>
                        <tr>
                            <Styled.Name>문제 이름 문제 이름</Styled.Name>
                            <Styled.Period>2023.03.02~2023.05.05</Styled.Period>
                        </tr>
                        <tr>
                            <Styled.Name>문제 이름 문제 이름</Styled.Name>
                            <Styled.Period>2023.03.02~2023.05.05</Styled.Period>
                        </tr>
                        <tr>
                            <Styled.Name>문제 이름 문제 이름</Styled.Name>
                            <Styled.Period>2023.03.02~2023.05.05</Styled.Period>
                        </tr>
                        <tr>
                            <Styled.Name>문제 이름 문제 이름</Styled.Name>
                            <Styled.Period>2023.03.02~2023.05.05</Styled.Period>
                        </tr>
                        <Styled.Pagination>
                            <td colSpan={2}>페이지네이션</td>
                        </Styled.Pagination>
                    </tbody>
                </Styled.ContestTable>
                <Styled.Aside>
                    <Styled.Title>랭킹</Styled.Title>
                    <Styled.UserName>
                        <span>세리</span>
                        <span>님</span>
                    </Styled.UserName>
                    <Styled.ProfileImg></Styled.ProfileImg>
                    <Styled.UserRanking>3등</Styled.UserRanking>
                    <Styled.RankingTable cellSpacing={0}>
                        <thead>
                            <tr>
                                <Styled.RankingTh>순위</Styled.RankingTh>
                                <Styled.RankingTh>닉네임</Styled.RankingTh>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1등</td>
                                <td>1946</td>
                            </tr>
                            <tr>
                                <td>1등</td>
                                <td>1905</td>
                            </tr>
                            <tr>
                                <td>1등</td>
                                <td>1885</td>
                            </tr>
                            <tr>
                                <td>1등</td>
                                <td>1885</td>
                            </tr>
                            <tr>
                                <td>1등</td>
                                <td>1885</td>
                            </tr>
                            <tr>
                                <td>1등</td>
                                <td>1885</td>
                            </tr>
                        </tbody>
                    </Styled.RankingTable>
                </Styled.Aside>
            </Styled.Container>
        </>
    );
};

export default Contest;
