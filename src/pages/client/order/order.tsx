import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Order = () => {
    const navigate = useNavigate();

    const prodName = useRef(sessionStorage.getItem('prodName'));
    const prodCount = useRef(sessionStorage.getItem('prodCount'));
    const prodIme = useRef(sessionStorage.getItem('prodImg'));
    const price = useRef(sessionStorage.getItem('price'));

    const onPaymentHandler = useCallback(() => {
        navigate('/orders');
    }, []);

    return (
        <Container>
            <LeftContainer>
                <BuyerInfo>
                    <BuyerInfoHeader>
                        <span>주문자 정보</span>
                    </BuyerInfoHeader>
                    <InputContainer>
                        <InputHeader>
                            주문하시는 분<span> * </span>
                        </InputHeader>
                        <InputBox>
                            <input type="text" placeholder="이름 입력" />
                        </InputBox>
                    </InputContainer>
                    <InputContainer>
                        <InputHeader>
                            휴대폰 번호
                            <span> * </span>
                            (숫자만 입력)
                        </InputHeader>
                        <InputBox>
                            <input type="text" placeholder="전화번호 입력" />
                        </InputBox>
                    </InputContainer>
                    <InputContainer>
                        <InputHeader textcolor="#858a8d">
                            이메일
                            <span> (선택) </span>
                        </InputHeader>
                        <InputBox>
                            <input type="email" placeholder="이메일 입력" />
                        </InputBox>
                    </InputContainer>
                </BuyerInfo>
                <ShippingInfo>
                    <ShippingInfoHeader>
                        <span>배송 정보</span>
                    </ShippingInfoHeader>
                    <InputContainer>
                        <InputHeader>
                            받으시는 분<span> * </span>
                        </InputHeader>
                        <InputBox>
                            <input type="text" placeholder="이름 입력" />
                        </InputBox>
                    </InputContainer>
                    <InputContainer>
                        <InputHeader>
                            휴대폰 번호
                            <span> * </span>
                            (숫자만 입력)
                        </InputHeader>
                        <InputBox>
                            <input type="text" placeholder="전화번호 입력" />
                        </InputBox>
                    </InputContainer>
                    <InputContainer>
                        <InputHeader>
                            배송지
                            <span> * </span>
                        </InputHeader>
                        <InputButtonContainer>
                            <InputBox width="298px">
                                <input type="text" placeholder="우편번호" />
                            </InputBox>
                            <SmallButton>주소검색</SmallButton>
                        </InputButtonContainer>
                        <InputBox marginTop="8px">
                            <input type="text" placeholder="주소" />
                        </InputBox>
                        <InputBox marginTop="8px">
                            <input type="text" placeholder="상세주소" />
                        </InputBox>
                    </InputContainer>
                </ShippingInfo>
            </LeftContainer>
            <RightContainer>
                <OrderInfo>
                    <OrderInfoHeader>
                        <span>주문 정보</span>
                    </OrderInfoHeader>
                    <ProductContainer>
                        <div>
                            <img src={prodIme.current} />
                        </div>
                        <div>
                            <div>{prodName.current}</div>
                        </div>
                        <div>{price.current} 원</div>
                    </ProductContainer>
                    <OrderSummaryContainer>
                        <ProductPrice>
                            <span>소계</span>
                            <div>
                                <span>1000</span>
                                <span>원</span>
                            </div>
                        </ProductPrice>
                        <ShippingPrice>
                            <span>배송비</span>
                            <div>
                                <span>0</span>
                                <span>원</span>
                            </div>
                        </ShippingPrice>
                        <TotalPrice>
                            <span>총계</span>
                            <div>
                                <span>1000</span>
                                <span>원</span>
                            </div>
                        </TotalPrice>
                    </OrderSummaryContainer>
                    <PayButton onClick={onPaymentHandler}>결제하기</PayButton>
                </OrderInfo>
            </RightContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1160px;
    max-width: 1160px;
    margin: 0 auto;
`;

const LeftContainer = styled.div`
    width: 498px;
    max-width: 498px;
    margin-right: 32px;
    margin-bottom: 120px;
    padding-top: 32px;
`;

const RightContainer = styled.div`
    width: 360px;
    max-width: 360px;
    min-width: 360px;
    padding-top: 32px;
`;

const BuyerInfo = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
    padding: 16px 20px;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    background: #fff;
`;

const BuyerInfoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    color: #1b1c1d;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f3f5;
`;

const InputContainer = styled.div`
    margin-top: 10px;
`;

const InputHeader = styled.div<any>`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 4px;
    color: #858a8d;

    span {
        color: ${props => props.textcolor || '#e5503c'};
    }
`;

const InputBox = styled.div<any>`
    display: flex;
    width: ${props => props.width || '100%'};
    height: 40px;
    margin-top: ${props => props.marginTop || '0'};
    padding: 0 12px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background: #fff;

    input {
        width: 100%;
        font-size: 14px;
        border: 0;
        background: none;

        &:focus {
            outline: none;
        }
    }
`;

const ShippingInfo = styled(BuyerInfo)``;

const ShippingInfoHeader = styled(BuyerInfoHeader)``;

const InputButtonContainer = styled.div`
    display: flex;
`;

const SmallButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    height: 40px;
    margin-left: 8px;
    padding: 0 8px;
    border: 1px solid #d5dbe2;
    border-radius: 4px;
    color: #495057;
    background: #fff;
    font-size: 14px;
    font-weight: 700;
`;

const OrderInfo = styled(BuyerInfo)``;

const OrderInfoHeader = styled(BuyerInfoHeader)``;

const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    border: 1px solid greenyellow;
    & > div:first-child {
        width: 64px;
        height: 64px;
    }
`;

const OrderSummaryContainer = styled.div``;

const ProductPrice = styled.div`
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: -0.3px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    color: #858a8d;
`;

const ShippingPrice = styled(ProductPrice)``;

const TotalPrice = styled.div`
    line-height: 1.47;
    letter-spacing: -0.3px;
    font-size: 15px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 4px;
    color: #1b1c1d;
`;

const PayButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    margin-top: 8px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 700;
    color: white;
    border: 1px solid #00c471;
    border-radius: 4px;
    background: #00c471;
    cursor: pointer;
`;

export default Order;
