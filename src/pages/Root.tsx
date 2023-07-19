import { Outlet } from 'react-router-dom';
import Container from 'components/@shared/Container';
import Header from '../components/@shared/Header';
import Footer from 'components/@shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Container>
                <Header />
                <Outlet />
                <Footer />
            </Container>
        </div>
    );
};

export default RootLayout;
