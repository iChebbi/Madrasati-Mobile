import React, { Component } from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'

export default class Hello extends Component {
  state = {
    push: false
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.sectionHeaderStyle}>
            <Text>إعدادات عامة</Text>
          </View>
          <View style={styles.sectionListItemStyle}>
            <Text style={styles.itemText}>إشعارات</Text>
            <Switch
              value={this.state.push}
              onValueChange={() => this.setState({ push: !this.state.push })}
              style={styles.switch}
            />
          </View>
        </View>
        <View style={styles.signature}>
          <Text style={styles.signatureText}> &copy; مدرستي </Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
		flex: 1,
		justifyContent : 'space-between'
  },
  itemText: {
    fontSize: 20,
    flex: 5,
    paddingHorizontal: 5
  },
  sectionHeaderStyle: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row-reverse',
    elevation: 0,
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  sectionListItemStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#F5F5F5',
    flexDirection: 'row-reverse',
    paddingVertical: 20,
    paddingHorizontal: 5
  },
  switch: {
    paddingHorizontal: 5
  },
  signature: {
    padding: 20,
    alignItems: 'center'
  },
  signatureText: {
    fontSize: 15
  }
}
