import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { VerifyTid } from "../../redux/action";
import PersonIcon from "@mui/icons-material/Person";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";

//navigation bar
export const Nav = ({ LOGIN }) => {
  const user = sessionStorage.getItem("active");
  return (
    <React.Fragment>
      <nav
        style={
          user
            ? { justifyContent: "space-between" }
            : { justifyContent: "flex-end" }
        }
      >
        {user && (
          <div className="welcome">
            <div className="name">
              <PersonIcon />
              <h3 className="title">aavin milk's</h3>
            </div>
            <div className="name">
              <LocalOfferIcon />
              <h3 className="title">12367184</h3>
            </div>
            <div className="name">
              <LocationOnIcon />
              <h3 className="title">salem</h3>
            </div>
          </div>
        )}
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
            >
              
            </a>
          )}
        </header>
      </nav>
    </React.Fragment>
  );
};

//content body
const Body = ({ LOGIN }) => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { TID } = useSelector((state) => state.data);
  // const [id, setid] = React.useState("");
  const user = sessionStorage.getItem('active');

  // React.useEffect(() => {
  //   if (TID === "verified" && user === "2") {
  //     sessionStorage.setItem("tid", id);
  //     navigate("/information");
  //   }
  //   if (TID === "verified" && user === "3") {
  //     sessionStorage.setItem("tid", id);
  //     navigate("/tracker");
  //   }
  // }, [TID, navigate, id, user]);

  // const submit = (e) => {
  //   e.preventDefault();
  //   if (id) {
  //     dispatch(VerifyTid({ tid: id }));
  //   }
  // };
  return (
    <div className="homecontainer">
      <div className="homebody">
        <span>welcome to</span>
        Block chain based solution for milk procurement and adulteration
        detection
        {user ? (
          <Link to="/information" className="link">
            Enter Data
          </Link>
        ) : (
          <Link to="/login" className="link">
            Get Started
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
