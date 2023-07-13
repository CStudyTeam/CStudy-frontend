import { PropsWithChildren, memo } from 'react';
import * as Styled from './style';
import { LinkProps } from 'react-router-dom';

const StyleLink = ({ children, ...rest }: PropsWithChildren<LinkProps>) => {
    return <Styled.StyleLink {...rest}>{children}</Styled.StyleLink>;
};

export default memo(StyleLink);
