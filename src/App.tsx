import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from './pages/Root';
import Main from 'pages/Main';
import Board from 'pages/Board';
import Contest from 'pages/Contest';
import MyPage from 'pages/MyPage';
import OAuthRedirect from 'pages/OAuthRedirect';
import ProblemSet from 'pages/ProblemSet';
import Problem from 'pages/Problem';
import AdminRoot from 'pages/Admin/AdminRoot';
import CreateProblem from 'pages/Admin/CreateProblem';
import CreateContest from 'pages/Admin/CreateContest';
import CreateWorkbook from 'pages/Admin/CreateWorkbook';
import BoardRequestForm from 'pages/BoardRequestForm';
import BoardDetail from 'pages/BoardDetail';
import Workbook from 'pages/Workbook';
import WorkbookQuestion from 'pages/WorkbookQuestion';
import Modal from 'components/@shared/modal';
import SignInModal from 'components/SignModal/SignInModal';
import SignUpModal from 'components/SignModal/SignUpModal';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Main /> },
            {
                path: 'board',
                children: [
                    { index: true, element: <Board /> },
                    {
                        path: 'request',
                        element: <BoardRequestForm />,
                    },
                    {
                        path: ':requestId',
                        element: <BoardDetail />,
                    },
                ],
            },
            {
                path: 'problemset',
                children: [
                    { index: true, element: <ProblemSet /> },
                    { path: ':problemId', children: [{ index: true, element: <Problem /> }] },
                ],
            },
            {
                path: 'workbook',
                children: [
                    { index: true, element: <Workbook /> },
                    { path: ':questionId', element: <WorkbookQuestion /> },
                ],
            },
            { path: 'contest', element: <Contest /> },
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
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    return (
        <QueryClientProvider client={queryClient}>
            {loginModal.isOpen && (
                <Modal isOpenModal={loginModal.isOpen} closeModalHandler={loginModal.onClose}>
                    <SignInModal closeSignInModal={loginModal.onClose} />
                </Modal>
            )}
            {registerModal.isOpen && (
                <Modal isOpenModal={registerModal.isOpen} closeModalHandler={registerModal.onClose}>
                    <SignUpModal closeSignUpModal={registerModal.onClose} />
                </Modal>
            )}
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
};

export default App;
