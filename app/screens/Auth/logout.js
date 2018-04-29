import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class Logout extends Component {
	constructor(props) {
		super(props);
		AsyncStorage.clear()
		this.props.navigation.navigate('AuthStack')
	}
	render() {
		return (
			<View>
				<ActivityIndicator color="blue" size={50} />
			</View>
		)
	}
}
