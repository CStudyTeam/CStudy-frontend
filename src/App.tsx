import { Suspense, lazy } from 'react';
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

const Main = lazy(() => import('pages/Main'));
const Board = lazy(() => import('pages/Board'));
const BoardRequestForm = lazy(() => import('pages/BoardRequestForm'));
const BoardDetail = lazy(() => import('pages/BoardDetail'));
const ProblemSet = lazy(() => import('pages/ProblemSet'));
const Problem = lazy(() => import('pages/Problem'));
const CreateProblem = lazy(() => import('pages/Admin/CreateProblem'));
const Workbook = lazy(() => import('pages/Workbook'));
const CreateWorkbook = lazy(() => import('pages/Admin/CreateWorkbook'));
const WorkbookQuestion = lazy(() => import('pages/WorkbookQuestion'));
const WorkbookProblemAdd = lazy(() => import('pages/Admin/WorkbookProblemAdd'));
const Contest = lazy(() => import('pages/Contest'));
const CreateContest = lazy(() => import('pages/Admin/CreateContest'));
const ContestDetail = lazy(() => import('pages/ContestDetail'));
const ContestProblemAdd = lazy(() => import('pages/Admin/ContestProblemAdd'));
const ContestProblem = lazy(() => import('pages/ContestProblem'));
const ContestResult = lazy(() => import('pages/ContestResult'));
const MembersRanks = lazy(() => import('pages/MembersRanks'));
const MyPage = lazy(() => import('pages/MyPage'));

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense>
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
