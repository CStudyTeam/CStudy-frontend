import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface AdminInputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const AdminInput = ({ id, label, type = 'text', disabled, required, register, errors }: AdminInputProps) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" />
        </div>
    );
};

export default AdminInput;
