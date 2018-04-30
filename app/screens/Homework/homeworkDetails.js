import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { Entypo, FontAwesome } from '@expo/vector-icons'

import { timestampToDate, timestampToTime, parseDate } from '../../utils/date'

class HomeworkDetails extends Component {
  render() {
    const { params } = this.props.navigation.state

    const homeworkContent = params[0]

    return (
      <View style={styles.container}>
        <Card
          containerStyle={{ flex: 1 }}
          titleStyle={{ fontSize: 35, paddingVertical: 20 }}
          title={homeworkContent.nom}
        >
          <View style={styles.infoBar}>
            <View style={styles.infoBarElement}>
              <Text style={styles.infoBarText}>
                {timestampToTime(homeworkContent.dateend * 1000)}
              </Text>
              <Entypo
                name="clock"
                size={25}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </View>
            <View style={styles.infoBarElement}>
              <Text style={styles.infoBarText}>
                {parseDate(timestampToDate(homeworkContent.dateend * 1000))}
              </Text>
              <Entypo
                name="calendar"
                size={25}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </View>
            <View style={styles.infoBarElement}>
              <Text style={styles.infoBarText}>{homeworkContent.idcourse}</Text>
              <Entypo
                name="book"
                size={25}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
              {homeworkContent.description}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#e0e0e1',
                borderRadius: 100,
                borderWidth: 2,
                borderColor: 'white',
                padding: 10
              }}
            >
              <Text>موضوع التمرين</Text>
              <FontAwesome
                name="file-pdf-o"
                size={15}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  descriptionContainer: {
    paddingVertical: 50
  },
  descriptionText: {
    fontSize: 20
  },
  fileContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150
  },
  infoBar: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  infoBarText: {
    fontSize: 20
  },
  infoBarElement: {
    flexDirection: 'row'
  },
  text: {
    elevation: 10,
    fontSize: 10
  }
}

export default HomeworkDetails
