import { AsyncStorage } from "react-native";

export const USER_KEY = "iChebbi";

export const signIn = () => AsyncStorage.setItem(USER_KEY, "true");

export const signOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = async () => {
	try {
		const res = await AsyncStorage.getItem(USER_KEY)
		console.log(res);
		if (res !== null) return true;
		else return false;
	} catch (err) {
		console.log(err)
		return false;
	}
}