import Button from 'components/@shared/Button';
import * as Styled from './style';
import useGetWorkbookList from 'hooks/@query/workbook/useGetWorkbookList';
import ContentHeaderWrapper from 'components/@shared/ContentHeaderWrapper';
import ContentContainer from 'components/@shared/ContentContainer';
import ContentBodyWrapper from 'components/@shared/ContentBodyWrapper';
import WorkBookCard from 'components/Workbook/WorkbookCard';
import Pagination from 'components/ProblemSet/Pagination';
import { FieldValues, useForm } from 'react-hook-form';
import useWorkbookFilter from 'hooks/Workbook/useWorkbookFilter';
import { LuRefreshCw } from 'react-icons/lu';
import NoData from 'components/@shared/NoData';

const Workbook = () => {
    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            search: '',
        },
    });
    const { workbookFilter, handlePage, onSubmit } = useWorkbookFilter();

    const workbookList = useGetWorkbookList({
        page: workbookFilter.pageNumber,
        title: workbookFilter.title,
        description: workbookFilter.description,
    });

    const handleReset = () => {
        reset();
        workbookFilter.reset();
    };

    return (
        <ContentContainer>
            <ContentHeaderWrapper title="문제집" adminLink="문제집생성 페이지 이동">
                <Styled.SearchWrapper>
                    <Styled.SearchInput type="text" {...register('search', { required: true })} />
                    <Button onClick={handleSubmit(onSubmit)} className="navy xl style">
                        검색
                    </Button>
                    <Button onClick={handleReset} className="ml xl revert">
                        <LuRefreshCw
                            size={20}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        />
                    </Button>
                </Styled.SearchWrapper>
            </ContentHeaderWrapper>
            <ContentBodyWrapper blue>
                {workbookList?.totalElements === 0 && <NoData>문제집이 없습니다.</NoData>}
                <Styled.WorkBookCards>
                    {workbookList?.content?.map(({ id, title, description, createdAt }) => (
                        <WorkBookCard key={id} id={id} title={title} description={description} createdAt={createdAt} />
                    ))}
                </Styled.WorkBookCards>
                {(workbookList?.totalPages as number) > 1 && (
                    <Styled.PaginationWrapper>
                        <Pagination
                            totalPages={workbookList?.totalPages as number}
                            handlePage={handlePage}
                            page={workbookFilter.pageNumber}
                            white
                        />
                    </Styled.PaginationWrapper>
                )}
            </ContentBodyWrapper>
        </ContentContainer>
    );
};

export default Workbook;
