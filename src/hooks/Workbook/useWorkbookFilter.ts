import { WorkbookFilterStoreType, useWorkbookFilterStore } from 'hooks/@zustand/filterStore';
import { useCallback } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

interface WorkbookFilterType {
    workbookFilter: WorkbookFilterStoreType;
    handlePage: (page: number) => void;
    onSubmit: SubmitHandler<FieldValues>;
}

const useWorkbookFilter = (): WorkbookFilterType => {
    const workbookFilter = useWorkbookFilterStore();

    const handlePage = useCallback(
        (page: number) => {
            workbookFilter.setPageNumber(page);
        },
        [workbookFilter],
    );

    const onSubmit: SubmitHandler<FieldValues> = useCallback(
        ({ search }) => {
            workbookFilter.setTitle(search);
            workbookFilter.setDescription(search);
        },
        [workbookFilter],
    );

    return {
        workbookFilter,
        handlePage,
        onSubmit,
    };
};

export default useWorkbookFilter;
