import { useState } from 'react';
import styled from 'styled-components';
import ProdImage from '../../components/admin/prod/prodImage/prodImage';
import ProdInfo from '../../components/admin/prod/prodinfo/prodInfo';
import ProdOption from '../../components/admin/prod/prodOption';
import ProdOrign from '../../components/admin/prod/prodOrigin';
import ProdText from '../../components/admin/prod/prodText';
import Button from '../../components/common/button/button';

const AdminProdPage = () => {
    const [prodFiles, setProdFiles] = useState([]);
    const [prodOption, setProdOtion] = useState([]);
    const [prodOrigin, setProdOrigin] = useState([]);

    return (
        <AdminProdContainer>
            <ProdInfo />
            <ProdImage prodFiles={prodFiles} setProdFiles={setProdFiles} />
            <ProdOption prodOption={prodOption} setProdOtion={setProdOtion} />
            <ProdText />
            <ProdOrign prodOrigin={prodOrigin} setProdOrigin={setProdOrigin} />
            <Button size="full" height="38px" margin="16px 0 0 0" mainColor="#61CA3C">
                등록
            </Button>
        </AdminProdContainer>
    );
};
export default AdminProdPage;

const AdminProdContainer = styled.div`
    margin: 0 auto;
    padding: 32px 0;
    max-width: 80%;
    max-height: calc(100vh - 48px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;
