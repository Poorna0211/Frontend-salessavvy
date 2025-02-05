import React from "react"; 
import { Routes, Route } from "react-router-dom"; 
 import Login from "./LoginPaage"; 
// import CustomerHomePage from "./CustomerHomePage"; 
// import CartPage from "./CartPage"; 
// import OrderPage from "./OrderPage"; 
// import AdminLogin from "./AdminLogin"; 
// import AdminDashboard from "./AdminDashboard";
import Register from "./Registeration";
const AppRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Register" element={<Register />}/>
        </Routes>
    );
};

export default AppRoutes;