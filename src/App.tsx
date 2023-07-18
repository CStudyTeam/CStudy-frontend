import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootLayout from './pages/Root';
import OAuthRedirect from 'pages/OAuthRedirect';
import Modal from 'components/@shared/modal';
import SignInModal from 'components/SignModal/SignInModal';
import SignUpModal from 'components/SignModal/SignUpModal';
import useLoginModal from 'hooks/@zustand/useLoginModal';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';
import { checkAdminLoader, checkAuthLoader } from 'utils/auth';
import Main from 'pages/Main';
import Problem from 'pages/Problem';
import ContestDetail from 'pages/ContestDetail';
import ContestProblemAdd from 'pages/Admin/ContestProblemAdd';
import ContestProblem from 'pages/ContestProblem';
import WorkbookQuestion from 'pages/WorkbookQuestion';
import WorkbookProblemAdd from 'pages/Admin/WorkbookProblemAdd';
import BoardRequestForm from 'pages/BoardRequestForm';
import BoardDetail from 'pages/BoardDetail';
import CreateProblem from 'pages/Admin/CreateProblem';
import Board from 'pages/Board';
import ProblemSet from 'pages/ProblemSet';
import Workbook from 'pages/Workbook';
import CreateWorkbook from 'pages/Admin/CreateWorkbook';
import Contest from 'pages/Contest';
import CreateContest from 'pages/Admin/CreateContest';
import ContestResult from 'pages/ContestResult';
import MembersRanks from 'pages/MembersRanks';
import MyPage from 'pages/MyPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: 'board',
                children: [
                    {
                        index: true,
                        element: <Board />,
                    },
                    {
                        path: 'request',
                        loader: checkAuthLoader,
                        element: <BoardRequestForm />,
                    },
                    {
                        path: ':requestId',
                        loader: checkAuthLoader,
                        element: <BoardDetail />,
                    },
                ],
            },
            {
                path: 'problemset',
                children: [
                    {
                        index: true,
                        element: <ProblemSet />,
                    },
                    {
                        path: 'admin',
                        loader: checkAdminLoader,
                        element: <CreateProblem />,
                    },
                    {
                        path: ':problemId',
                        loader: checkAuthLoader,
                        children: [
                            {
                                index: true,
                                element: <Problem />,
                            },
                        ],
                    },
                ],
            },
            {
                path: 'workbook',
                children: [
                    {
                        index: true,
                        element: <Workbook />,
                    },
                    {
                        path: 'admin',
                        loader: checkAdminLoader,
                        element: <CreateWorkbook />,
                    },
                    {
                        path: ':questionId',
                        loader: checkAuthLoader,
                        children: [
                            { index: true, element: <WorkbookQuestion /> },
                            { path: 'adminadd', element: <WorkbookProblemAdd />, loader: checkAdminLoader },
                        ],
                    },
                ],
            },
            {
                path: 'contest',
                children: [
                    {
                        index: true,
                        element: <Contest />,
                    },
                    {
                        path: 'admin',
                        loader: checkAdminLoader,
                        element: <CreateContest />,
                    },
                    {
                        path: ':contestId',
                        loader: checkAuthLoader,
                        children: [
                            { index: true, element: <ContestDetail /> },
                            { path: 'adminadd', element: <ContestProblemAdd /> },
                            { path: 'contestproblem', element: <ContestProblem /> },
                            { path: 'contestresult', element: <ContestResult /> },
                        ],
                    },
                ],
            },
            {
                path: 'membersranks',
                children: [
                    {
                        index: true,
                        element: <MembersRanks />,
                    },
                ],
            },
            {
                path: 'mypage',
                loader: checkAuthLoader,
                children: [
                    {
                        index: true,
                        element: <MyPage />,
                    },
                ],
            },
            { path: 'oauth2/login', element: <OAuthRedirect /> },
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
