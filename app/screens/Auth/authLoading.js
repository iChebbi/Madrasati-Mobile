import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native'

import { connect } from 'react-redux'
import { getHomework, setChild } from '../../actions/childActions'
import { getUser } from '../../actions/userActions'

class AuthLoading extends Component {
  bootstrapAuth = async () => {
    try {
      const userToken = await await AsyncStorage.getItem('USER_KEY')
      if (userToken) {
        await this.props.getUser(userToken)

        //Load last currentChild selectd or init with the first child
        let currChildId = await AsyncStorage.getItem('CURR_CHILD_KEY')
        if (currChildId) {
          const currChild = this.props.user.data.children.find(
            obj => obj.idstudent === currChildId
          )
          if (currChild) this.props.setChild(currChild)
        } else {
          if (this.props.user.data.children[0])
            this.props.setChild(this.props.user.data.children[0])
        }
        currChildId = await AsyncStorage.getItem('CURR_CHILD_KEY')
        this.props.getHomework(currChildId)
        this.props.navigation.navigate('AppStack')
      } else {
        this.props.navigation.navigate('AuthStack')
      }
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    await this.bootstrapAuth()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />

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
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
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
  }
})

const mapStateToProps = state => {
  return {
    user: state.user,
    child: state.child,
    currentChild: state.child.currentChild
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    setChild: id => dispatch(setChild(id)),
    getHomework: id => dispatch(getHomework(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading)
