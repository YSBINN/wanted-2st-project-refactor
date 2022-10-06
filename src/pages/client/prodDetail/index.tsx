import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import prodDetailService from '../../../services/client/prodDetailService';

const ProdDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [prodInfo, setProdInfo] = useState();
    const [subImgSrc, setSubImgSrc] = useState('');
    const [overSubImg, setOverSubImg] = useState(true);
    const [DropDown, setDropDown] = useState(false);
    const [choiceList, setChoiceList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        const getProdDetail = async () => {
            try {
                const res = await prodDetailService.get(id);
                setProdInfo(res.data);
            } catch (err) {
                console.error(err);
                throw new Error(err);
            }
        };
        getProdDetail();
    }, [id]);

    if (!prodInfo) {
        return <>로딩중입니다</>;
    }

    const {
        salfFlag,
        soldFlag,
        mdFlag,
        prodImg,
        subImg,
        prodName,
        salePrice,
        originalPrice,
        option,
        choice,
    } = prodInfo;

    const onSubImg = src => {
        setOverSubImg(false);
        setSubImgSrc(src);
    };

    const onOffSubImg = () => {
        setOverSubImg(true);
    };

    const onMinusCount = list => {
        let copyArray = [...choiceList];
        let findIndex = copyArray.findIndex(el => el.name === list.name);
        if (copyArray[findIndex].count > 1) {
            copyArray[findIndex].count = copyArray[findIndex].count - 1;
            setTotalPrice(prev => prev - Number(list.price));
            setTotalCount(prev => prev - 1);
        }
        setChoiceList(copyArray);
    };

    const onPlusCount = list => {
        let copyArray = [...choiceList];
        let findIndex = copyArray.findIndex(el => el.name === list.name);
        copyArray[findIndex].count = copyArray[findIndex].count + 1;
        setChoiceList(copyArray);
        setTotalPrice(prev => prev + Number(list.price));
        setTotalCount(prev => prev + 1);
    };

    const onBuyAction = () => {
        sessionStorage.setItem('price', totalPrice);
        sessionStorage.setItem('prodName', prodName);
        sessionStorage.setItem('prodCount', totalCount);
        sessionStorage.setItem('prodImg', prodImg.src);
        navigate('/order');
    };

    const numberWithCommas = num => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const onDropDown = () => setDropDown(prev => !prev);

    const OnChoiceList = list => {
        list.count = 1;
        if (choiceList.some(el => el.name === list.name)) alert('이미 선택된 옵션입니다.');
        else {
            setChoiceList(prev => [...prev, list]);
            setTotalPrice(prev => prev + Number(list.price));
            setTotalCount(prev => prev + list.count);
        }
    };

    const OnDelChoiceList = list => {
        setChoiceList(prev => prev.filter(el => el.name !== list.name));
        setTotalPrice(prev => prev - list.count * list.price);
        setTotalCount(prev => prev - list.count);
    };

    const onSale = salfFlag === 1;
    const onBest = soldFlag === 1;
    const onMd = mdFlag === 1;
    const onChoiceList = choiceList.length > 0;

    return (
        <>
            <Container>
                <ProdImgContainer>
                    <ProdMainImg src={overSubImg ? prodImg.src : subImgSrc} alt="제품이미지" />
                    <WrapSubImg>
                        {subImg.map(el => (
                            <ProdSubImg
                                key={el.id}
                                src={el.src}
                                alt="제품추가이미지"
                                length={subImg.length}
                                onMouseOver={() => onSubImg(el.src)}
                                onMouseOut={onOffSubImg}
                            />
                        ))}
                    </WrapSubImg>
                </ProdImgContainer>
                <ProdInfoContainer>
                    <ProdInfoHeaderContainer>
                        <ProdTitleContainer>
                            <ProdName>{prodName}</ProdName>
                            {onSale && <SaleIcon>Sale</SaleIcon>}
                            {onBest && <BestIcon>Best</BestIcon>}
                            {onMd && <MdIcon>MD</MdIcon>}
                        </ProdTitleContainer>
                        <ProdPrices>
                            <ProdSalePrice>{numberWithCommas(salePrice)}원</ProdSalePrice>
                            <ProdPrice>{numberWithCommas(originalPrice)}원</ProdPrice>
                        </ProdPrices>
                    </ProdInfoHeaderContainer>
                    <ProdDescContainer>
                        <ProdDesc>{option.detail}</ProdDesc>
                        <ProdOrigin>
                            원산지 : <span>{option.origin}</span>
                        </ProdOrigin>
                        <ProdDelivery>
                            배송비 : <span>무료배송</span>
                        </ProdDelivery>
                    </ProdDescContainer>
                    <ProdSelectContainer>
                        <ProdSelectPhrases>옵션선택 :</ProdSelectPhrases>
                        <ProdChoice onClick={onDropDown}>
                            선택하세요(필수)
                            {DropDown &&
                                choice.map(el => (
                                    <ProdChoiceList key={el.name} onClick={() => OnChoiceList(el)}>
                                        <span>{el.name} : </span>
                                        <span>{numberWithCommas(el.price)}원</span>
                                    </ProdChoiceList>
                                ))}
                        </ProdChoice>
                    </ProdSelectContainer>
                    {onChoiceList &&
                        choiceList.map(el => (
                            <ProdPaymentContainer>
                                <ProdCount>
                                    <div>{el.name}</div>
                                    <ProdDelete onClick={() => OnDelChoiceList(el)}>X</ProdDelete>
                                </ProdCount>
                                <CountAndPrice>
                                    <SpinnerBoxContainer>
                                        <SpinnerBoxMinus onClick={() => onMinusCount(el)}>
                                            -
                                        </SpinnerBoxMinus>
                                        <SpinnerBoxNumber>{el.count}</SpinnerBoxNumber>
                                        <SpinnerBoxPlus onClick={() => onPlusCount(el)}>
                                            +
                                        </SpinnerBoxPlus>
                                    </SpinnerBoxContainer>
                                    <ProdPayment>
                                        {numberWithCommas(el.price * el.count)}원
                                    </ProdPayment>
                                </CountAndPrice>
                            </ProdPaymentContainer>
                        ))}
                    {onChoiceList && (
                        <TotalContainer>
                            <TotalCount>
                                <span>총 상품수량 : </span>
                                <span>{totalCount}개</span>
                            </TotalCount>
                            <TotalPrice>
                                <span>총 상품금액 : </span>
                                <span>{numberWithCommas(totalPrice)}원</span>
                            </TotalPrice>
                        </TotalContainer>
                    )}
                    <BuyButton onClick={onBuyAction}>구매하기</BuyButton>
                </ProdInfoContainer>
            </Container>
            <CsContainer>
                <PreviewContainer>구매평</PreviewContainer>
                <InquiryContainer>Q&A</InquiryContainer>
            </CsContainer>
        </>
    );
};

