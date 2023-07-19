import { memo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import AdminContestTableList from '../AdminContestTableList';
import { ProblemContent } from 'types/api';

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

export default memo(AdminContestTableLists);
