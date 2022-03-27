import React from "react";
import Success from "./pages/success/success";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Info from "./pages/information/information";
// import Milk from "./pages/milkprocess/milk";
import { useSelector } from "react-redux";
import { Nav } from "./pages/home/home";
import QRCode from "./pages/QRgenerater/qrgen";
// import Tracker from "./pages/tracker/tracker";

function App() {
  const { LOGIN } = useSelector((state) => state.data);
  return (
    <React.Fragment>
      <Nav LOGIN={LOGIN} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<Info />} />
        {/* <Route path="/milkprocess" element={<Milk />} /> */}
        <Route path="/barcode" element={<QRCode />} />
        <Route path="/success" element={<Success />} />
        {/* <Route path="/tracker" element={<Tracker />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
