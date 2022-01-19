import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useDispatch, useSelector } from "react-redux";
import { CreateUser } from "../../redux/action";

const Register = () => {
  document.title = "seedmoney-register";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, MESSAGE } = useSelector((state) => state.data);
  const [data, setdata] = React.useState({
    username: "",
    password: "",
    email: "",
    roll: "0",
  });

  React.useEffect(() => {
    if (MESSAGE) {
      console.log("user created");
      navigate("/login");
    }
  }, [MESSAGE, navigate]);

  const handler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  // const focuse = document.getElementById('username').focus();
  const submit = (e) => {
    e.preventDefault();
    if (data.username && data.password && data.email) {
      dispatch(
        CreateUser({
          username: data.username,
          password: data.password,
          email: data.email,
          roll: data.roll,
        })
      );
      setdata({ username: "", password: "", email: "" });
    } else {
      console.log("plese enter the value");
    }
  };
  console.log(data);
  return (
    <div className="register">
      <form onSubmit={submit}>
        {loading && <h1 className="logloading">loading.....</h1>}
        <h2 style={{ textAlign: "center" }}>Register Form</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Society Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={handler}
            value={data.username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Society Id
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={handler}
            value={data.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mobile Number
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Email Id
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
           District
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Pin Code
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Zone
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
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <div className="form-text">
          Already have an account ? <Link to="/login">login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
