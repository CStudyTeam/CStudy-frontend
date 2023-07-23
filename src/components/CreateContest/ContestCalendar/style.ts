import styled from 'styled-components';
import { FONT } from 'constants/Font';
import { SHADOW } from 'constants/Shadow';

export const CustomCalendarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    .react-calendar {
        margin: 1rem;
        padding: 1.5rem;
        border: 0.1rem solid #ccc;
        border-radius: 1.2rem;
        box-shadow: ${SHADOW.CONTENTBOX_LG};
    }

    .react-calendar__navigation__label__labelText {
        font-size: 1.3em;
        font-weight: bold;
        color: #0066cc;
    }

    .react-calendar__tile--active {
        border-radius: 100%;
    }

    .react-calendar__month-view__days__day--weekend:not(:nth-child(7n)):not(
            .react-calendar__month-view__days__day--neighboringMonth
        ) {
        color: #0066cc;
    }

    .react-calendar__month-view__days__day--weekend:not(:nth-child(7n)):not(
            .react-calendar__month-view__days__day--neighboringMonth
        ).react-calendar__tile--active {
        color: white;
    }

    .react-calendar__tile--now {
        border-radius: 100%;
    }
`;

export const CalendarField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CalendarLabel = styled.p`
    ${FONT.BOLD_18}
`;
