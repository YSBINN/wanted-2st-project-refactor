import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLoginPage from './pages/admin/login';
import AdminProdListPage from './pages/admin/prodList';
import AdminProdPage from './pages/admin/prod';
import GlobalStyle from './styles/global';
import ClientRoute from './utils/ClientRoute';
import AdminRoute from './utils/adminRoute';
import ProdDetail from './pages/client/prodDetail';
import Orders from './pages/client/orders';
import ProductPage from './pages/client/prodList';
import Order from './pages/client/order/order';
import React from 'react';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    {/* client */}
                    <Route element={<ClientRoute />}>
                        <Route path="/prodDetail/:id" element={<ProdDetail />} />
                        <Route path="/" element={<ProductPage />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/orders" element={<Orders />} />
                    </Route>
                    {/* admin */}
                    <Route path="/admin" element={<AdminLoginPage />} />
                    <Route element={<AdminRoute />}>
                        <Route path="/admin/prodList" element={<AdminProdListPage />} />
                        <Route path="/admin/prod" element={<AdminProdPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;
