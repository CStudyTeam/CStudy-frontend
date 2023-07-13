import { WorkbookList } from 'types/api';
import WorkBookCard from '../WorkbookCard';
import * as Styled from './style';
import { memo } from 'react';

interface WorkbookCardsProps {
    workbookList: WorkbookList;
}

const WorkbookCards = ({ workbookList }: WorkbookCardsProps) => {
    return (
        <Styled.WorkBookCards>
            {workbookList?.content?.map(({ id, title, description, createdAt }) => (
                <WorkBookCard key={id} id={id} title={title} description={description} createdAt={createdAt} />
            ))}
        </Styled.WorkBookCards>
    );
};

export default memo(WorkbookCards);
