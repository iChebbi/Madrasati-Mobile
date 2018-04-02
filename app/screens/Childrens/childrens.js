import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

const childrens = [
	{ name: 'أسماء', 'gender': 'girl' },
	{ name: 'أحمد', 'gender': 'boy' }
]

export default class Hello extends Component {

	renderChild = (child, i) => {
		const pictureUrl = (child.gender === 'girl') ? require('../../assets/girl.png') : require('../../assets/boy.png')
		return (
			<View key={i} style={styles.child}>
				<Avatar
					width={150}
					height={150}
					rounded
					source={pictureUrl}
					containerStyle={styles.avatar}
					onPress={() => { console.log() }} />
				<Text style={styles.title}> {child.name} </Text>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{
					childrens.map((child, i) => {
						return this.renderChild(child, i)
					})
				}
			</View>
		)
	}
}


const styles = {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#106cc8'
	},
	child: {
		margin: 25
	},
	avatar: {
		elevation: 10,
	},
	text: {
		elevation: 10,
		fontSize: 10,
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		textShadowOffset: {
			width: 0,
			height: 3
		},
		textShadowRadius: 20,
		marginTop: 10
	}
}