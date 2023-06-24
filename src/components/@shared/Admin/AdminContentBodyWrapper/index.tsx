import * as Styled from './style';
import { PropsWithChildren } from 'react';

const AdminContentBodyWrapper = ({ children }: PropsWithChildren) => {
    return <Styled.Body>{children}</Styled.Body>;
};

export default AdminContentBodyWrapper;
