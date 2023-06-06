import React from 'react';
import * as Styled from './style';
import Contents from 'components/@main/Contents';

const Main = () => {
    return (
        <Styled.MainWrapper>
            <Styled.Banner />
            <Contents />
        </Styled.MainWrapper>
    );
};

export default Main;
