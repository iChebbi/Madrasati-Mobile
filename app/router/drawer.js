import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { DrawerItems, DrawerNavigator } from 'react-navigation'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'

class DrawerContent extends React.Component {
  render() {
    return (
      <View>
        {!this.props.currentChild && (
          <View style={styles.currentUser}>
            <ActivityIndicator color="white" size={50} />
          </View>
        )}
        {this.props.currentChild && (
          <View style={styles.currentUser}>
            <Avatar
              width={120}
              height={120}
              rounded
              source={
                this.props.currentChild.sexe === 'male'
                  ? require('../assets/boy.png')
                  : require('../assets/girl.png')
              }
              containerStyle={styles.logo}
            />
            <Text style={styles.title}>
              {this.props.currentChild.firstnamear +
                ' ' +
                this.props.currentChild.lastnamear}
            </Text>
          </View>
        )}
        <DrawerItems {...this.props} labelStyle={styles.drawer} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 20
  },
  currentUser: {
    backgroundColor: '#106cc8',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center'
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

const mapStateToProps = state => {
  return {
    currentChild: state.child.currentChild
  }
}

export default connect(mapStateToProps)(DrawerContent)
