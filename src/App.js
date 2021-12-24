import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import Info from "./pages/information/information";
import Milk from "./pages/milkprocess/milk";

function App() {
  return (
    <React.Fragment>
      <div className="dotsimg"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/information" element={<Info />} />
        <Route path="/milkprocess" element={<Milk />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
