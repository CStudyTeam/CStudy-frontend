import { FieldValues, UseFormRegister } from 'react-hook-form';
import * as Styled from './style';

interface ChoiceListProps {
    choiceList: {
        number: number;
        content: string;
    }[];
    register: UseFormRegister<FieldValues>;
}

const ChoiceList = ({ choiceList, register }: ChoiceListProps) => {
    return (
        <Styled.ProblemOptionWrapper>
            {choiceList?.map(({ number, content }) => (
                <Styled.ProblemOption key={number}>
                    <Styled.ProblemNumber
                        type="radio"
                        {...register('choiceNumber')}
                        value={number}
                        data-count={number}
                    />
                    <Styled.ProblemDesc>{content}</Styled.ProblemDesc>
                </Styled.ProblemOption>
            ))}
        </Styled.ProblemOptionWrapper>
    );
};

export default ChoiceList;
