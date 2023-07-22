import { Outlet } from 'react-router-dom';
import Container from 'components/@shared/Container';
import Header from '../components/@shared/Header';
import Footer from 'components/@shared/Footer';
import usePlayContest from 'hooks/@zustand/usePlayContest';

const RootLayout = () => {
    const { isPlaying } = usePlayContest();
    return (
        <div>
            <Container>
                {!isPlaying && <Header />}
                <Outlet />
                <Footer />
            </Container>
        </div>
    );
};

export default RootLayout;
