import React, { Component } from 'react'
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  TouchableNativeFeedback
} from 'react-native'
import { Avatar } from 'react-native-elements'

import { connect } from 'react-redux'
import { getHomework } from '../../actions/childActions'

import { parseDate, today } from '../../utils/date'

class ConversationsList extends Component {
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
              renderSectionHeader={({ section }) => <View />}
              renderItem={({ item, index, section }) => (
                <TouchableNativeFeedback>
                  <View style={styles.sectionListItemStyle}>
                    <View style={styles.sectionListItemText}>
                      <View style={styles.inlineItemHeader}>
                        <Text style={styles.smallText}>الآن</Text>
                        <Text style={styles.boldText}>جون دو</Text>
                      </View>
                      <Text style={styles.smallText}>
                        تعد بداية بالعمل جديداً في. يتم حصدت فقامت الإتحاد .
                      </Text>
                    </View>
                    <View>
                      <Avatar
                        width={50}
                        height={50}
                        rounded
                        source={require('../../assets/maleTeacher.png')}
                        onPress={() => {
                          this.props.setChild(child)
                          this.props.navigation.navigate('DrawerOpen')
                        }}
                      />
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
              <Text>لا يوجد ملاحظات</Text>
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
  boldText: {
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 5
  },
  smallText: { color: 'grey' },
  inlineItemHeader: {
    flexDirection: 'row',
    alignItems: 'baseline'
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

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList)
