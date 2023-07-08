import * as Styled from './style';

interface SkeletonProps {
    width?: string;
    height?: string;
}

const Skeleton = ({ width, height }: SkeletonProps) => {
    return <Styled.SkeletonLine width={width} height={height} />;
};

export default Skeleton;
