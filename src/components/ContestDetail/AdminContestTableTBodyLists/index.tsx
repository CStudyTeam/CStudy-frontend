import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ProblemContent } from 'types/api';
import { ProblemList } from 'types/problem';
import AdminContestTableTBodyList from '../AdminContestTableTBodyList';

interface AdminContestTableTBodyListsProps {
    filterQuestion: ProblemContent[];
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const AdminContestTableTBodyLists = ({ filterQuestion, register, errors }: AdminContestTableTBodyListsProps) => {
    return (
        <>
            {filterQuestion?.map((problem: ProblemList) => (
                <AdminContestTableTBodyList
                    key={problem.questionId}
                    problem={problem}
                    register={register}
                    errors={errors}
                />
            ))}
        </>
    );
};

export default AdminContestTableTBodyLists;
