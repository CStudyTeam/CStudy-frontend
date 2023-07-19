import { ImGithub } from '@react-icons/all-files/im/ImGithub';
import { memo } from 'react';
import * as Styled from './style';

const Footer = () => {
    return (
        <Styled.FooterWrapper>
            <Styled.CopyWrite>Copyright 2023. Cs;tudy All rights reserved </Styled.CopyWrite>
            <a href="https://github.com/orgs/CStudyTeam/repositories" target="_blank" rel="noopener noreferrer">
                <ImGithub size={40} />
            </a>
        </Styled.FooterWrapper>
    );
};

export default memo(Footer);
