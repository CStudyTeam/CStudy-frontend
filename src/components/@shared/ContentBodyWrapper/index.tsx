import * as Styled from './style';
import { PropsWithChildren } from 'react';

interface ContentBodyWrapper {
    blue?: boolean;
}

const ContentBodyWrapper = ({ children, blue }: PropsWithChildren<ContentBodyWrapper>) => {
    return <Styled.Body blue={blue}>{children}</Styled.Body>;
};

export default ContentBodyWrapper;
