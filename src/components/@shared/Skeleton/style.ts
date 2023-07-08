import styled from 'styled-components';

interface SkeletonLineStyleProps {
    width?: string;
    height?: string;
}

export const SkeletonLine = styled.div<SkeletonLineStyleProps>`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '1rem'};
    background: linear-gradient(90deg, #e8e8e8 25%, #d8d8d8 50%, #e8e8e8 75%);
    background-size: 200% 100%;
    animation: SkeletonLoading 1.5s infinite;

    @keyframes SkeletonLoading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;
