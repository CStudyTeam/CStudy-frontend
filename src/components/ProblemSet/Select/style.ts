import styled from 'styled-components';
import { COLOR } from 'constants/Color';

export const SelectBox = styled.div`
    position: relative;
    min-width: 19rem;
    height: 4.5rem;
    border-radius: 1.6rem;
    border: 1px solid ${COLOR.WHITE};
    background: url('filterArrow.png') calc(100% - 1.2rem) center no-repeat;
    background-size: 1rem;
    background-color: ${COLOR.NAVY_100};
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.1), inset 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.12);
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 0.1rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 3.5rem;
        background: ${COLOR.WHITE};
    }

    &.active {
        .optionList {
            max-height: 50rem;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    width: inherit;
    height: inherit;
    padding-left: 1.5rem;
    cursor: pointer;
`;

export const OptionList = styled.ul`
    position: absolute;
    top: 5rem;
    left: 0;
    width: 100%;
    background: lightcoral;
    color: #fff;
    list-style-type: none;
    padding: 0;
    border-radius: 0.6rem;
    overflow: hidden;
    max-height: 0;
    transition: all 0.3s ease-in;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #303030;
        border-radius: 4.5rem;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #303030;
    }
`;

export const OptionItem = styled.li`
    background: ${COLOR.NAVY_100};
    border-bottom: 0.1rem dashed ${COLOR.GRAY_100};
    padding: 0.5rem 1.5rem 0.5rem;
    color: ${COLOR.BLACK};

    &:hover {
        background: ${COLOR.NAVY_200};
        color: ${COLOR.WHITE};
    }

    &:last-child {
        border-bottom: 0 none;
    }
`;
