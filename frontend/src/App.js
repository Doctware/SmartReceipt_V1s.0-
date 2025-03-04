import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/pages/UserDashboard";
import { Navigate } from "react-router-dom";
import GenerateReceipt from "./components/pages/GenerateReceipt";
import Profile from "./components/pages/Profile";
import PrivateRoute from "./components/PrivateRoute";


const APP = () => {
  const isAuthenticated = !!localStorage.getItem("accessToken"); //checks if teh user is authenticated
  return (
    <Router>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/loginpage" element={<LoginPage></LoginPage>}></Route>
          <Route path="/UserDashboard" element={<PrivateRoute component={UserDashboard} isAuthenticated={isAuthenticated} />} />
          <Route path="/header" element={<Header></Header>} />
          <Route path="/logout" element={<Navigate to="/" replace />} onEnter={() => {
            localStorage.clear();
          }} />
          <Route path="/generate-receipt" element={<PrivateRoute component={GenerateReceipt} isAuthenticated={isAuthenticated}/>} />
          <Route path="/profile" element={<PrivateRoute component={Profile} isAuthenticated={isAuthenticated}/>} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
};

export default APP;