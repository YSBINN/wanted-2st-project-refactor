import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/client/fruitte_logo.jpg';

const Header = () => {
    const navigate = useNavigate();

    const goToClient = () => {
        navigate('/');
    };

    const goToAdmin = () => {
        navigate('/admin');
    };

    return (
        <Wrapper>
            <LogoWrapper>
                <img src={logo} alt="fruitte_logo" />
            </LogoWrapper>
            <GNBContainer>
                <GNBButton onClick={goToClient}>Client</GNBButton>
                <GNBButton onClick={goToAdmin}>Admin</GNBButton>
            </GNBContainer>
            <SignContainer>
                <SignButton>login</SignButton>
                <SignButton>join</SignButton>
            </SignContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    border-bottom: 1px solid #e6e6e6;
`;

const LogoWrapper = styled.div`
    width: 200px;
    margin-left: 20px;
    margin: 0 20px;
    img {
        width: 100%;
        height: 100%;
    }
`;

const GNBContainer = styled.div`
    display: flex;
`;

const GNBWrapper = styled.div`
    display: flex;
`;

const GNBButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    margin: 10px 20px;
    font-size: 20px;
    cursor: pointer;
`;

const SignContainer = styled.div`
    display: flex;
    justify-content: end;
    width: 200px;
    margin-right: 20px;
    cursor: pointer;
`;

const SignWrapper = styled.div`
    display: flex;
`;

const SignButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    margin: 0 4px;
    cursor: pointer;
`;

export default Header;
