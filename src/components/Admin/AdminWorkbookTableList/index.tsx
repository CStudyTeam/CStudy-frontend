import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import AdminInput from 'components/@shared/Admin/AdminInput';
import { ProblemContent } from 'types/api';
import { TBodyTd } from 'components/ProblemSet/Table/style';

interface AdminWorkbookTableListProps {
    problem: ProblemContent;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const AdminWorkbookTableList = ({ problem, register, errors }: AdminWorkbookTableListProps) => {
    const { questionId, questionTitle, categoryTitle } = problem;
    return (
        <tr>
            <TBodyTd white>
                <AdminInput
                    type="checkbox"
                    name="questionIds"
                    register={register}
                    errors={errors}
                    value={`${questionId}`}
                    required
                />
            </TBodyTd>
            <TBodyTd white className="title">
                {questionTitle}
            </TBodyTd>
            <TBodyTd white>{categoryTitle}</TBodyTd>
        </tr>
    );
};

export default AdminWorkbookTableList;
