import { memo } from 'react';
import StyleLink from 'components/@shared/StyleLink';
import { TBodyTd } from 'components/ProblemSet/Table/style';
import { ContestContent } from 'types/api';

interface ContestListTableListProps {
    listData: ContestContent;
    isActive: boolean;
    checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
}

const ContestListTableList = ({ listData, isActive, checkAndDisplayLoginModal }: ContestListTableListProps) => {
    const { id, title, participants, startTime, endTime } = listData;
    return (
        <tr key={id}>
            <TBodyTd className="bold">
                <StyleLink className="bold fs--xl" to={`${id}`} state={!!isActive} onClick={checkAndDisplayLoginModal}>
                    {title}
                </StyleLink>
            </TBodyTd>
            <TBodyTd>{participants}</TBodyTd>
            <TBodyTd>
                {startTime.split(' ')[0]} ~ {endTime.split(' ')[0]}
            </TBodyTd>
        </tr>
    );
};

export default memo(ContestListTableList);
