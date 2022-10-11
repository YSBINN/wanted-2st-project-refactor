import styled from 'styled-components';
import AdminLoginForm from './components/loginForm';
import AdminLayoutHeader from '../../../components/layout/adminLayout/header/header';

export default function AdminLoginPage() {
    return (
        <AdmimLoginContainer>
            <AdminLayoutHeader />
            <AdminLoginForm />
        </AdmimLoginContainer>
    );
}

const AdmimLoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(65, 143, 34, 0.5);
`;
