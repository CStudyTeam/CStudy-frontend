import styled from 'styled-components';

export const MainWrapper = styled.main`
    width: 100%;
    height: 100%;
    padding: 5rem 0 12rem;
`;

export const Banner = styled.div<{ ref: React.RefObject<Element> }>`
    position: relative;
    display: flex;
    width: 100%;
    height: 67rem;
    background: linear-gradient(90deg, #e8e8e8 25%, #d8d8d8 50%, #e8e8e8 75%);
`;
