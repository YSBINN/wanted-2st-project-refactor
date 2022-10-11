import { useCallback } from 'react';
import styled from 'styled-components';
import CommonButton from '../../../../components/button';
import CommonLabel from '../../../../components/label';

const AdminProdListItem = ({ data, onEditShowFlag, onRemoveProdItem }: any) => {
    const changedPrice = data.salePrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

    const onEditHandler = useCallback(() => {
        onEditShowFlag(!data.showFlag, data.id);
    }, [data.id]);

    const onRemoveHandler = () => {
        onRemoveProdItem(data.id);
    };

    return (
        <ProdItemWrapper>
            <ProdItemHeader>
                <h3>{data.prodName}</h3>
                <CommonLabel
                    text={data.showFlag ? '노출 중' : '비노출 중'}
                    color="#fff"
                    bgColor="#61CA3C"
                />
                <ShowButton onClick={onEditHandler}>
                    {data.showFlag ? '숨겨놓기' : '보여주기'}
                </ShowButton>
            </ProdItemHeader>
            <ProdItemContent>
                <img src={data.prodImg.src}></img>
                <ProdInfoWrapper>
                    <ProdItemName>상품명 : {data.prodName}</ProdItemName>
                    <ProdItemDetail>상품소개 : {data.prodDetail}</ProdItemDetail>
                    <div>
                        <span>가격: {changedPrice}원</span>
                        <CommonLabel text="sale" color="#fff" bgColor="#F93939" />
                        {data.mdFlag === 0 ? null : <CommonLabel text="MD" bgColor="#fff" />}
                        {data.soldFlag === 0 ? null : (
                            <CommonLabel text="SOLD OUT" bgColor="#D9D9D9" />
                        )}
                    </div>
                </ProdInfoWrapper>
                <ButtonWrapper>
                    <CommonButton text="수정" color="#61CA3C" bgColor="#fff" />
                    <CommonButton
                        text="삭제"
                        color="#fff"
                        bgColor="#61CA3C"
                        onClick={onRemoveHandler}
                    />
                </ButtonWrapper>
            </ProdItemContent>
        </ProdItemWrapper>
    );
};
export default AdminProdListItem;

const ProdItemWrapper = styled.li`
    margin-bottom: 20px;
    border: 1px solid;
    background-color: #fff;
`;

const ProdItemHeader = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 30px;
    border-bottom: 1px solid;
    > h3 {
        font-weight: bold;
    }
`;

const ProdInfoWrapper = styled.div`
    width: 60%;
`;

const ShowButton = styled.button`
    position: absolute;
    right: 30px;
    color: #fff;
    background-color: ${props => props.theme.mainColor};
    padding: 5px 10px;
    border-radius: 5px;
`;

const ProdItemContent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    padding: 10px 30px;
    > img {
        width: 100px;
        height: 100px;
        margin-right: 30px;
    }
`;

const ProdItemName = styled.span`
    font-weight: bold;
`;

const ProdItemDetail = styled.div`
    color: #a8a8a8;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    right: 30px;
    bottom: 20px;
`;
