import { Link } from 'react-router-dom';
import * as Styled from './style';

interface TableProps {
    colRate: string[];
    title: string[];
    content?: [];
}

const Table = ({ colRate, title, content }: TableProps) => {
    return (
        <Styled.Table cellSpacing={0}>
            <colgroup>
                {colRate.map((rate, index) => (
                    <col width={rate} key={index} />
                ))}
            </colgroup>
            <thead>
                <tr>
                    {title.map((t, index) => (
                        <Styled.THeadTh key={index}>{t}</Styled.THeadTh>
                    ))}
                </tr>
            </thead>
            <tbody>
                {content?.map(({ questionId, questionTitle, categoryTitle, questionSuccess }, index) => (
                    <tr key={index}>
                        <Styled.TBodyTd>
                            {questionSuccess ? (
                                <span className="success">완료</span>
                            ) : (
                                <span className="failed">실패</span>
                            )}
                        </Styled.TBodyTd>
                        <Styled.TBodyTd className="title">
                            <Link to={`${questionId}`}>{questionTitle}</Link>
                        </Styled.TBodyTd>
                        <Styled.TBodyTd>{categoryTitle}</Styled.TBodyTd>
                    </tr>
                ))}
            </tbody>
        </Styled.Table>
    );
};

export default Table;
