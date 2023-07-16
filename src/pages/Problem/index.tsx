import { useState, useCallback, useEffect } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetOneProblem } from 'hooks/@query/problem/useGetOneProblem';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import { userInfo } from 'utils/auth';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSelectAnswerProblem } from 'hooks/@query/problem/useSelectAnswerProblem';
import { LoginUserDto, selectAnswerProblemFromProps } from 'types/problem';
import ProblemForm from 'components/ProblemSet/ProblemRender';
import ProblemFooter from 'components/ProblemSet/ProblemFooter';
import { OneProblem } from 'types/api';
import { UTIL } from 'constants/Util';
import Button from 'components/@shared/Button';
import { Canvas } from '@react-three/fiber';
import * as Styled from './style';
import { Color } from 'three';
import StampSuccess from 'assets/3D-Model-Stamp/StampSuccess';
import StampFailed from 'assets/3D-Model-Stamp/StampFailed';
import useProblemAction from './../../hooks/Problem/useProblemAction';

const Problem = () => {
    const { problemId } = useParams();
    const navigate = useNavigate();
    const [startTime, setStartTime] = useState<null | number>(null);
    const [Answer, setAnswer] = useState('');
    const {
        isLoading,
        isAnswer,
        isAction,
        timeCheck,
        handleIsLoading,
        handleIsAnswer,
        actionAnimations,
        animationTimeCheck,
    } = useProblemAction();

    const oneProblem = useGetOneProblem(problemId as string);

    const { register, handleSubmit } = useForm<FieldValues>();

    const SelectAnswerProblem = useSelectAnswerProblem({ handleIsLoading, handleIsAnswer, actionAnimations });

    const onSubmit: SubmitHandler<FieldValues> = useCallback(
        (FormData) => {
            const choiceNumber = { choiceNumber: parseInt(FormData.choiceNumber) };
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - (startTime as number);
            const loginUserDto = {
                ...(userInfo() as LoginUserDto),
            };

            const formData = {
                ...choiceNumber,
                loginUserDto: loginUserDto,
                time: Math.floor(elapsedTime / UTIL.SECOND),
            };

            setAnswer(FormData.choiceNumber);
            SelectAnswerProblem({ problemId, formData } as selectAnswerProblemFromProps);
        },
        [SelectAnswerProblem, problemId, startTime],
    );

    useEffect(() => {
        setStartTime(new Date().getTime());
    }, []);

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제">
                <Button type="button" className="gray style mt ml xl2" onClick={() => navigate(-1)}>
                    돌아가기
                </Button>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
                <ProblemForm
                    isLoading={isLoading}
                    problem={oneProblem as OneProblem}
                    register={register}
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    Answer={Answer}
                    isAnswer={isAnswer}
                    isAction={isAction}
                    timeCheck={timeCheck}
                >
                    {isAction && (
                        <Styled.Stamp>
                            <Canvas>
                                <directionalLight color={new Color(0xffffff)} intensity={2} position={[-1, 1, 1]} />
                                {isAnswer ? (
                                    <StampSuccess
                                        actionAnimations={actionAnimations}
                                        animationTimeCheck={animationTimeCheck}
                                        isAction={isAction}
                                    />
                                ) : (
                                    <StampFailed
                                        actionAnimations={actionAnimations}
                                        animationTimeCheck={animationTimeCheck}
                                        isAction={isAction}
                                    />
                                )}
                            </Canvas>
                        </Styled.Stamp>
                    )}
                </ProblemForm>
                {isAnswer && <ProblemFooter explain={oneProblem?.explain as string} />}
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Problem;
