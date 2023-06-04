import React from 'react';
import Container from 'components/@shared/Container';
import Header from '../components/@shared/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <Container>
                <Header />
                <Outlet />
            </Container>
        </div>
    );
};

export default RootLayout;
