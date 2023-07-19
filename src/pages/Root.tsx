import React from 'react';
import Container from 'components/@shared/Container';
import Header from '../components/@shared/Header';
import { Outlet } from 'react-router-dom';
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
