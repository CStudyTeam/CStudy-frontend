import { useState, useCallback } from 'react';

const useSelectFilter = (filterName: string) => {
    const [selectName, setSelectName] = useState(filterName);
    const [isActive, setIsActive] = useState(false);

    const handleActive = useCallback((e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        setIsActive((value) => !value);
        if (target.nodeName === 'LI') {
            setSelectName(target.innerText);
        }
    }, []);

    return {
        selectName,
        isActive,
        handleActive,
    };
};

export default useSelectFilter;
