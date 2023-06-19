import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from './pages/Root';
import Main from 'pages/Main';
import Board from 'pages/Board';
import ProblemSet from 'pages/ProblemSet';
import Contest from 'pages/Contest';
import Workbook from 'pages/Workbook';
import MyPage from 'pages/MyPage';
import OAuthRedirect from 'pages/OAuthRedirect';
import QuestionRequestForm from 'pages/QuestionRequestForm';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Main /> },
            { path: 'board', element: <Board /> },
            { path: 'board/request', element: <QuestionRequestForm /> },
            { path: 'problemset', element: <ProblemSet /> },
            { path: 'contest', element: <Contest /> },
            { path: 'workbook', element: <Workbook /> },
            { path: 'mypage', element: <MyPage /> },
            { path: 'oauth2/login', element: <OAuthRedirect /> },
        ],
    },
    {
        path: '/admin',
        children: [{ index: true, element: <RootLayout /> }],
    },
]);

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
