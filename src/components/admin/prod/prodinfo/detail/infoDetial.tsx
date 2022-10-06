import styled from 'styled-components';
import Input from '../../../../common/input/input';

const InfoDetail = () => {
    return (
        <DetailTemplate>
            <p>
                <span>상품명</span>
                <Input
                    width="90%"
                    mainColor="#fff"
                    subColor="#222"
                    padding="4px 0 4px 16px"
                    margin="0 0 8px 8px"
                />
            </p>
            <div>
                상품설명
                <Input
                    type="textarea"
                    width="100%"
                    height="100px"
                    mainColor="#fff"
                    subColor="#222"
                    padding="8px 0 8px 16px"
                    margin="8px 0 0 0"
                />
            </div>
            <DetailOption>
                <span>
                    원산지
                    <Input
                        width="40%"
                        mainColor="#fff"
                        subColor="#222"
                        padding="4px 0 4px 16px"
                        margin="0 0 8px 8px"
                    />
                    <Input
                        width="40%"
                        mainColor="#fff"
                        subColor="#222"
                        padding="4px 0 4px 16px"
                        margin="0 0 8px 8px"
                    />
                </span>
                <span>
                    배송방법
                    <Input
                        width="60%"
                        mainColor="#fff"
                        subColor="#222"
                        padding="4px 0 4px 16px"
                        margin="0 0 8px 8px"
                    />
                </span>
                <span>
                    대표가격
                    <Input
                        width="150px"
                        mainColor="#fff"
                        subColor="#222"
                        padding="4px 0 4px 16px"
                        margin="0 0 8px 8px"
                    />
                </span>
            </DetailOption>
            <DetailSalePrice>
                할인가격
                <Input
                    width="150px"
                    mainColor="#fff"
                    subColor="#222"
                    padding="4px 0 4px 16px"
                    margin="0 0 8px 8px"
                />
            </DetailSalePrice>
        </DetailTemplate>
    );
};
export default InfoDetail;

const DetailTemplate = styled.div`
    width: 800px;
    margin-left: 16px;

    & > p {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const DetailOption = styled.div`
    display: flex;
    justify-content: space-between;

    & > span {
        max-width: 300px;
    }
`;

const DetailSalePrice = styled.div`
    display: flex;
    justify-content: flex-end;
`;
