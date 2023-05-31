import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
