import { WorkbookQuestionContent } from 'types/api';
import WorkbookQuestionTableList from '../WorkbookQuestionTableList';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface WorkbookQuestionTableListsProps {
    workbookContent: WorkbookQuestionContent[];
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const WorkbookQuestionTableLists = ({ workbookContent, register, errors }: WorkbookQuestionTableListsProps) => {
    return (
        <>
            {workbookContent?.map((content) => (
                <WorkbookQuestionTableList
                    key={content.questionId}
                    content={content}
                    register={register}
                    errors={errors}
                />
            ))}
        </>
    );
};

export default WorkbookQuestionTableLists;
