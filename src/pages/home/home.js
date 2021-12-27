import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { VerifyTid } from "../../redux/action";

//navigation bar
export const Nav = ({ LOGIN }) => {
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
            <a
              href="/"
              className="link"
              onClick={() => {
                sessionStorage.setItem("userid", "");
                sessionStorage.setItem("tid", "");
              }}
            >
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { TID } = useSelector((state) => state.data);
  const [id, setid] = React.useState("");
  const user = LOGIN.roll;

  React.useEffect(() => {
    if (TID === "verified" && user === "2") {
      sessionStorage.setItem("tid", id);
      navigate("/information");
    }
    if (TID === "verified" && user === "3") {
      sessionStorage.setItem("tid", id);
      navigate("/tracker");
    }
  }, [TID, navigate, id, user]);

  const submit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(VerifyTid({ tid: id }));
    }
  };
  return (
    <div className="homecontainer">
      <div className="homebody">
        <span>welcome to</span>
        Block chain based solution for milk procurement and adulteration
        detection
        {user === "1" ? (
          <Link to="/information" className="link">
            Create Data
          </Link>
        ) : user === "2" ? (
          <form onSubmit={submit} className="transfo">
            <input
              type="text"
              className="form-control"
              id="transaction"
              name="Transaction Id"
              placeholder="Transaction ID"
              value={id}
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
            <button type="submit">Verify</button>
          </form>
        ) : user === "3" ? (
          <form onSubmit={submit} className="transfo">
            <input
              type="text"
              className="form-control"
              id="transaction"
              name="Transaction Id"
              placeholder="Transaction ID"
              value={id}
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
            <button type="submit">Verify</button>
          </form>
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
      <Body LOGIN={LOGIN} />
    </React.Fragment>
  );
};

export default Home;
