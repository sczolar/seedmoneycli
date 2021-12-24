import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  document.title = "seedmoney-home"
  const { LOGIN } = useSelector((state) => state.data);
  return (
    <React.Fragment>
      {LOGIN.username && <h1 className="title">welcome {LOGIN.username}</h1>}
      <header className="home">
        {!LOGIN.username ? (
          <React.Fragment>
            <Link to="/login" className="link">
              Login
            </Link>
            <Link to="/register" className="link">
              Register
            </Link>
          </React.Fragment>
        ) : (
          <a href="/" className="link">
            Logout
          </a>
        )}
      </header>
    </React.Fragment>
  );
};

export default Home;
