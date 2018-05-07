import React, { Component } from 'react'
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  TouchableNativeFeedback
} from 'react-native'
import { Avatar, Card } from 'react-native-elements'

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
                <Card containerStyle={{ margin: 0 }}>
                  <View style={styles.messageCard}>
                    <Avatar
                      width={70}
                      height={70}
                      rounded
                      source={require('../../assets/maleTeacher.png')}
                    />
                    <View style={styles.cardText}>
                      <View style={styles.inlineItemHeader}>
                        <Text style={styles.smallText}>الآن</Text>
                        <Text style={styles.boldText}>جون دو</Text>
                      </View>
                      <Text style={styles.smallText}>
                        تعد بداية بالعمل جديداً في. يتم حصدت فقامت الإتحاد .
                      </Text>
                    </View>
                  </View>
                </Card>
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
  messageCard: {
    margin: 0,
    flexDirection: 'row'
  },
  cardText: {
    flexDirection: 'column',
    flex: 1
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
    justifyContent: 'flex-end',
    alignItems: 'baseline'
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
