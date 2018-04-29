import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hello extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello</Text>
			</View>
		)
	}
}


const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
	},
	text: {
		elevation: 10,
		fontSize: 10,
	}
}