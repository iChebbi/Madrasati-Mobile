import React from 'react'
import {
  Platform,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import {
  StackNavigator,
  SwitchNavigator,
  DrawerNavigator,
  TabNavigator,
  DrawerItems
} from 'react-navigation'
import { Entypo } from '@expo/vector-icons'

import AuthLoading from '../screens/Auth/authLoading'

import SignIn from '../screens/Auth/signIn'
import SignUp from '../screens/Auth/signUp'
import Logout from '../screens/Auth/logout'

import DrawerContent from './drawer'

import Hello from '../screens/hello'

import inProgress from '../screens/Homework/inProgress'
import done from '../screens/Homework/done'
import Childrens from '../screens/Children/children'

const navigationOptions = props => ({
  headerRight: (
    <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
      <Entypo name="menu" size={30} color="white" style={{ marginRight: 10 }} />
    </TouchableOpacity>
  ),
  headerLeft: <View style={{ marginLeft: 10 }} />,
  headerTitle: `${props.navigation.state.routeName}`,
  headerTintColor: 'white',
  headerTitleStyle: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  headerStyle: {
    backgroundColor: '#106cc8',
    elevation: 0
  }
})

const TabBar = TabNavigator(
  {
    جاري: {
      screen: inProgress
    },
    تم: {
      screen: inProgress
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#106cc8',
        borderBottomColor: 'white'
      },
      labelStyle: {
        fontSize: 20
      }
    }
  }
)

const homework = StackNavigator({
  'الواجبات المنزلية': {
    screen: props => <TabBar />,
    navigationOptions
  }
})

const childrens = StackNavigator({
  الأبناء: {
    screen: props => <Childrens {...props} />,
    navigationOptions
  }
})

const AppStack = DrawerNavigator(
  {
    الأبناء: { screen: childrens },
    'الواجبات المنزلية': { screen: homework },
    الملاحظات: { screen: Hello },
    الفروض: { screen: Hello },
    الإعدادات: { screen: Hello },
    الخروج: { screen: Logout }
  },
  {
    drawerPosition: 'right',
    contentComponent: DrawerContent,
    initialRouteName: 'الأبناء'
  }
)

const AuthStack = StackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null
      }
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#106cc8'
        },
        headerTintColor: 'white'
      }
    }
  },
  {
    initialRouteName: 'SignIn'
  }
)

export default SwitchNavigator(
  {
    AuthLoading: AuthLoading,
    AuthStack: AuthStack,
    AppStack: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)
