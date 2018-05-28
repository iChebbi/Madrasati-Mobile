import React from 'react'
import {
  Platform,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import {
  StackNavigator,
  SwitchNavigator,
  DrawerNavigator,
  TabNavigator,
  DrawerItems
} from 'react-navigation'
import { Entypo, MaterialIcons } from '@expo/vector-icons'

import { connect } from 'react-redux'
import { getUser } from '../actions/userActions'
import { getHomework } from '../actions/childActions'

import DrawerContent from './drawer'

// Screens import
import AuthLoading from '../screens/Auth/authLoading'

import SignIn from '../screens/Auth/signIn'
import Logout from '../screens/Auth/logout'

import stats from '../screens/Stats/stats'

import children from '../screens/Children/children'

import homeworkList from '../screens/Homework/homeworkList'
import homeworkDetails from '../screens/Homework/homeworkDetails'

import conversationsList from '../screens/Conversations/conversationsList'

import settings from '../screens/Settings/settings'

import exams from '../screens/Exams/exams'

class HeaderLeft extends React.Component {
  refresh = async () => {
    const userToken = await await AsyncStorage.getItem('USER_KEY')
    const currentScreen = this.props.navigation
    switch (currentScreen) {
      case 'الواجبات المنزلية':
        this.props.getHomework(this.props.currentChild)
      case 'الأبناء':
        this.props.getUser(userToken)
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.refresh()}>
        <MaterialIcons
          name="refresh"
          size={30}
          color="white"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => {
  return { currentChild: state.child.currentChild.idstudent }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    getHomework: id => dispatch(getHomework(id))
  }
}

const HeaderLeftRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderLeft)

const navigationOptionsWithDrawer = props => ({
  headerRight: (
    <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
      <Entypo name="menu" size={30} color="white" style={{ marginRight: 10 }} />
    </TouchableOpacity>
  ),
  headerLeft: <HeaderLeftRedux navigation={props.navigation.state.routeName} />,
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
    }
  }
)

export default SwitchNavigator(
  {
    AuthLoading: AuthLoading,
    AuthStack: AuthStack,
		AppStack: AppStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
)
