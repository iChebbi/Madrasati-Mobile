export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, loading: true }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case 'GET_USER_FAIL':
      return {
        ...state,
        loading: false,
        response: action.error
      }
    default:
      return state
  }
}
