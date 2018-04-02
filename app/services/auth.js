import { AsyncStorage } from "react-native";
import axios from "axios";
import base_url from "./host";


export const signIn = async (email, password) => {
  try {
		const response = await axios.post(`${base_url}/api/authorize`,{email,password},{headers: {"Content-Type": "application/json","Accept": "application/json"}});
		
    console.log(response.status);
		console.log(response.data.id);
		
		AsyncStorage.setItem('USER_KEY',response.data.id)
    return response.status === 200 ? true : false;
	
	} catch (error) {
    return false;
  }
};

export const signOut = () => AsyncStorage.clear();

export const isSignedIn = async () => {
  try {
    const res = await AsyncStorage.getItem('USER_KEY');
    if (res !== null) return true;
    else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
