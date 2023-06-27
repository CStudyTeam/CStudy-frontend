import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';
import Calendar from 'react-calendar';
import { BsChevronDoubleRight } from 'react-icons/bs';

import { useState } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import AdminContentHeaderWrapper from 'components/@shared/Admin/AdminContentHeaderWrapper';
import AdminContentBodyWrapper from 'components/@shared/Admin/AdminContentBodyWrapper';
import Button from 'components/@shared/Button';
import AdminInput from 'components/@shared/Admin/AdminInput';

import * as Styled from './style';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { FormBody } from 'components/@shared/Admin/FormBody/style';
import FormSection from 'components/@shared/Admin/FormSection';
import { useContestSet } from 'hooks/@query/contestset/useContestSet';

const CreateContest = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [changeValue, setChangeValue] = useState<Date | null>(new Date());

    const { mutate: ContestSet } = useContestSet({ setIsLoading });

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            competitionTitle: '',
            participants: '',
            competitionStart: new Date(),
            competitionEnd: new Date(),
        },
    });

    const customSetValue = (id: string, value: Date) => {
        setValue(id, value);
        setChangeValue(value);
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        ContestSet(data);
    };

    return (
        <ContentContainer>
            <AdminContentHeaderWrapper title="대회생성" />
            <AdminContentBodyWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormBody>
                        <FormSection title="대회 이름을 설정해 주세요">
                            <AdminInput
                                id="competitionTitle"
                                name="competitionTitle"
                                label="대회 이름"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                                required
                            />
                        </FormSection>
                        <FormSection title="대회 참가 인원을 설정해 주세요">
                            <AdminInput
                                id="participants"
                                type="number"
                                name="participants"
                                label="참여 가능한 최대 인원 수"
                                register={register}
                                errors={errors}
                                disabled={isLoading}
                                required
                            />
                        </FormSection>
                        <FormSection title="대회 일정을 설정해 주세요" subtitle="시작일과 종료일을 선택해주세요">
                            <Styled.CustomCalendarContainer>
                                <Styled.CalendarField>
                                    <Styled.CalendarLabel>대회 시작일</Styled.CalendarLabel>
                                    <Calendar
                                        onChange={(value) => customSetValue('competitionStart', value as Date)}
                                        value={changeValue}
                                    />
                                </Styled.CalendarField>
                                <BsChevronDoubleRight size={60} color={COLOR.NAVY_200} />
                                <Styled.CalendarField>
                                    <Styled.CalendarLabel>대회 종료일</Styled.CalendarLabel>
                                    <Calendar
                                        onChange={(value) => customSetValue('competitionEnd', value as Date)}
                                        value={changeValue}
                                    />
                                </Styled.CalendarField>
                            </Styled.CustomCalendarContainer>
                        </FormSection>
                        <Button
                            type="submit"
                            width="16rem"
                            fontSize={FONT.REGULAR_16}
                            backgroundColor={COLOR.NAVY_200}
                            color={COLOR.WHITE}
                            margin="2rem 0 0 0"
                            disabled={isLoading}
                        >
                            대회 등록하기
                        </Button>
                    </FormBody>
                </Form>
            </AdminContentBodyWrapper>
        </ContentContainer>
    );
};

export default CreateContest;
