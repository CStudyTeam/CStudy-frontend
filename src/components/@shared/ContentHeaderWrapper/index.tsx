import { isAdmin } from 'utils/auth';
import Button from '../Button';
import * as Styled from './style';
import { PropsWithChildren, useState, useCallback } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Input from '../Input';
import { useUpdateWorkbook } from 'hooks/@query/workbook/useUpdateWorkbook';
import StyleLink from '../StyleLink';
import ContentHeaderWrapperTitle from '../ContentHeaderWrapperTitle';

interface CreateContestProps {
    title: string;
    desc?: string;
    admin?: boolean;
    adminLink?: string;
}

const ContentHeaderWrapper = ({ title, desc, admin, adminLink, children }: PropsWithChildren<CreateContestProps>) => {
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { questionId } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>();

    const handleIsLoading = useCallback((isLoading: boolean) => {
        setIsLoading(isLoading);
    }, []);

    const handleIsActive = useCallback((isActive: boolean) => {
        setIsActive(isActive);
    }, []);

    const UpdateWorkbook = useUpdateWorkbook({ handleIsLoading, handleIsActive });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        data.id = questionId;
        UpdateWorkbook(data);
    };

    return (
        <Styled.Header>
            <div>
                {isAdmin() && admin && (
                    <Styled.AdminWrapper>
                        <Button
                            type="button"
                            className="lg navy style"
                            onClick={() => setIsActive((active) => !active)}
                        >
                            문제집 정보 수정
                        </Button>
                        {isActive && (
                            <>
                                <Button
                                    className="lg green style"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isLoading}
                                >
                                    수정하기
                                </Button>
                                <Button className="lg revert" onClick={() => setIsActive(false)} disabled={isLoading}>
                                    취소
                                </Button>
                            </>
                        )}
                    </Styled.AdminWrapper>
                )}
                {isAdmin() && adminLink && (
                    <StyleLink className="lg navy style" to="admin">
                        {adminLink}
                    </StyleLink>
                )}
                <ContentHeaderWrapperTitle isActive={isActive} title={title} register={register} errors={errors} />
                {desc && (
                    <Styled.Desc>
                        {isActive ? (
                            <Input id="description" defaultValue={desc} register={register} errors={errors} required />
                        ) : (
                            desc
                        )}
                    </Styled.Desc>
                )}
            </div>
            {children}
        </Styled.Header>
    );
};

export default ContentHeaderWrapper;
