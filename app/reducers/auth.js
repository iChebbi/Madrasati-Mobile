import { AsyncStorage } from "react-native";

export default (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, loading: true };
    case "SIGN_IN_SUCCESS":
      AsyncStorage.setItem("USER_KEY", action.payload.data.iduser);
      return {
        ...state,
        loading: false,
        logged: true,
        user: action.payload.data
      };
    case "SIGN_IN_FAIL":
      return {
        ...state,
        loading: false,
        logged: false,
        error: action.error
      };
    default:
      return state;
  }
};
