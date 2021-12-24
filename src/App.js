import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";

function App() {
  return (
    <React.Fragment>
      <div className="dotsimg"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
