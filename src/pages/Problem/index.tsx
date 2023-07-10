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

const Problem = () => {
    const { problemId } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [startTime, setStartTime] = useState<null | number>(null);
    const oneProblem = useGetOneProblem(problemId as string);

    const { register, handleSubmit } = useForm<FieldValues>();

    console.log(oneProblem);
    const SelectAnswerProblem = useSelectAnswerProblem({ setIsLoading });

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
                />
                <ProblemFooter explain={oneProblem?.explain as string} />
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Problem;
