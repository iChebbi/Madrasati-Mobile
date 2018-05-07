import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  Animated,
  Easing
} from 'react-native'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'
import { getUser } from '../../actions/userActions'
import { setChild } from '../../actions/childActions'

import { pictureUrl } from '../../utils/profilePicture'
class Children extends Component {
  state = {
    scale: new Animated.Value(1.25)
  }

  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      easing: Easing.bounce,
      duration: 500
    }).start()
  }

  renderChild = (child, i) => {
    return (
      <View key={i} style={styles.child}>
        <Animated.View style={{ transform: [{ scale: this.state.scale }] }}>
          <Avatar
            width={150}
            height={150}
            rounded
            source={pictureUrl(child)}
            containerStyle={styles.avatar}
            onPress={() => {
              this.props.setChild(child)
              this.props.navigation.navigate('DrawerOpen')
            }}
          />
          <Text style={styles.title}>
            {child.firstnamear + ' ' + child.lastnamear}
          </Text>
        </Animated.View>
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
    paddingLeft: 5,
    flexWrap: 'wrap',
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
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    setChild: id => dispatch(setChild(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Children)
