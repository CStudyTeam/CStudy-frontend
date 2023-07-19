import { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import * as Styled from './style';

const StyleLink = ({ children, ...rest }: PropsWithChildren<LinkProps>) => {
    return <Styled.StyleLink {...rest}>{children}</Styled.StyleLink>;
};

export default StyleLink;
