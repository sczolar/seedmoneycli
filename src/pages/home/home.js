import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";

//navigation bar
const Nav = ({ LOGIN }) => {
  const user = LOGIN.username;
  return (
    <React.Fragment>
      <nav
        style={
          user
            ? { justifyContent: "space-between" }
            : { justifyContent: "flex-end" }
        }
      >
        {user && <h3 className="title">welcome {user}</h3>}
        <header className="home">
          {!user ? (
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
      </nav>
    </React.Fragment>
  );
};

//content body
const Body = ({ LOGIN }) => {
  const user = LOGIN.username;
  return (
    <div className="homecontainer">
      <div className="homebody">
        <span>welcome to</span>
        Block chain based solution for milk procurement and adulteration
        detection
        {user ? (
          <Link to="/information" className="link">
            Data collection
          </Link>
        ) : (
          <Link to="/login" className="link">
            Login
          </Link>
        )}
      </div>
      <div className="homeimg">
        <lottie-player
          src="https://assets1.lottiefiles.com/packages/lf20_ffqpri3j.json"
          background="transparent"
          speed="1"
          style={{ width: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

const Home = () => {
  document.title = "seedmoney-home";
  const { LOGIN } = useSelector((state) => state.data);
  return (
    <React.Fragment>
      <Nav LOGIN={LOGIN} />
      <Body LOGIN={LOGIN} />
    </React.Fragment>
  );
};

export default Home;
