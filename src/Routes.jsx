import React from "react"; 
import { Routes, Route } from "react-router-dom"; 
 import Login from "./LoginPaage"; 
// import CustomerHomePage from "./CustomerHomePage"; 
// import CartPage from "./CartPage"; 
// import OrderPage from "./OrderPage"; 
// import AdminLogin from "./AdminLogin"; 
// import AdminDashboard from "./AdminDashboard";
import Dashboard from "./dashboard";
import Register from "./Registeration";
const AppRoutes = ({ setUser }) => {
    return (
        <Routes>
        <Route path="/" element={<Login setUser={setUser}/>} />
        <Route path="register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;