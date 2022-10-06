import { Outlet } from 'react-router-dom';
import Header from '../components/client/header/header';
import Footer from '../components/client/footer/footer';

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
