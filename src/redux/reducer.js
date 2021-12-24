import * as types from "./actiotype";
const initial = {
  tloading: false,
  loading: false,
  ERROR: [false],
  LOGIN: {},
  MESSAGE: "",
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    //Message
    case types.MESSAGE:
      return {
        ...state,
        tloading: false,
        loading: false,
        ERROR: [false],
        MESSAGE: action.payload,
      };
    //Loding
    case types.TLODING:
      return {
        ...state,
        tloading: true,
        ERROR: [false],
      };
    //Loding
    case types.LODING:
      return {
        ...state,
        loading: true,
        ERROR: [false],
      };
    //Error
    case types.ERROR:
      return {
        ...state,
        loading: false,
        tloading: false,
        ERROR: [true, action.payload],
      };
    //login
    case types.LOGIN:
      return {
        ...state,
        LOGIN: action.payload,
        loading: false,
        tloading: false,
      };
    default:
      return state;
  }
};

export default reducer;
