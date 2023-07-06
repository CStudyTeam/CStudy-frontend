import { useState, useCallback } from 'react';
import ContentContainer from 'components/@shared/ContentContainer';
import { useParams } from 'react-router-dom';
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

const Problem = () => {
    const { problemId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const oneProblem = useGetOneProblem(problemId as string);

    const { register, handleSubmit } = useForm<FieldValues>();

    console.log(oneProblem);
    const SelectAnswerProblem = useSelectAnswerProblem({ setIsLoading });

    const onSubmit: SubmitHandler<FieldValues> = useCallback(
        (FormData) => {
            const choiceNumber = { choiceNumber: parseInt(FormData.choiceNumber) };
            const loginUserDto = {
                ...(userInfo() as LoginUserDto),
            };

            const formData = {
                ...choiceNumber,
                loginUserDto: loginUserDto,
            };

            SelectAnswerProblem({ problemId, formData } as selectAnswerProblemFromProps);
        },
        [SelectAnswerProblem, problemId],
    );

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제" />
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
