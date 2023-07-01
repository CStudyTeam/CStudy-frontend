import * as Styled from './style';

interface ProblemFooterProps {
    explain: string;
}

const ProblemFooter = ({ explain }: ProblemFooterProps) => {
    return (
        <Styled.Footer>
            <Styled.FooterComment>해설</Styled.FooterComment>
            <Styled.FooterCommentDesc>{explain}</Styled.FooterCommentDesc>
        </Styled.Footer>
    );
};

export default ProblemFooter;
