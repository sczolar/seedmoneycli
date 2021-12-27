import * as types from "./actiotype";
import axios from "axios";
import { API } from "../api/api";
import {
  userquery,
  userquery_create,
  create_info,
  Tid_verify,
  ETEdetail,
} from "../api/userquery";

//tloding
// const TLoding = () => ({
//   type: types.TLODING,

// });

//message
const Message = (msg) => ({
  type: types.MESSAGE,
  payload: msg,
});

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

//Infomation
const Info = (data) => ({
  type: types.INFO,
  payload: data,
});

//final milk data
const Milk = (data) => ({
  type: types.MILK,
  payload: data,
});

//verify transaction id
const Tid = (data) => ({
  type: types.TID,
  payload: data,
});

//verify transaction id
const ETE = (data) => ({
  type: types.ETE,
  payload: data,
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

//create info
export const CreateInfo = (info) => {
  return function (dispatch) {
    dispatch(Info(info));
  };
};

//create info
export const CreateMilk = (info) => {
  return function (dispatch) {
    axios
      .post(
        `${API}`,
        {
          query: create_info,
          variables: info,
        },
        {
          headers: {
            userid: sessionStorage.getItem("userid"),
          },
        }
      )
      .then((res) => {
        if (res.data.data.createinfo) {
          dispatch(Milk(res.data.data.createinfo));
        }
        if (res.data.errors.length) {
          dispatch(Errors(res.data.errors[0].message));
        }
      })
      .catch((err) => console.log("Error:", err.message));
  };
};

//verify transaction id
export const VerifyTid = (data) => {
  return function (dispatch) {
    axios
      .post(
        `${API}`,
        {
          query: Tid_verify,
          variables: data,
        },
        {
          headers: {
            userid: sessionStorage.getItem("userid"),
          },
        }
      )
      .then((res) => {
        if (res.data.data.getTid) {
          dispatch(Tid(res.data.data.getTid));
        }
        if (res.data.errors.length) {
          dispatch(Errors(res.data.errors[0].message));
        }
      })
      .catch((err) => console.log("Error:", err.message));
  };
};

//get entire transaction detail
export const EtoE = (data) => {
  return function (dispatch) {
    axios
      .post(
        `${API}`,
        {
          query: ETEdetail,
          variables: data,
        },
        {
          headers: {
            userid: sessionStorage.getItem("userid"),
          },
        }
      )
      .then((res) => {
        if (res.data.data.transdetail) {
          dispatch(ETE(res.data.data.transdetail));
        }
        if (res.data.errors.length) {
          dispatch(Errors(res.data.errors[0].message));
        }
      })
      .catch((err) => console.log("Error:", err.message));
  };
};
