import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ProblemList } from 'types/problem';
import AdminInput from 'components/@shared/Admin/AdminInput';
import { TBodyTd } from 'components/ProblemSet/Table/style';

interface AdminContestTableTBodyListProps {
    problem: ProblemList;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const AdminContestTableTBodyList = ({ problem, register, errors }: AdminContestTableTBodyListProps) => {
    const { questionId, questionTitle, categoryTitle } = problem;
    return (
        <>
            <tr>
                <TBodyTd>{questionId}</TBodyTd>
                <TBodyTd className="bold">
                    <Link to={`/problemset/${questionId}`}>{questionTitle}</Link>
                </TBodyTd>
                <TBodyTd>{categoryTitle}</TBodyTd>
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
            </tr>
        </>
    );
};

export default memo(AdminContestTableTBodyList);
