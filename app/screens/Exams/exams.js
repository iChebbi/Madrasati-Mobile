import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ScrollView
} from 'react-native'

import { Calendar, CalendarList, Agenda } from 'react-native-calendars'

import { connect } from 'react-redux'
import { getHomework, setChild } from '../../actions/childActions'
import { getUser } from '../../actions/userActions'

class Exams extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Calendar
          style={{
            flex: 3,
            elevation: 2
          }}
        />
        <View style={{ flex: 2 }}>
          <ScrollView bounces>
            <TouchableNativeFeedback>
              <View style={styles.sectionListItemStyle}>
                <View style={styles.sectionListItemText}>
                  <Text>فرض رياضيات</Text>
                  <Text style={styles.smallText}>
                    تعد بداية بالعمل جديداً في. يتم حصدت فقامت الإتحاد .
                  </Text>
                </View>
                <View>
                  <Text>10:00</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.sectionListItemStyle}>
                <View style={styles.sectionListItemText}>
                  <Text>فرض رياضيات</Text>
                  <Text style={styles.smallText}>
                    تعد بداية بالعمل جديداً في. يتم حصدت فقامت الإتحاد .
                  </Text>
                </View>
                <View>
                  <Text>10:00</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.sectionListItemStyle}>
                <View style={styles.sectionListItemText}>
                  <Text>فرض رياضيات</Text>
                  <Text style={styles.smallText}>
                    تعد بداية بالعمل جديداً في. يتم حصدت فقامت الإتحاد .
                  </Text>
                </View>
                <View>
                  <Text>10:00</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.sectionListItemStyle}>
                <View style={styles.sectionListItemText}>
                  <Text>فرض رياضيات</Text>
                  <Text style={styles.smallText}>
                    تعد بداية بالعمل جديداً في. يتم حصدت فقامت الإتحاد .
                  </Text>
                </View>
                <View>
                  <Text>10:00</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.sectionListItemStyle}>
                <View style={styles.sectionListItemText}>
                  <Text>فرض رياضيات</Text>
                  <Text style={styles.smallText}>
                    تعد بداية بالعمل جديداً في. يتم حصدت فقامت الإتحاد .
                  </Text>
                </View>
                <View>
                  <Text>10:00</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
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

export default connect(mapStateToProps, mapDispatchToProps)(Exams)
