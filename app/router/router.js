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

import DrawerContent from './drawer'

// Screens import
import AuthLoading from '../screens/Auth/authLoading'

import SignIn from '../screens/Auth/signIn'
import SignUp from '../screens/Auth/signUp'
import Logout from '../screens/Auth/logout'

import stats from '../screens/Stats/stats'

import children from '../screens/Children/children'

import homeworkList from '../screens/Homework/homeworkList'
import homeworkDetails from '../screens/Homework/homeworkDetails'

import conversationsList from '../screens/Conversations/conversationsList'

import settings from '../screens/Settings/settings'

import exams from '../screens/Exams/exams'

import Hello from '../screens/hello'

const navigationOptionsWithDrawer = props => ({
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

const navigationOptionsWithBack = props => ({
  headerRight: <View style={{ margin: 15 }} />,
  headerTitle: `${props.navigation.state.routeName}`,
  headerTintColor: 'white',
  headerTitleStyle: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  headerStyle: {
    backgroundColor: '#106cc8'
  }
})

const TabBar = TabNavigator(
  {
    جارية: {
      screen: homeworkList
    },
    سابقة: {
      screen: homeworkList
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

const Stats = StackNavigator({
  إحصائيات: {
    screen: stats,
    navigationOptions: navigationOptionsWithDrawer
  }
})

const Children = StackNavigator({
  الأبناء: {
    screen: children,
    navigationOptions: navigationOptionsWithDrawer
  }
})

const Homework = StackNavigator({
  'الواجبات المنزلية': {
    screen: TabBar,
    navigationOptions: navigationOptionsWithDrawer
  },
  'معطيات الواجب': {
    screen: homeworkDetails,
    navigationOptions: navigationOptionsWithBack
  }
})

const Conversations = StackNavigator({
  الملاحظات: {
    screen: conversationsList,
    navigationOptions: navigationOptionsWithDrawer
  }
})

const Exams = StackNavigator({
  الفروض: {
    screen: exams,
    navigationOptions: navigationOptionsWithDrawer
  }
})

const Settings = StackNavigator({
  الإعدادات: {
    screen: settings,
    navigationOptions: navigationOptionsWithDrawer
  }
})

const AppStack = DrawerNavigator(
  {
    إحصائيات: { screen: Stats },
    الأبناء: { screen: Children },
    'الواجبات المنزلية': { screen: Homework },
    الملاحظات: { screen: Conversations },
    الفروض: { screen: Exams },
    الإعدادات: { screen: Settings },
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
      navigationOptions: navigationOptionsWithBack
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
