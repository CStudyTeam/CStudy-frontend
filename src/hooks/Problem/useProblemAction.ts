import { useState, useCallback } from 'react';

const useProblemAction = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isAction, setIsAction] = useState(false);
    const [timeCheck, setTimeCheck] = useState(false);

    const handleIsLoading = useCallback((isLoading: boolean) => {
        setIsLoading(isLoading);
    }, []);

    const handleIsAnswer = useCallback((isAnswer: boolean) => {
        setIsAnswer(isAnswer);
    }, []);

    const actionAnimations = useCallback((isActions: boolean) => {
        setIsAction(isActions);
    }, []);

    const animationTimeCheck = useCallback((time: boolean) => {
        setTimeCheck(time);
    }, []);

    return {
        isLoading,
        isAnswer,
        isAction,
        timeCheck,
        handleIsLoading,
        handleIsAnswer,
        actionAnimations,
        animationTimeCheck,
    };
};

export default useProblemAction;
