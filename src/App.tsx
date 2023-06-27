import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from './pages/Root';
import Main from 'pages/Main';
import Board from 'pages/Board';
import Contest from 'pages/Contest';
import MyPage from 'pages/MyPage';
import OAuthRedirect from 'pages/OAuthRedirect';
import Question from 'pages/Question';
import ProblemSet from 'pages/ProblemSet';
import Problem from 'pages/Problem';
import AdminRoot from 'pages/Admin/AdminRoot';
import CreateProblem from 'pages/Admin/CreateProblem';
import CreateContest from 'pages/Admin/CreateContest';
import CreateWorkbook from 'pages/Admin/CreateWorkbook';
import QuestionRequestForm from 'pages/QuestionRequestForm';
import BoardDetail from 'pages/BoardDetail';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Main /> },
            { path: 'board', element: <Board /> },
            {
                path: 'problemset',
                children: [
                    { index: true, element: <ProblemSet /> },
                    { path: ':problemId', children: [{ index: true, element: <Problem /> }] },
                ],
            },
            { path: 'board/:requestId', element: <BoardDetail /> },
            { path: 'board/request', element: <QuestionRequestForm /> },
            { path: 'problemset', element: <ProblemSet /> },
            { path: 'contest', element: <Contest /> },
            { path: 'question', element: <Question /> },
            { path: 'mypage', element: <MyPage /> },
            { path: 'oauth2/login', element: <OAuthRedirect /> },
        ],
    },
    {
        path: '/admin',
        element: <AdminRoot />,
        children: [
            { path: 'CreateProblem', element: <CreateProblem /> },
            { path: 'CreateWorkbook', element: <CreateWorkbook /> },
            { path: 'CreateContest', element: <CreateContest /> },
        ],
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
