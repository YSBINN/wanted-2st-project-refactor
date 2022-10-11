import { useState } from 'react';
import styled from 'styled-components';
import ProdImage from './components/prodImage';
import ProdInfo from './components/prodInfo';
import ProdOption from './components/prodOption';
import ProdOrign from './components/prodOrigin';
import ProdText from './components/prodText';
import Button from '../../../components/button/button';

export default function AdminProdPage() {
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
}

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
