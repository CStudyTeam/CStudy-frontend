import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import useLoginModal from 'hooks/@zustand/useLoginModal';
import useRegisterModal from 'hooks/@zustand/useRegisterModal';
import { checkAdminLoader, checkAuthLoader } from 'utils/auth';

import RootLayout from './pages/Root';
import Main from 'pages/Main';
import OAuthRedirect from 'pages/OAuthRedirect';
import Modal from 'components/@shared/modal';
import SignInModal from 'components/SignModal/SignInModal';
import SignUpModal from 'components/SignModal/SignUpModal';
import LoadingSpinner from 'components/@shared/LoadingSpinner';

const Board = lazy(() => import(/* webpackChunkName: "Board" */ 'pages/Board'));
const BoardRequestForm = lazy(() => import(/* webpackChunkName: "BoardRequestForm" */ 'pages/BoardRequestForm'));
const BoardDetail = lazy(() => import(/* webpackChunkName: "BoardDetail" */ 'pages/BoardDetail'));
const ProblemSet = lazy(() => import(/* webpackChunkName: "ProblemSet" */ 'pages/ProblemSet'));
const CreateProblem = lazy(() => import(/* webpackChunkName: "CreateProblem" */ 'pages/Admin/CreateProblem'));
const Problem = lazy(() => import(/* webpackChunkName: "Problem" */ 'pages/Problem'));
const Workbook = lazy(() => import(/* webpackChunkName: "Workbook" */ 'pages/Workbook'));
const CreateWorkbook = lazy(() => import(/* webpackChunkName: "CreateWorkbook" */ 'pages/Admin/CreateWorkbook'));
const WorkbookQuestion = lazy(() => import(/* webpackChunkName: "WorkbookQuestion" */ 'pages/WorkbookQuestion'));
const WorkbookProblemAdd = lazy(
    () => import(/* webpackChunkName: "WorkbookProblemAdd" */ 'pages/Admin/WorkbookProblemAdd'),
);
const Contest = lazy(() => import(/* webpackChunkName: "Contest" */ 'pages/Contest'));
const CreateContest = lazy(() => import(/* webpackChunkName: "CreateContest" */ 'pages/Admin/CreateContest'));
const ContestDetail = lazy(() => import(/* webpackChunkName: "ContestDetail" */ 'pages/ContestDetail'));
const ContestProblemAdd = lazy(
    () => import(/* webpackChunkName: "ContestProblemAdd" */ 'pages/Admin/ContestProblemAdd'),
);
const ContestProblem = lazy(() => import(/* webpackChunkName: "ContestProblem" */ 'pages/ContestProblem'));
const ContestResult = lazy(() => import(/* webpackChunkName: "ContestResult" */ 'pages/ContestResult'));
const MembersRanks = lazy(() => import(/* webpackChunkName: "MembersRanks" */ 'pages/MembersRanks'));
const MyPage = lazy(() => import(/* webpackChunkName: "MyPage" */ 'pages/MyPage'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<LoadingSpinner />}>
                <RootLayout />
            </Suspense>
        ),
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
