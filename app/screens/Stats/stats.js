import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native'

import { Card, Avatar } from 'react-native-elements'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import { timestampToDate } from '../../utils/date'

import { connect } from 'react-redux'
import { getHomework, setChild } from '../../actions/childActions'
import { getUser } from '../../actions/userActions'

import { pictureUrl } from '../../utils/profilePicture'

class Stats extends Component {
  renderChildCard = (child, i) => {
    return (
      <View style={{ margin: 0 }} key={i}>
        <Card
          containerStyle={{ margin: 10 }}
          style={{ flex: 1}}
        >
          <View style={styles.userCard}>
            <Avatar
              width={100}
              height={100}
              rounded
              source={pictureUrl(child)}
            />
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center'
              }}
            >
              <Text>الإسم : {child.firstnamear + ' ' + child.lastnamear}</Text>
              <Text> الجنس : {child.sexe === 'female' ? 'بنت' : 'ولد'}</Text>
              <Text> تاريخ الولادة : {timestampToDate(child.birthday)}</Text>
            </View>
          </View>
        </Card>
      </View>
    )
  }

  render() {
    return (
      <ScrollView bounces style={styles.container}>
        {this.props.user.loading && (
          <ActivityIndicator color="white" size={50} />
        )}
        {this.props.user &&
          !this.props.user.loading &&
          this.props.user.data &&
          this.props.user.data.children.map((child, i) => {
            return this.renderChildCard(child, i)
          })}
      </ScrollView>
    )
  }
}

const styles = {
  container: {
		flex: 1,
    marginBottom: 10
  },
  userCard: {
    margin: 0,
    flexDirection: 'row'
  },
  sectionListItemText: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 10
  },
  sectionListItemStyle: {
    flexDirection: 'row-reverse',
    padding: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#F5F5F5'
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
