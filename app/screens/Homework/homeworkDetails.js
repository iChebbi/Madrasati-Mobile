import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

import { timestampToDate, parseDate } from '../../utils/date'

class HomeworkDetails extends Component {
  render() {
    const { params } = this.props.navigation.state

    const homeworkContent = params

    return (
      <View style={styles.container}>
        <Card
          containerStyle={{ flex: 1, margin: 10 }}
          titleStyle={{ fontSize: 35, paddingVertical: 20 }}
          title={homeworkContent.nom}
        >
          <View style={styles.infoBar}>
            <View style={styles.infoBarElement}>
              <Text style={styles.infoBarText}>
                {homeworkContent.firstnamear + ' ' + homeworkContent.lastnamear}
              </Text>
              <MaterialCommunityIcons
                name="account"
                size={25}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </View>
            <View style={styles.infoBarElement}>
              <Text style={styles.infoBarText}>
                {parseDate(timestampToDate(homeworkContent.dateend))}
              </Text>
              <Entypo
                name="calendar"
                size={25}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </View>
            <View style={styles.infoBarElement}>
              <Text style={styles.infoBarText}>{homeworkContent.code}</Text>
              <Entypo
                name="book"
                size={25}
                color="black"
                style={{ marginHorizontal: 10 }}
              />
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontWeight: '100', fontSize: 15 }}>
              {homeworkContent.description}
            </Text>
          </View>
          <View style={styles.fileContainer}>
            <TouchableOpacity style={styles.fileBtn}>
              <Text>موضوع التمرين</Text>
              <FontAwesome
                name="file-pdf-o"
                size={15}
                color="black"
                style={{ marginLeft: 10 }}
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
    paddingBottom: 15
  },
  descriptionContainer: {
		paddingVertical: 50,
		flex : 1
  },
  descriptionText: {
    fontSize: 20
  },
  fileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  fileBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e1',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10
  },
  image: {
    width: 150,
    height: 150
  },
  infoBar: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  infoBarText: {
    fontSize: 15
  },
  infoBarElement: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    elevation: 10,
    fontSize: 10
  }
}

export default HomeworkDetails
