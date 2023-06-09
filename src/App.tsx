import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Root';
import Main from 'pages/Main';
import Board from 'pages/Board';
import ProblemSet from 'pages/ProblemSet';
import Contest from 'pages/Contest';
import Workbook from 'pages/Workbook';
import MyPage from 'pages/MyPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Main /> },
            { path: 'board', element: <Board /> },
            { path: 'problemset', element: <ProblemSet /> },
            { path: 'contest', element: <Contest /> },
            { path: 'workbook', element: <Workbook /> },
            { path: 'mypage', element: <MyPage /> },
        ],
    },
    {
        path: '/admin',
        children: [{ index: true, element: <RootLayout /> }],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
