import styled from 'styled-components';

function Pagination({ currentPage, setCurrentPage, totalPage }: any) {
    return (
        <Container>
            <PageButton
                onClick={() => setCurrentPage((prev: number) => prev - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </PageButton>
            {Array(totalPage)
                .fill('')
                .map((_, index) => (
                    <PageButton
                        key={`Container_${index + 1}`}
                        onClick={() => setCurrentPage(index + 1)}
                        aria-current={currentPage === index + 1 ? 'page' : null}
                    >
                        {index + 1}
                    </PageButton>
                ))}
            <PageButton
                onClick={() => setCurrentPage((prev: number) => prev + 1)}
                disabled={currentPage === totalPage}
            >
                &gt;
            </PageButton>
        </Container>
    );
}

const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
`;

const PageButton = styled.button<any>`
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: ${({ theme }) => theme.mainColor};
        color: #fff;
    }
    &[aria-current] {
        background: ${({ theme }) => theme.mainColor};
        font-weight: bold;
        cursor: revert;
        transform: revert;
    }
`;

export default Pagination;
