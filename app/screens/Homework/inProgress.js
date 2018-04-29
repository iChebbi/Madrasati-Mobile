import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  SectionList,
  ActivityIndicator
} from 'react-native'

import { connect } from 'react-redux'
import { getHomework } from '../../actions/childActions'

const A = ['الرياضيات', 'الرياضيات', <Text>Shit</Text>]
const B = ['الرياضيات', 'الرياضيات', 'الرياضيات', 'الرياضيات', 'الرياضيات']
const C = ['الرياضيات', 'الرياضيات']

class HomeworkDue extends Component {
  componentDidMount() {
    if (
      this.props.child.currentChild.idstudent !== this.props.child.homeworkchild
    )
      this.props.getHomework(this.props.child.currentChild.idstudent)
  }

  parseDate = date => {
    const dateObj = new Date()
    const year = dateObj.getFullYear()
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
    const day = dateObj.getDate()

    const today = year + '/' + month + '/' + day
    const tomorrow = year + '/' + month + '/' + (day + 1)
    const yesterday = year + '/' + month + '/' + (day - 1)

    switch (date) {
      case today:
        return 'اليوم'
      case tomorrow:
        return 'غدا'
      case yesterday:
        return 'البارحة'
      default:
        return date
    }
  }

  parseSections = homeworkGroupedByDate => {
    return Object.keys(homeworkGroupedByDate).map(date => {
      return {
        title: this.parseDate(date),
        data: homeworkGroupedByDate[date].map(homework => homework.nom)
      }
    })
  }

  sections = [
    { title: 'اليوم', data: A },
    { title: 'البارحة', data: B },
    { title: 'سابقا', data: C }
  ]

  render() {
    return (
      <React.Fragment>
        {this.props.child.loading && (
          <ActivityIndicator color="black" size={50} />
        )}

        {this.props.child &&
          !this.props.child.loading &&
          this.props.child.homework && (
            <SectionList
              style={styles.container}
              sections={this.parseSections(this.props.child.homework)}
              renderSectionHeader={({ section }) => (
                <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
              )}
              renderItem={({ item }) => (
                <Text style={styles.SectionListItemStyle}> {item} </Text>
              )}
              keyExtractor={(item, index) => index}
            />
          )}
      </React.Fragment>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  text: {
    elevation: 10,
    fontSize: 10
  },
  SectionHeaderStyle: {
    backgroundColor: '#E5E5E5',
    fontSize: 15,
    padding: 3,
    paddingRight: 15,
    textAlign: 'right',
    color: 'black',
    elevation: 5
  },
  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    textAlign: 'right',
    color: '#000',
    backgroundColor: '#F5F5F5'
  }
}

const mapStateToProps = state => {
  return { child: state.child }
}

const mapDispatchToProps = dispatch => {
  return {
    getHomework: id => dispatch(getHomework(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkDue)
