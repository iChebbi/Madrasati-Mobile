import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Font, AppLoading } from 'expo';
import MaterialIcon from 'react-native-vector-icons'

import { isSignedIn } from '../../services/auth'

export default class AuthLoading extends Component {

	bootstrapAuth = async () => {
		const userToken = await isSignedIn();
		this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
	}

	async	componentDidMount() {
		await this.bootstrapAuth()
	}

	render() {
		return (
			<View style={styles.container}>
				<Avatar
					width={150}
					height={150}
					rounded
					source={require('../../assets/logo.jpg')}
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
	}, logo: {
		margin: 20,
		elevation: 10,
	},
	header: {
		fontSize: 50,
		color: 'white',
		fontWeight: 'bold',
		textShadowOffset: {
			width: 0,
			height: 3
		},
		textShadowRadius: 30
	},
});
