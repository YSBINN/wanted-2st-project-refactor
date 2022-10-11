import { Outlet } from 'react-router-dom';
import AdminLayout from '../components/layout/adminLayout/adminLayout';

const AdminRoute = () => {
    return (
        <AdminLayout>
            <Outlet />
        </AdminLayout>
    );
};
export default AdminRoute;
