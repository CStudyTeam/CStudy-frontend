import * as Styled from './style';

const Pagination = () => {
    return (
        <Styled.Pagination>
            <Styled.LeftArrowButton />
            <Styled.PaginationButtonWrapper>
                <Styled.PaginationButton>1</Styled.PaginationButton>
                <Styled.PaginationButton>2</Styled.PaginationButton>
                <Styled.PaginationButton>3</Styled.PaginationButton>
                <Styled.PaginationButton>4</Styled.PaginationButton>
                <Styled.PaginationButton>5</Styled.PaginationButton>
            </Styled.PaginationButtonWrapper>
            <Styled.RightArrowButton />
        </Styled.Pagination>
    );
};

export default Pagination;
