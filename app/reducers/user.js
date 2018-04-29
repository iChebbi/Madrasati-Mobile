import { AsyncStorage } from "react-native";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, loading: true };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case "GET_USER_FAIL":
      return {
        ...state,
        loading: false,
        response: action.error
      };
    case "SET_CHILD":
      AsyncStorage.setItem("CURR_CHILD_KEY", action.payload.idstudent);
      return {
        ...state,
        currentChild: action.payload
      };
    default:
      return state;
  }
};
