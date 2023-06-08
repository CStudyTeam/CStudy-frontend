import * as Styled from './style';
import Contents from 'components/@main/Contents';
import Banner from 'components/@main/Banner';

const Main = () => {
    return (
        <Styled.MainWrapper>
            <Styled.Banner>
                <Banner />
            </Styled.Banner>
            <Contents />
        </Styled.MainWrapper>
    );
};

export default Main;
