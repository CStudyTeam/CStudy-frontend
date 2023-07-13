import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import ProblemForm from 'components/CreateProblem/ProblemForm';

interface AdminWorkbookTableListsProps {
    problemForms: { id: number; titleNumber: number; basicInfoNumber: number; contentNumber: number[] }[];
    isLoading: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

const AdminProblemForms = ({ problemForms, isLoading, register, errors }: AdminWorkbookTableListsProps) => {
    return (
        <>
            {problemForms.map((form) => (
                <ProblemForm key={form.id} form={form} isLoading={isLoading} register={register} errors={errors} />
            ))}
        </>
    );
};

export default AdminProblemForms;
