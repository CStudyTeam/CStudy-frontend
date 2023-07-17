import { PropsWithChildren } from 'react';
import * as Styled from './style';

const NoData = ({ children, ...rest }: PropsWithChildren) => {
    return <Styled.NoDataContainer {...rest}>{children}</Styled.NoDataContainer>;
};

export default NoData;