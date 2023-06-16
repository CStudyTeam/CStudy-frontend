import { Link } from 'react-router-dom';
import * as Styled from './style';

interface TableProps {
    colRate: string[];
    title: string[];
}

const Table = ({ colRate, title }: TableProps) => {
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
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
                <tr>
                    <Styled.TBodyTd>
                        <span>완료</span>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd className="title">
                        <Link to="">7Layer 문제 블라블라블라블라</Link>
                    </Styled.TBodyTd>
                    <Styled.TBodyTd>네트워크</Styled.TBodyTd>
                </tr>
            </tbody>
        </Styled.Table>
    );
};

export default Table;
