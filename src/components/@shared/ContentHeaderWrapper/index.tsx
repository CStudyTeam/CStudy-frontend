import { isAdmin } from 'utils/auth';
import Button from '../Button';
import * as Styled from './style';
import { PropsWithChildren, useState, useEffect } from 'react';
import { COLOR } from 'constants/Color';
import { FONT } from 'constants/Font';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Input from '../Input';
import { useUpdateWorkbook } from 'hooks/@query/workbook/useUpdateWorkbook';

interface CreateContestProps {
    title: string;
    desc?: string;
    admin?: boolean;
}

const ContentHeaderWrapper = ({ title, desc, admin, children }: PropsWithChildren<CreateContestProps>) => {
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { questionId } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>();

    const UpdateWorkbook = useUpdateWorkbook({ setIsLoading, setIsActive });

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
                            backgroundColor={isActive ? COLOR.GREEN : COLOR.NAVY_200}
                            color={COLOR.WHITE}
                            width="12rem"
                            fontSize={FONT.REGULAR_14}
                            borderRadius="0.8rem"
                            onClick={() => setIsActive((active) => !active)}
                            shadow
                        >
                            문제집 정보 수정
                        </Button>
                        {isActive && (
                            <>
                                <Button
                                    backgroundColor={COLOR.NAVY_200}
                                    color={COLOR.WHITE}
                                    width="12rem"
                                    fontSize={FONT.REGULAR_14}
                                    borderRadius="0.8rem"
                                    onClick={handleSubmit(onSubmit)}
                                    disabled={isLoading}
                                    shadow
                                >
                                    수정하기
                                </Button>
                                <Button
                                    backgroundColor={COLOR.WHITE}
                                    color={COLOR.BLACK}
                                    width="12rem"
                                    fontSize={FONT.REGULAR_14}
                                    borderRadius="0.8rem"
                                    onClick={() => setIsActive(false)}
                                    disabled={isLoading}
                                    shadow
                                >
                                    취소
                                </Button>
                            </>
                        )}
                    </Styled.AdminWrapper>
                )}
                <Styled.Title>
                    {isActive ? (
                        <Input id="title" defaultValue={title} register={register} errors={errors} required />
                    ) : (
                        title
                    )}
                </Styled.Title>
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
