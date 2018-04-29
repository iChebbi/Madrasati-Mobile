import { AsyncStorage } from 'react-native'

export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHILD':
      AsyncStorage.setItem('CURR_CHILD_KEY', action.payload.idstudent)
      return {
        ...state,
        currentChild: action.payload
      }
    case 'GET_HOMEWORK':
      return { ...state, loading: true }
    case 'GET_HOMEWORK_SUCCESS':
      return {
        ...state,
        loading: false,
        homework: action.payload.data,
        homeworkchild: action.payload.config.params.id
      }
    case 'GET_HOMEWORK_FAIL':
      return {
        ...state,
        loading: false,
        response: action.error
      }
    default:
      return state
  }
}
