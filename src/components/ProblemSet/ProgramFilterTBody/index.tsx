import React from 'react';
import { TBodyTd } from '../Table/style';
import StatusLabel from '../StatusLabel';
import { Link } from 'react-router-dom';
import { Problem } from 'types/api';
import NoData from 'components/@shared/NoData';

interface ProgramFilterTBodyProps {
    problemList: Problem;
    checkAndDisplayLoginModal: (e: React.MouseEvent) => void;
}

const ProgramFilterTBody = ({ problemList, checkAndDisplayLoginModal }: ProgramFilterTBodyProps) => {
    return (
        <>
            {problemList?.totalElements === 0 && (
                <tr>
                    <td colSpan={4}>
                        <NoData>문제풀이 문제가 없습니다.</NoData>
                    </td>
                </tr>
            )}
            {problemList?.content?.map(({ questionId, questionTitle, categoryTitle, status }, index: number) => (
                <tr key={index}>
                    <TBodyTd>{questionId}</TBodyTd>
                    <TBodyTd>
                        <StatusLabel status={status} />
                    </TBodyTd>
                    <TBodyTd className="title">
                        <Link to={`${questionId}`} onClick={checkAndDisplayLoginModal}>
                            {questionTitle}
                        </Link>
                    </TBodyTd>
                    <TBodyTd>{categoryTitle}</TBodyTd>
                </tr>
            ))}
        </>
    );
};

export default ProgramFilterTBody;
