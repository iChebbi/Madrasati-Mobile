import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  SectionList,
  Alert
} from "react-native";

const A = ["الرياضيات", "الرياضيات", "الرياضيات"];
const B = ["الرياضيات", "الرياضيات", "الرياضيات", "الرياضيات", "الرياضيات"];
const C = ["الرياضيات", "الرياضيات"];

export default class Homework extends Component {
  GetSectionListItem = item => {
    Alert.alert(item);
	};
	

  render() {
    return (
      <SectionList
        style={styles.container}
        sections={[
          { title: "اليوم", data: A },
          { title: "البارحة", data: B },
          { title: "سابقا", data: C }
        ]}
        renderSectionHeader={({ section }) => (
          <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.SectionListItemStyle}> {item} </Text>
        )}
        keyExtractor={(item, index) => index}
      />
    );
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
    backgroundColor: "#E5E5E5",
    fontSize: 15,
    padding: 3,
    paddingRight: 15,
    textAlign: "right",
    color: "black",
    elevation: 5
  },
  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    textAlign: "right",
    color: "#000",
    backgroundColor: "#F5F5F5"
  }
};
