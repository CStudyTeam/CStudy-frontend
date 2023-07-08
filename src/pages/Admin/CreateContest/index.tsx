import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import { BsChevronDoubleRight } from 'react-icons/bs';

import { useState } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import Button from 'components/@shared/Button';
import AdminInput from 'components/@shared/Admin/AdminInput';

import * as Styled from './style';
import { FONT } from 'constants/Font';
import { COLOR } from 'constants/Color';
import { FormBody } from 'components/@shared/Admin/FormBody/style';
import FormSection from 'components/@shared/Admin/FormSection';
import { useContestSet } from 'hooks/@query/contest/useContestSet';
import { ContestSetForm } from 'types/Form';
import formatDate from 'utils/formatDate';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';

const CreateContest = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [defaultValue] = useState<Date | null>(new Date());

    const ContestSet = useContestSet({ setIsLoading });

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
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        data.competitionStart = formatDate(data.competitionStart);
        data.competitionEnd = formatDate(data.competitionEnd, { endOfDay: true });
        ContestSet(data as ContestSetForm);
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="대회생성" />
            <ContentBodyWrapper>
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
                        <FormSection
                            title="대회 일정을 설정해 주세요"
                            subtitle="시작일과 종료일을 선택해주세요 (설정을 안했을 경우 당일로 처리됩니다)"
                        >
                            <Styled.CustomCalendarContainer>
                                <Styled.CalendarField>
                                    <Styled.CalendarLabel>대회 시작일</Styled.CalendarLabel>
                                    <Calendar
                                        onChange={(value) => customSetValue('competitionStart', value as Date)}
                                        defaultValue={defaultValue}
                                        minDate={new Date()}
                                    />
                                </Styled.CalendarField>
                                <BsChevronDoubleRight size={60} color={COLOR.NAVY_200} />
                                <Styled.CalendarField>
                                    <Styled.CalendarLabel>대회 종료일</Styled.CalendarLabel>
                                    <Calendar
                                        onChange={(value) => customSetValue('competitionEnd', value as Date)}
                                        defaultValue={defaultValue}
                                        minDate={new Date()}
                                    />
                                </Styled.CalendarField>
                            </Styled.CustomCalendarContainer>
                        </FormSection>
                        <Button type="submit" className="mt xl navy style" disabled={isLoading}>
                            대회 등록하기
                        </Button>
                        <Button type="button" className="gray style mt ml xl2" onClick={() => navigate(-1)}>
                            돌아가기
                        </Button>
                    </FormBody>
                </Form>
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default CreateContest;
