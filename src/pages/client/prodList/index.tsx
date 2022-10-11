import prodListApi from 'api/client/prodListApi';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from './components/Pagination';
import ProductList from './components/ProductList';

export default function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const getProdList = async () => {
        const res = await prodListApi.get();
        try {
            setProducts(res.data);
            setTotalPage(res.totalPage);
        } catch (e) {
            console.error(e);
            throw new Error(e);
        }
    };

    useEffect(() => {
        getProdList();
    }, [currentPage]);

    return (
        <Container>
            <ProductList products={products} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
            />
        </Container>
    );
}

const Container = styled.main`
    padding: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
`;
