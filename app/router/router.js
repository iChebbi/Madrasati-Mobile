import React from 'react';
import { Platform, StatusBar, View, Text, Button } from "react-native";
import { StackNavigator, SwitchNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import AuthLoading from '../screens/authLoding'
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import Hello from '../screens/hello';
import Logout from '../screens/logout'
import DrawerContent from './drawer'

const headerStyle = {
	marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}


const AppStack = DrawerNavigator(
	{
		'الواجبات المنزلية': { screen: Hello },
		'الملاحظات': { screen: Hello },
		'الفروض': { screen: Hello },
		'الأبناء': { screen: Hello },
		'الإعدادات': { screen: Hello },
		'الخروج': { screen: Logout }
	},
	{
		drawerPosition: 'right',
		contentComponent: DrawerContent,
		initialRouteName: 'الواجبات المنزلية'
	}
);

const AuthStack = StackNavigator(
	{
		SignIn: {
			screen: SignIn,
			navigationOptions: {
				header: null,
			}
		},
		SignUp: {
			screen: SignUp,
			navigationOptions: {
				headerStyle: {
					backgroundColor: '#106cc8',
				},
				headerTintColor: 'white'
			}
		}
	},
	{
		initialRouteName: 'SignIn',
	});

export default SwitchNavigator({
	AuthLoading: AuthLoading,
	AuthStack: AuthStack,
	AppStack: AppStack,
},
	{
		initialRouteName: 'AuthLoading'
	}
);