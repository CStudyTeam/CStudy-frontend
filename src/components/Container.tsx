import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 120rem;
    margin: 0 auto;
`;

const Container = ({ children }: React.PropsWithChildren) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Container;
