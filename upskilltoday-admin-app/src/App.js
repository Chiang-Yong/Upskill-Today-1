import React, { Children } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import UserContextProvider from "./components/UserContext";
import { useAuth } from "./components/AuthProvider";

import './App.css';
import Admin from './pages/Admin';
//import AuthNavbar from "./components/AuthNavbar";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import AddUsersPage from "./pages/AddUsersPage";
import NewEnquiries from "./pages/NewEnquiries";
import NewPartners from "./pages/NewPartners";
import NewRegisters from "./pages/NewRegisters";
import UsersList from "./pages/UsersList";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Visitors from "./pages/Visitors";

function App() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const PrivateRoute = ({ auth, children }) => {
    return auth ? children : navigate("/Admin");
  };

  return (
    <>
      <UserContextProvider>
        {auth ? <Admin/>: <Navbar />}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} /> 
          <Route path="Login" element={<LoginPage />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="addusers" element={<AddUsersPage />} />
          <Route path="NewEnquiries" element={<NewEnquiries />} />
          <Route path="NewPartners" element={<NewPartners />} />
          <Route path="NewRegisters" element={<NewRegisters />} />
          <Route path="Users" element= {<UsersList />} />
          <Route path="Logout" element={<Home />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Visitors" element={<Visitors />} />
          <Route path="Settings" element={<Settings />} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
