export const getUser = id => {
  return {
    type: 'GET_USER',
    payload: {
      request: {
        method: 'GET',
        url: '/load_user',
        params: {
          id
        }
      }
    }
  }
}
