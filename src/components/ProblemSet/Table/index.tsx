import { PropsWithChildren } from 'react';
import * as Styled from './style';

interface TableProps {
    colRate: string[];
    title: string[];
    white?: boolean;
    maxHeight?: boolean;
    narrow?: boolean;
}

const Table = ({ colRate, title, maxHeight, children, white, narrow }: PropsWithChildren<TableProps>) => {
    return (
        <Styled.Table cellSpacing={0} white={white} maxHeight={maxHeight} narrow={narrow}>
            <colgroup>
                {colRate?.map((rate, index) => (
                    <col width={rate} key={index} />
                ))}
            </colgroup>
            <thead>
                <tr>
                    {title?.map((t, index) => (
                        <Styled.THeadTh narrow={narrow} key={index}>
                            {t}
                        </Styled.THeadTh>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </Styled.Table>
    );
};

export default Table;
