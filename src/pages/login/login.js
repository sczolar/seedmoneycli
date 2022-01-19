import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/action";

const Login = () => {
  document.title = "seedmoney-login";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, LOGIN } = useSelector((state) => state.data);
  const [data, setdata] = React.useState({
    username: "",
    password: "",
  });

  React.useEffect(() => {
    if (LOGIN.username) {
      sessionStorage.setItem("userid", LOGIN._id);
      console.log("login user is in console");
      navigate("/");
    }
  }, [LOGIN, navigate]);

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (data.username && data.password) {
      dispatch(LoginUser({ username: data.username, password: data.password }));
      setdata({ username: "", password: "" });
    } else {
      console.log("plese enter the value");
    }
  };
  console.log(data);
  return (
    <div className="login">
      {loading && <h1 className="logloading">loading.....</h1>}
      <form onSubmit={submit}>
        <h2 style={{ textAlign: "center" }}>Login Form</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Society Id
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            onChange={handler}
            value={data.username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            onChange={handler}
            value={data.username}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handler}
            value={data.password}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className="form-text">
          Create a new account ? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
