export const setChild = child => {
  return {
    type: 'SET_CHILD',
    payload: child
  }
}

export const getHomework = id => {
  return {
    type: 'GET_HOMEWORK',
    payload: {
      request: {
        method: 'GET',
        url: '/get_homework',
        params: {
          id
        }
      }
    }
  }
}
