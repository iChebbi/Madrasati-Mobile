export const getUser = id => {
  return {
    type: "GET_USER",
    payload: {
      request: {
        method: "POST",
        url: "/load_user",
        data: {
          id
        }
      }
    }
  };
};

export const setChild = child => {
  return {
    type: "SET_CHILD",
    payload: child
  };
};