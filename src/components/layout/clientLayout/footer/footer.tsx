import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram);

const Footer = () => {
    const navigate = useNavigate();

    const goToClient = () => {
        navigate('/');
    };

    const goToAdmin = () => {
        navigate('/admin');
    };

    return (
        <Container>
            <TopFooter>
                <CompanyInfo>
                    <CompanyInfoHeader>About Fruitte</CompanyInfoHeader>
                    <CompanyInfoSubHeader>프루떼는</CompanyInfoSubHeader>
                    <CompanyInfoContent>
                        (프루떼는 프로젝트프룻의 새 이름입니다) 프루떼는 안전한 먹거리의 신념을
                        지키는 좋은 농장을 발굴하고 소개하는 팜큐레이터입니다. 건강한 자연을
                        가까이에서 만날 수 있는 팜큐레이션 서비스를 통하여 농장을 알고 누리고 맛보는
                        기쁨을 전합니다. 프루떼를 경험하는 사람들의 일상에 풍요로움을 더하는 것이
                        우리가 지향하는 가치입니다.{' '}
                    </CompanyInfoContent>
                </CompanyInfo>
                <CompanyInquiry>
                    <CompanyInquiryTop>
                        <CompanyInquiryTopHeader>문의안내</CompanyInquiryTopHeader>
                        <span>카카오톡채널: 프루떼</span>
                        <span>(주중 9시~18시 채팅 상담 가능)</span>
                    </CompanyInquiryTop>
                    <CompanyInquiryBottom>
                        <CompanyInquiryBottomHeader>
                            무통장 입금 계좌안내
                        </CompanyInquiryBottomHeader>
                        <span>국민은행 527837-01-004676 주식회사 로컬앤라이프</span>
                    </CompanyInquiryBottom>
                </CompanyInquiry>
                <NavBar>
                    <span onClick={goToClient}>Client</span>
                    <span onClick={goToAdmin}>Admin</span>
                </NavBar>
            </TopFooter>
            <BottomFooter>
                <IconWrapper>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </IconWrapper>
                <TopInfo>
                    <span>상호명: Local & Life Inc. | 대표: 홍인기 | 전화번호: 010-8828-0472 </span>
                    <span>사업자번호: 625-81-01879 | 통신판매허가번호: 2020-서울동대문-1110</span>
                    <span>주소: 서울시 동대문구 회기로85 한국과학기술원 9호관 9402호</span>
                    <span>호스팅 제공자 : (주)아임웹</span>
                </TopInfo>
                <BottomInfo>
                    <span>이용약관</span>
                    <span>개인정보처리방침</span>
                </BottomInfo>
                <span>Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.</span>
            </BottomFooter>
        </Container>
    );
};

const Container = styled.div`
    border-top: 1px solid #e6e6e6;
`;

const TopFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 220px;
    margin: 60px;
    padding: 20px 0;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
`;

const CompanyInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 100%;
`;

const CompanyInfoHeader = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const CompanyInfoSubHeader = styled.span`
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
`;

const CompanyInfoContent = styled.p`
    font-size: 14px;
`;

const CompanyInquiry = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    height: 100%;
`;

const CompanyInquiryTop = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;

    span {
        font-size: 14px;
        margin-bottom: 4px;
    }
`;

const CompanyInquiryTopHeader = styled.span`
    text-decoration: underline;
`;

const CompanyInquiryBottom = styled(CompanyInquiryTop)``;

const CompanyInquiryBottomHeader = styled(CompanyInquiryTopHeader)``;

const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    height: 100%;

    span {
        margin: 4px;
        cursor: pointer;
    }
`;

const BottomFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    font-size: 12px;
    /* border: 1px solid orange; */
`;

const IconWrapper = styled.div`
    width: 20px;
    height: 20px;

    svg {
        width: 100%;
        height: 100%;
    }
`;

const TopInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
`;

const BottomInfo = styled.div`
    display: flex;
    margin-bottom: 10px;

    span {
        margin: 0 8px;
        cursor: pointer;
    }
`;

export default Footer;
