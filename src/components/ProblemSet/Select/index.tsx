import * as Styled from './style';

interface SelectProps {
    name: string;
    handleActive: (e: React.MouseEvent) => void;
    isActive: boolean;
    options: string[];
    optionsValue: (string | number)[];
    selectedIndex: number[];
}

const Select = ({ name, handleActive, isActive, options, optionsValue, selectedIndex }: SelectProps) => {
    return (
        <Styled.SelectBox
            onClick={handleActive}
            className={isActive ? 'active' : ''}
            role="listbox"
            aria-labelledby="셀렉트"
            aria-expanded={isActive}
            tabIndex={0}
        >
            <Styled.Button>
                {name}
                <span className="arrow" />
            </Styled.Button>
            <Styled.OptionList className="optionList">
                {options?.map((option, index) => (
                    <Styled.OptionItem
                        key={index}
                        data-value={optionsValue[index]}
                        role="option"
                        aria-selected={index === selectedIndex[index]}
                    >
                        {option}
                    </Styled.OptionItem>
                ))}
            </Styled.OptionList>
        </Styled.SelectBox>
    );
};

export default Select;
