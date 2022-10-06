import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../components/client/productList/Pagination';
import ProductList from '../../components/client/productList/ProductList';

function ProductListPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        axios
            .get('https:/fruitte.co/api/goods?page=5')
            .then(({ data }) => {
                setProducts(data.data);
                setTotalPage(data.totalPage);
            })
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });
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

export default ProductListPage;
