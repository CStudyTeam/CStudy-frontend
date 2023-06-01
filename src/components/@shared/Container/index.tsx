import React from 'react';
import * as Styled from './style';

const Container = ({ children }: React.PropsWithChildren) => {
    return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Container;
