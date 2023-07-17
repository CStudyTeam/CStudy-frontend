import * as Styled from './style';

interface SelectProps {
    name: string;
    handleActive: (e: React.MouseEvent) => void;
    isActive: boolean;
    options: string[];
    optionsValue: (string | number)[];
}

const Select = ({ name, handleActive, isActive, options, optionsValue }: SelectProps) => {
    return (
        <Styled.SelectBox onClick={handleActive} className={isActive ? 'active' : ''}>
            <Styled.Button>
                {name}
                <span className="arrow" />
            </Styled.Button>
            <Styled.OptionList className="optionList">
                {options.map((option, index) => (
                    <Styled.OptionItem key={index} data-value={optionsValue[index]}>
                        {option}
                    </Styled.OptionItem>
                ))}
            </Styled.OptionList>
        </Styled.SelectBox>
    );
};

export default Select;