export default ProdDetail;

const Container = styled.div`
    display: flex;
    width: 100vw;
    margin-top: 20px;
    border-bottom: 1px solid silver;
    margin-bottom: 30px;
    height: 90vh;
`;
const ProdImgContainer = styled.div`
    width: 40%;
    height: 90%;
    margin-right: 5%;
    margin-left: 5%;
`;
const ProdMainImg = styled.img`
    width: 100%;
    height: 70%;
`;

const WrapSubImg = styled.div`
    display: flex;
    width: 100%;
    margin-top: 5%;
    height: 5%;
`;
const ProdSubImg = styled.img`
    width: 18%;
    margin-right: 5px;
    height: 100%;
    object-fit: cover;
`;
const ProdInfoContainer = styled.div`
    width: 40%;
    height: 70%;
    margin-right: 5%;
    margin-left: 5%;
`;

const ProdInfoHeaderContainer = styled.div`
    border-bottom: 1px solid silver;
`;
const ProdTitleContainer = styled.div``;
const ProdName = styled.span`
    font-size: 20px;
    margin-right: 5px;
    font-weight: bolder;
`;
const SaleIcon = styled.span`
    background: #fe5356;
    border: 1px solid #fe5356;
    width: 30px;
    color: white;
    margin-right: 5px;
`;
const BestIcon = styled.span`
    background: #fff;
    color: #000;
    border: 1px solid #ccc;
    width: 35px;
    text-align: center;
    margin-right: 5px;
`;
const MdIcon = styled(BestIcon)``;

const ProdPrices = styled.div``;

const ProdPrice = styled.span`
    text-decoration: line-through;
    color: rgba(51, 51, 51, 0.5);
`;
const ProdSalePrice = styled.span`
    font-size: 20px;
    color: ${props => props.theme.mainColor};
    margin-right: 10px;
`;
const ProdDescContainer = styled.div``;

const ProdDesc = styled.p`
    margin-top: 15px;
`;
const ProdOrigin = styled.p`
    margin-top: 5px;
    font-weight: bold;
    span {
        font-size: 15px;
        font-weight: 200;
    }
`;
const ProdDelivery = styled(ProdOrigin)``;

const ProdSelectContainer = styled.div`
    display: flex;
    margin-top: 5px;
    width: 100%;
`;

const ProdSelectPhrases = styled.div`
    font-weight: bolder;
    width: 20%;
`;
const ProdChoice = styled.div`
    width: 80%;
    font-weight: 200;
    border: 1px solid black;
    :hover {
        cursor: pointer;
    }
`;
const ProdChoiceList = styled.div`
    z-index: 1;
    border-top: 1px solid silver;
    border-bottom: 1px solid silver;
`;

const ProdPaymentContainer = styled.div`
    border: 1px solid silver;
    margin-top: 15px;
`;
const CountAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid silver;
`;
const ProdCount = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProdDelete = styled.div`
    :hover {
        cursor: pointer;
    }
`;

const SpinnerBoxContainer = styled.div`
    border: 1px solid silver;
`;
const SpinnerBoxMinus = styled.button`
    border-right: 1px solid silver;
    width: 20px;
`;
const SpinnerBoxNumber = styled.button`
    border-right: 1px solid silver;
    width: 20px;
`;
const SpinnerBoxPlus = styled(SpinnerBoxMinus)``;

const ProdPayment = styled.div`
    height: 50%;
`;

const TotalContainer = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;
const TotalCount = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const TotalPrice = styled(TotalCount)``;

const BuyButton = styled.button`
    margin-top: 10px;
    width: 100%;
    background-color: ${props => props.theme.mainColor};
    border-radius: 8px;
    color: ${props => props.theme.subColor};
    margin: 20px;
`;

const CsContainer = styled.div`
    display: flex;
`;
const PreviewContainer = styled.div`
    width: 40%;
    margin-right: 5%;
    margin-left: 5%;
    text-align: center;
    border: 1px solid silver;
`;
const InquiryContainer = styled.div`
    width: 40%;
    margin-right: 5%;
    margin-left: 5%;
    text-align: center;
    border: 1px solid silver;
`;
