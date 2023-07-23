import { useState, memo } from 'react';
import Calendar from 'react-calendar';
import { COLOR } from 'constants/Color';
import { BsChevronDoubleRight } from '@react-icons/all-files/bs/BsChevronDoubleRight';
import * as Styled from './style';

interface ContestCalendarProps {
    customSetValue: (id: string, value: Date) => void;
}

const ContestCalendar = ({ customSetValue }: ContestCalendarProps) => {
    const [defaultValue] = useState<Date | null>(new Date());

    return (
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
    );
};

export default memo(ContestCalendar);
