import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'
import { getUser } from '../../actions/userActions'
import { setChild } from '../../actions/childActions'

const childrens = [
  { name: 'أسماء', gender: 'girl' },
  { name: 'أحمد', gender: 'boy' }
]

class Children extends Component {
  async componentDidMount() {
    // const currUserId = await AsyncStorage.getItem('USER_KEY')
    // await this.props.getUser(currUserId)

    // //Load last currentChild selectd
    // const currChildId = await AsyncStorage.getItem('CURR_CHILD_KEY')
    // if (currChildId) {
    //   const currChild = this.props.user.data.children.find(
    //     obj => obj.idstudent === currChildId
    //   )
    //   this.props.setChild(currChild)
    // }
  }

  renderChild = (child, i) => {
    const pictureUrl =
      child.sexe === 'male'
        ? require('../../assets/boy.png')
        : require('../../assets/girl.png')
    return (
      <View key={i} style={styles.child}>
        <Avatar
          width={150}
          height={150}
          rounded
          source={pictureUrl}
          containerStyle={styles.avatar}
          onPress={() => {
            this.props.setChild(child)
            this.props.navigation.navigate('DrawerOpen')
          }}
        />
        <Text style={styles.title}>
          {' '}
          {child.firstnamear + ' ' + child.lastnamear}{' '}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.user.loading && (
          <ActivityIndicator color="white" size={50} />
        )}
        {this.props.user &&
          !this.props.user.loading &&
          this.props.user.data &&
          this.props.user.data.children.map((child, i) => {
            return this.renderChild(child, i)
          })}
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
    elevation: 10
  },
  text: {
    elevation: 10,
    fontSize: 10
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

const mapStateToProps = state => {
  return {
		user: state.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    setChild: id => dispatch(setChild(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Children)
