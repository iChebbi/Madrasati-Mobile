import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button, Avatar } from 'react-native-elements';

import { signIn } from '../services/auth'

export default class SignIn extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Avatar
					width={200}
					height={200}
					rounded
					source={require('../assets/logo.jpg')}
					containerStyle={styles.logo}
				/>

				<Text style={styles.header}>مدرستي</Text>

				<TextInput placeholder="البريد الإلكتروني" keyboardType="email-address" underlineColorAndroid={'white'} style={styles.Input} />
				<TextInput placeholder="كلمة السر" secureTextEntry underlineColorAndroid={'white'} style={styles.Input} />

				<Button onPress={() => signIn().then(this.props.navigation.navigate('AppStack'))} backgroundColor="#00C14F" buttonStyle={styles.button} rounded title="تسجيل الدخول" />
				<Button onPress={() => this.props.navigation.navigate('SignUp')} buttonStyle={styles.button} rounded title="تسجيل حساب" />
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
	header: {
		fontSize: 50,
		color: 'white',
		fontWeight: 'bold',
	},
	Input: {
		textAlign: 'center',
		height: 50,
		width: 300,
		marginTop: 10,
		color: 'white'
	},
	button: {
		marginTop: 20,
		width: 300,
	}
});
