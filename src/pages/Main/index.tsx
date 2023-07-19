import { Suspense, lazy } from 'react';
import Contents from 'components/@main/Contents';
import Skeleton from 'components/@shared/Skeleton';
import * as Styled from './style';

const Banner = lazy(() => import(/* webpackChunkName: "Banner" */ 'components/@main/Banner'));

const Main = () => {
    return (
        <Styled.MainWrapper>
            <Styled.Banner>
                <Suspense fallback={<Skeleton width="100%" height="100%" />}>
                    <Banner />
                </Suspense>
            </Styled.Banner>
            <Contents />
        </Styled.MainWrapper>
    );
};

export default Main;
