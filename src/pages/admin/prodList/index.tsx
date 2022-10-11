import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import AdminProdListItem from './components/ProdItem';
import AdminProdListPagination from './components/adminPagination';
import AdminProdSearchHeader from './components/SearchHeader';
import AdminProdService from '../../../services/admin/adminProdService';

export default function AdminProdListPage() {
    const [curData, setCurData] = useState([]);
    const [pageLength, setPageLength] = useState(null);
    const [curPage, setCurPage] = useState(1);

    const getProdList = async () => {
        try {
            const res = await AdminProdService.get(curPage);

            setCurData(res.data.data);
            setPageLength(res.data.totalPage);
            setCurPage(res.data.currentPage);
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    };

    useEffect(() => {
        getProdList();
    }, [curPage]);

    const onEditShowFlag = useCallback(
        async (showFlag, id) => {
            try {
                const res = await AdminProdService.edit({ showFlag, id });
                if (res.status === 200) {
                    const data = [...curData];
                    data.find(v => v.id === res.data.id).showFlag = res.data.showFlag;
                    setCurData(data);
                }
            } catch (err) {
                console.error(err);
                throw new Error(err);
            }
        },
        [curData],
    );

    const onRemoveProdItem = async id => {
        try {
            const res = await AdminProdService.remove(id);
            if (res.status === 200) {
                const resId = res.data.slice(1);
                const newData = curData.filter(it => it.id !== resId);
                setCurData(newData);
            }
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    };

    return (
        <ProdListPageMain>
            <AdminProdSearchHeader />
            <ProdItemContainer>
                <ul>
                    {curData.map(it => (
                        <AdminProdListItem
                            key={it.id}
                            onEditShowFlag={onEditShowFlag}
                            onRemoveProdItem={onRemoveProdItem}
                            data={it}
                        ></AdminProdListItem>
                    ))}
                </ul>
            </ProdItemContainer>
            <AdminProdListPagination
                pageLength={pageLength}
                curPage={curPage}
                setCurPage={setCurPage}
            />
        </ProdListPageMain>
    );
}

const ProdListPageMain = styled.main`
    position: relative;
    width: calc(100% - 240px);
    margin: 30px auto;
`;
const ProdItemContainer = styled.div`
    height: calc(100vh - 180px);
    padding-bottom: 100px;
    margin: 0 atuo;
    overflow-y: scroll;
    & > ul {
        width: 70%;
        margin: 0 auto;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;
