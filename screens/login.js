import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { Button as ButtonEL, Avatar } from 'react-native-elements';

export default class login extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Avatar
					width={200}
					height={200}
					rounded
					source={require('../assets/logo.jpg')}
					containerStyle={styles.logo}
					onPress={() => console.log("Works!")}
				/>

				<TextInput placeholder="البريد الإلكتروني" keyboardType="email-address" underlineColorAndroid={'white'} style={styles.Input} />
				<TextInput placeholder="كلمة السر" secureTextEntry underlineColorAndroid={'white'} style={styles.Input} />

				<ButtonEL backgroundColor="#00C14F" buttonStyle={styles.button} rounded title="تسجيل الدخول" />
				<ButtonEL buttonStyle={styles.button} rounded title="تسجيل حساب" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#106cc8',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		margin: 20
	},
	Input: {
		textAlign: "center",
		height: 50,
		width: 300,
		marginTop: 10
	},
	button: {
		marginTop: 20,
		width: 300,
	}
});
