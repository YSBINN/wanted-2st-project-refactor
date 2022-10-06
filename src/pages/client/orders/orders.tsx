import styled from 'styled-components';
import OrderList from '../../../components/client/orders/orderList';

export default function Orders() {
    return (
        <Container>
            <Aside>
                <Profile>
                    <Photo />
                    <div>user님</div>
                </Profile>
                <Menu>
                    <div>배송지 관리</div>
                    <div>쿠폰 내역</div>
                    <div>적립금 내역</div>
                    <div>교환/환불 신청</div>
                </Menu>
            </Aside>
            <section>
                <Title>주문 내역</Title>
                <OrderList />
            </section>
        </Container>
    );
}

const Container = styled.div`
    margin: 30px 0;
    justify-content: center;
    display: flex;
`;

const Aside = styled.div`
    border-style: solid;
    border-color: #f1f3f5;
    margin-right: 50px;
    width: 230px;
`;

const Profile = styled.div`
    margin: 0 auto 0 auto;
    padding: 30px;
    text-align: center;
    border-bottom: solid;
    border-color: #f1f3f5;
    & > div {
        font-weight: bold;
        font-size: 18px;
    }
`;

const Photo = styled.div`
    margin: 10px auto;
    width: 130px;
    height: 130px;
    border-radius: 100px;
    border-style: solid;
    border-color: ${props => props.theme.mainColor};
`;

const Menu = styled.div`
    padding: 25px;
    height: 500px;
    & > div {
        padding-bottom: 5px;
    }
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 23px;
    margin: 20px 0;
`;
