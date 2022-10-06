import styled from 'styled-components';

const AdminProdListPagination = ({ pageLength, curPage, setCurPage }: any) => {
    const onClickDecrease = () => {
        setCurPage((prev: string) => parseInt(prev) - 1);
    };

    const onClickIncrease = () => {
        setCurPage((prev: string) => parseInt(prev) + 1);
    };

    return (
        <PaginationContainer>
            <PaginationWrapper>
                <PaginationButton onClick={onClickDecrease} disabled={parseInt(curPage) === 1}>
                    &lt;
                </PaginationButton>
                {Array(pageLength)
                    .fill('')
                    .map((_, i) => (
                        <PaginationButton
                            key={i + 1}
                            onClick={() => setCurPage(i + 1)}
                            disabled={parseInt(curPage) === i + 1}
                        >
                            {i + 1}
                        </PaginationButton>
                    ))}
                <PaginationButton
                    onClick={onClickIncrease}
                    disabled={parseInt(curPage) === pageLength}
                >
                    &gt;
                </PaginationButton>
            </PaginationWrapper>
        </PaginationContainer>
    );
};

export default AdminProdListPagination;

const PaginationContainer = styled.section`
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 20px;
    background-color: #eee;
`;
const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: calc(100%-240px);
`;
const PaginationButton = styled.button`
    background-color: #fff;
    padding: 5px 15px;
    :disabled {
        background-color: #eee;
    }
`;
