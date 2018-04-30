import React, { Component } from 'react'
import { Text, SectionList, ActivityIndicator, Alert } from 'react-native'

import { connect } from 'react-redux'
import { getHomework } from '../../actions/childActions'

import { parseDate, today } from '../../utils/date'

class HomeworkList extends Component {
  componentDidMount() {
    if (
      this.props.child.currentChild.idstudent !== this.props.child.homeworkchild
    )
      this.props.getHomework(this.props.child.currentChild.idstudent)
  }

  parseSections = homeworkGroupedByDate => {
    return Object.keys(homeworkGroupedByDate)
      .filter(date => {
        switch (this.props.navigation.state.routeName) {
          case 'جارية':
            return today <= date
          case 'سابقة':
            return today > date
          default:
            return date
        }
      })
      .map(date => {
        return {
          title: parseDate(date),
          data: homeworkGroupedByDate[date].map(homework => homework.nom),
          content: homeworkGroupedByDate[date].map(homework => homework)
        }
      })
  }

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
              renderItem={({ item, index, section }) => (
                <Text
                  onPress={() => {
                    this.props.navigation.navigate(
                      'معطيات الواجب',
                      section.content
                    )
                  }}
                  style={styles.SectionListItemStyle}
                >
                  {item}
                </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkList)
