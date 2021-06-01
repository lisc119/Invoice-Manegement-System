import { SET_USER, SET_TOKEN } from "../actions/actionTypes";

const initialState = {
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      //   const newState = { ...state };
      //   newState.token = action.payload;
      //   return newState;
      const token = action.payload;
      console.log("in authReducer, token: ", token);
      return { ...state, token: token };
    }
    case SET_USER: {
      const newState = { ...state };
      newState.token = action.payload[0];
      newState.user = action.payload[1];
      return newState;
    }
    case SET_TOKEN: {
      const newState = { ...state };
      newState.token = action.payload;
      return newState;
    }
    case "LOGOUT": {
      console.log("clearing local storage");
      console.log(localStorage);
      localStorage.clear();
      let state = { ...initialState };
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
