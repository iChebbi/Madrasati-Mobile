export const signIn = (email, password) => {
  return {
    type: 'SIGN_IN',
    payload: {
      request: {
        method: 'POST',
        url: '/authorize',
        data: {
          email,
          password
        }
      }
    }
  }
}
