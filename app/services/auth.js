import { AsyncStorage } from 'react-native'
import axios from 'axios'
import { baseUrl, reqParmeters } from './host'

export const signIn = async (email, password) => {
  try {
    const response = await axios.post(
      `${baseUrl}/api/authorize`,
      { email, password },
      reqParmeters
    )

    AsyncStorage.setItem('USER_KEY', response.data.parent.iduser)
    return response.status === 200 ? true : false
  } catch (error) {
    return false
  }
}

export const signOut = () => AsyncStorage.clear()

export const isSignedIn = async () => {
  try {
    const res = await AsyncStorage.getItem('USER_KEY')
    if (res !== null) return true
    else return false
  } catch (err) {
    console.log(err)
    return false
  }
}
