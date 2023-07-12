import { useState } from 'react';
import Button from 'components/@shared/Button';
import StyleLink from 'components/@shared/StyleLink';
import { useWorkbookQuestionDelete } from 'hooks/@query/workbook/useWorkbookQuestionDelete';
import { FieldValues, SubmitHandler, UseFormHandleSubmit, UseFormReset } from 'react-hook-form';
import { isAdmin } from 'utils/auth';

interface WorkbookQuestionAdminOptionGroupProps {
    questionId: string;
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    reset: UseFormReset<FieldValues>;
}

const WorkbookQuestionAdminOptionGroup = ({
    questionId,
    handleSubmit,
    reset,
}: WorkbookQuestionAdminOptionGroupProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const WorkbookQuestionDelete = useWorkbookQuestionDelete({ setIsLoading });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const isArray = Array.isArray(data.questionIds);
        const customQuestionIds = isArray
            ? data.questionIds.map((questionId: (string | number)[]) => ({ id: +questionId }))
            : (data.questionIds = [{ id: +data.questionIds }]);

        const formData = {
            workbookId: parseInt(questionId as string),
            questionIds: customQuestionIds,
        };

        WorkbookQuestionDelete(formData);
        reset();
    };
    return (
        <>
            {isAdmin() && (
                <>
                    <StyleLink to="adminadd" className="navy xl style">
                        문제 추가하기
                    </StyleLink>
                    <Button className="revert--red xl style" onClick={handleSubmit(onSubmit)} disabled={isLoading}>
                        문제 삭제하기
                    </Button>
                </>
            )}
        </>
    );
};

export default WorkbookQuestionAdminOptionGroup;
