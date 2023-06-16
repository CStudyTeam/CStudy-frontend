import * as Styled from './style';

interface SelectProps {
    name: string;
    handleActive: (e: React.MouseEvent) => void;
    isActive: boolean;
    options: string[];
}

const Select = ({ name, handleActive, isActive, options }: SelectProps) => {
    return (
        <Styled.SelectBox onClick={handleActive} className={isActive ? 'active' : ''}>
            <Styled.Button>{name}</Styled.Button>
            <Styled.OptionList className="optionList">
                {options.map((option, index) => (
                    <Styled.OptionItem key={index}>{option}</Styled.OptionItem>
                ))}
            </Styled.OptionList>
        </Styled.SelectBox>
    );
};

export default Select;
