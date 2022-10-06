import styled from 'styled-components';
import AdminLoginForm from '../../components/admin/login/loginForm';
import AdminLayoutHeader from '../../components/common/layout/adminLayout/header/header';

const AdminLoginPage = () => {
    return (
        <AdmimLoginContainer>
            <AdminLayoutHeader />
            <AdminLoginForm />
        </AdmimLoginContainer>
    );
};
export default AdminLoginPage;

const AdmimLoginContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: rgba(65, 143, 34, 0.5);
`;
