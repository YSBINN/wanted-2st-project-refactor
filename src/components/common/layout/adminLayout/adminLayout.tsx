import styled from 'styled-components';
import AdminLayoutHeader from './header/header';
import AdminLayoutSide from './side/side';

const AdminLayout = ({ children, type }: any) => {
    return (
        <>
            <AdminLayoutHeader />
            <AdminLayoutMain>
                {type !== 'login' && <AdminLayoutSide />}
                {children}
            </AdminLayoutMain>
        </>
    );
};
export default AdminLayout;

const AdminLayoutMain = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #eee;
`;
