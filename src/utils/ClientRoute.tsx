import { Outlet } from 'react-router-dom';
import Header from '../components/layout/clientLayout/header/header';
import Footer from '../components/layout/clientLayout/footer/footer';

const AdminRoute = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
export default AdminRoute;
