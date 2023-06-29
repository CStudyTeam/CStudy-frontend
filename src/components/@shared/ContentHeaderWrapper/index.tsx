import * as Styled from './style';
import { PropsWithChildren } from 'react';

interface CreateContestProps {
    title: string;
}

const ContentHeaderWrapper = ({ title, children }: PropsWithChildren<CreateContestProps>) => {
    return (
        <Styled.Header>
            <Styled.Title>{title}</Styled.Title>
            {children}
        </Styled.Header>
    );
};

export default ContentHeaderWrapper;
