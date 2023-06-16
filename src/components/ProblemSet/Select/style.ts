import styled from 'styled-components';
import { COLOR } from 'constants/Color';

export const SelectBox = styled.div`
    position: relative;
    width: 19rem;
    height: 4.5rem;
    border-radius: 1.6rem;
    border: 1px solid ${COLOR.NAVY_200};
    background: url('filterArrow.png') calc(100% - 1.2rem) center no-repeat;
    background-size: 1rem;
    background-color: ${COLOR.NAVY_100};
    cursor: pointer;

    &::after {
        content: '';
        display: block;
        width: 0.1rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 3.5rem;
        background: ${COLOR.NAVY_200};
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
        border-radius: 45px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #303030;
    }
`;

export const OptionItem = styled.li`
    background: ${COLOR.NAVY_100};
    border-bottom: 1px dashed ${COLOR.GRAY};
    padding: 0.5rem 1.5rem 0.5rem;
    color: ${COLOR.BLACK};
    transition: all 0.1s linear;

    &:hover {
        background: ${COLOR.NAVY_200};
        color: ${COLOR.WHITE};
    }

    &:last-child {
        border-bottom: 0 none;
    }
`;
