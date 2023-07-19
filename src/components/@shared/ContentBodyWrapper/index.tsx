import { PropsWithChildren } from 'react';
import * as Styled from './style';

interface ContentBodyWrapper {
    blue?: boolean;
}

const ContentBodyWrapper = ({ children, blue }: PropsWithChildren<ContentBodyWrapper>) => {
    return <Styled.Body blue={blue}>{children}</Styled.Body>;
};

export default ContentBodyWrapper;
