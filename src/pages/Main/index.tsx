import { Suspense, lazy, useRef, useCallback, useState } from 'react';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Contents from 'components/@main/Contents';
import Skeleton from 'components/@shared/Skeleton';
import * as Styled from './style';

const Banner = lazy(() => import(/* webpackChunkName: "Banner" */ 'components/@main/Banner'));

const Main = () => {
    const [hasViewModel, setHasViewModel] = useState(false);
    const handleOutOfView = useCallback(() => {
        setHasViewModel(false);
    }, []);

    const handleInView = useCallback(() => {
        setHasViewModel(true);
    }, []);

    const targetRef = useRef<HTMLDivElement>(null);

    useIntersectionObserver({ targetRef, handleOutOfView, handleInView, options: { threshold: 0.3 } });

    return (
        <Styled.MainWrapper>
            <Styled.Banner ref={targetRef}>
                <Suspense fallback={<Skeleton width="100%" height="100%" />}>
                    <Banner hasViewModel={hasViewModel} />
                </Suspense>
            </Styled.Banner>
            <Contents />
        </Styled.MainWrapper>
    );
};

export default Main;
