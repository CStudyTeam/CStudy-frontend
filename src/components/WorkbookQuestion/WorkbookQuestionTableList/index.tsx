import AdminInput from 'components/@shared/Admin/AdminInput';
import StyleLink from 'components/@shared/StyleLink';
import { TBodyTd } from 'components/ProblemSet/Table/style';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { WorkbookQuestionContent } from 'types/api';
import { isAdmin } from 'utils/auth';

interface WorkbookQuestionTableListProps {
    content: WorkbookQuestionContent;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const WorkbookQuestionTableList = ({ content, register, errors }: WorkbookQuestionTableListProps) => {
    const { questionId, title } = content;
    return (
        <tr>
            <TBodyTd>{questionId}</TBodyTd>
            <TBodyTd className="bold">
                <StyleLink to={`/problemset/${questionId}`}>{title}</StyleLink>
            </TBodyTd>
            {isAdmin() && (
                <TBodyTd>
                    <AdminInput
                        type="checkbox"
                        name="questionIds"
                        register={register}
                        errors={errors}
                        value={`${questionId}`}
                        required
                    />
                </TBodyTd>
            )}
        </tr>
    );
};

export default WorkbookQuestionTableList;
