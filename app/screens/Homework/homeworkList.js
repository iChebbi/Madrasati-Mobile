import React, { Component } from 'react'
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  TouchableNativeFeedback
} from 'react-native'

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
          data: homeworkGroupedByDate[date]
        }
      })
  }

  render() {
    const sections =
      this.props.child && !this.props.child.loading && this.props.child.homework
        ? this.parseSections(this.props.child.homework)
        : ''

    return (
      <React.Fragment>
        {this.props.child.loading && (
          <View style={styles.container}>
            <ActivityIndicator color="black" size={50} />
          </View>
        )}
        {this.props.child &&
          !this.props.child.loading &&
          this.props.child.homework &&
          sections.length !== 0 && (
            <SectionList
              style={styles.flex}
              sections={sections}
              renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeaderStyle}> {section.title} </Text>
              )}
              renderItem={({ item, index, section }) => (
                <TouchableNativeFeedback
                  onPress={() => {
                    this.props.navigation.navigate(
                      'معطيات الواجب',
                      section.data[index]
                    )
                  }}
                >
                  <View style={styles.sectionListItemStyle}>
                    <View style={styles.sectionListItemText}>
                      <Text>{section.data[index].nom}</Text>
                      <Text>
                        {section.data[index].description.slice(0, 50) + '...'}
                      </Text>
                    </View>
                    <View>
                      <Text>{section.data[index].code}</Text>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              )}
              keyExtractor={(item, index) => index}
            />
          )}

        {!this.props.child.loading &&
          sections.length === 0 && (
            <View style={styles.container}>
              <Text>لا يوجد واجبات</Text>
            </View>
          )}
      </React.Fragment>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1
  },
  text: {
    elevation: 10,
    fontSize: 10
  },
  sectionHeaderStyle: {
    backgroundColor: '#E5E5E5',
    fontSize: 15,
    padding: 3,
    paddingRight: 15,
    textAlign: 'right',
    color: 'black',
    elevation: 5
  },
  sectionListItemText: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flex: 10
  },
  sectionListItemStyle: {
    flexDirection: 'row-reverse',
    padding: 15,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
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
