import { ROUTE } from 'constants/Route';
import { QueryFilterStoreType, useQueryFilter } from '../@zustand/filterStore';
import { useCallback } from 'react';

interface QueryFilterActionProps {
    reset: () => void;
}

interface QueryFilterActionState {
    queryFilter: QueryFilterStoreType;
    isActive: string;
    handleToggle: () => void;
}

const useQueryFilterAction = ({ reset }: QueryFilterActionProps): QueryFilterActionState => {
    const queryFilter = useQueryFilter();
    const isActive = queryFilter.query === ROUTE.PROBLEMSET_MYQUESTION ? 'active' : '';

    const handleToggle = useCallback(() => {
        reset();
        queryFilter.setQuery(queryFilter.query === '' ? ROUTE.PROBLEMSET_MYQUESTION : '');
    }, [queryFilter, reset]);

    return {
        queryFilter,
        isActive,
        handleToggle,
    };
};

export default useQueryFilterAction;
