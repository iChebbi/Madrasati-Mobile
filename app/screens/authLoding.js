import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';


import { isSignedIn } from '../services/auth'

export default class Hello extends Component {
	constructor(props) {
		super(props)
		this.bootstrapAuth()
	}

	bootstrapAuth = async () => {
		const userToken = await isSignedIn();
		this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
	}
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
				<ActivityIndicator color="white" size={50} />
			</View>
		)
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
});
