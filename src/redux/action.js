import * as types from "./actiotype";
import axios from "axios";
import { API } from "../api/api";
import { userquery, userquery_create } from "../api/userquery";

//tloding
// const TLoding = () => ({
//   type: types.TLODING,
  
// });

//message
const Message = (msg)=>({
  type: types.MESSAGE,
  payload: msg,
})

//loding
const Loding = () => ({
  type: types.LODING,
});

//Errors
const Errors = (err) => ({
  type: types.ERROR,
  payload: err,
});

//Login
const LoginData = (logindata) => ({
  type: types.LOGIN,
  payload: logindata,
});

//Login request
export const LoginUser = (userdata) => {
  return function (dispatch) {
    dispatch(Loding());
    axios
      .post(`${API}`, {
        query: userquery,
        variables: userdata,
      })
      .then((res) => {
        if (res.data.data.user) {
          dispatch(LoginData(res.data.data.user));
        }
        if (res.data.errors.length) {
          dispatch(Errors(res.data.errors[0].message));
        }
      })
      .catch((err) => console.log("Error:", err.message));
  };
};

//Login request
export const CreateUser = (userdata) => {
  return function (dispatch) {
    dispatch(Loding());
    axios
      .post(`${API}`, {
        query: userquery_create,
        variables: userdata,
      })
      .then((res) => {
        if (res.data.data.createuser) {
          dispatch(Message("user created"));
        }
        if (res.data.errors.length) {
          dispatch(Errors(res.data.errors[0].message));
        }
      })
      .catch((err) => console.log("Error:", err.message));
  };
};
