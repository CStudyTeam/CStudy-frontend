import { ProblemContent } from 'types/api';
import AdminContestTableList from '../AdminContestTableList';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface AdminContestTableListsProps {
    filterQuestion: ProblemContent[];
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const AdminContestTableLists = ({ filterQuestion, register, errors }: AdminContestTableListsProps) => {
    return (
        <>
            {filterQuestion?.map((problem) => (
                <AdminContestTableList key={problem.questionId} problem={problem} register={register} errors={errors} />
            ))}
        </>
    );
};

export default AdminContestTableLists;
