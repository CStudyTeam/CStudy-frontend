import { CategoryFilterStoreType, useCategoryFilter } from '../@zustand/filterStore';
import { useCallback, useState } from 'react';

interface CategoryFilterActionProps {
    reset: () => void;
}

interface CategoryFilterActionState {
    categoryFilter: CategoryFilterStoreType;
    categoryActive: boolean;
    categoryHandleActive: (e: React.MouseEvent) => void;
}

const useCategoryFilterAction = ({ reset }: CategoryFilterActionProps): CategoryFilterActionState => {
    const categoryFilter = useCategoryFilter();
    const [categoryActive, setCategoryActive] = useState(false);

    const categoryHandleActive = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLElement;
            setCategoryActive((value) => !value);
            if (target.nodeName === 'LI') {
                reset();
                categoryFilter.setCategory(target.innerText);
                categoryFilter.setCategoryValue(target.dataset.value as string);
            }
        },
        [categoryFilter, reset],
    );

    return {
        categoryFilter,
        categoryActive,
        categoryHandleActive,
    };
};

export default useCategoryFilterAction;
