import { StatusFilterStoreType, useStatusFilter } from '../@zustand/filterStore';
import { useCallback, useState } from 'react';

interface StatusFilterActionProps {
    reset: () => void;
}

interface StatusFilterActionState {
    statusFilter: StatusFilterStoreType;
    statusActive: boolean;
    statusHandleActive: (e: React.MouseEvent) => void;
}

const useStatusFilterAction = ({ reset }: StatusFilterActionProps): StatusFilterActionState => {
    const statusFilter = useStatusFilter();
    const [statusActive, setStatusActive] = useState(false);

    const statusHandleActive = useCallback(
        (e: React.MouseEvent) => {
            const target = e.target as HTMLElement;
            setStatusActive((value) => !value);
            if (target.nodeName === 'LI') {
                statusFilter.setStatus(target.innerText);
                statusFilter.setStatusValue(Number(target.dataset.value));
            }
        },
        [statusFilter],
    );

    return {
        statusFilter,
        statusActive,
        statusHandleActive,
    };
};

export default useStatusFilterAction;
