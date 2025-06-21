// src/AppRoutes.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout'; 
// Loader component for Suspense fallback - can be very minimal as Layout.jsx has its own
// For simplicity, using a basic text fallback or null if Layout's loader is quick enough.
// Alternatively, could import and use the same Loader from components if desired.
const MinimalSuspenseFallback = () => <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>Loading page...</div>;

const Home = lazy(() => import('../pages/Home/Home'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const Single_Product = lazy(() => import('../pages/Single_Product/Single_Product'));
const Product_Comparison = lazy(() => import('../pages/Product_Comparison/Product_Comparison'));
const CheckOut = lazy(() => import('../pages/CheckOut/CheckOut'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const Wishlist = lazy(() => import('../pages/Wishlist/Wishlist'));
const Error404 = lazy(() => import('../pages/Error404/Error404'));


const AppRoutes = () => {
  return (
    <Suspense fallback={<MinimalSuspenseFallback />}>
      <Routes>
        {/* Layout wrapper for all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Single_Product />} />
          <Route path="/comparison" element={<Product_Comparison />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
