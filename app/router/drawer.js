import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { DrawerItems, DrawerNavigator } from 'react-navigation';
import { Avatar } from 'react-native-elements';

export default class DrawerContent extends React.Component {
	constructor(props) {
		super(props)
		this.props = props;
	}
	render() {
		return (
			<View>
				<View
					style={{
						backgroundColor: '#106cc8',
						height: 250,
						alignItems: 'center',
						justifyContent: 'center',
					}} >
					<Avatar
						width={120}
						height={120}
						rounded
						source={require('../assets/girl.png')}
						containerStyle={styles.logo}
					/>
					<Text style={styles.title}>
						أسماء
						</Text>
				</View>
				<DrawerItems {...this.props} labelStyle={styles.drawer} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	logo: {
		marginTop: 20
	},
	drawer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 15
	},
	title: {
		color: 'white',
		fontSize: 30
	}
})