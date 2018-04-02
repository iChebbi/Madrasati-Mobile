import React from "react";
import { StyleSheet, Text, View, TextInput, ToastAndroid } from "react-native";
import { Button, Avatar } from "react-native-elements";

import { signIn } from "../../services/auth";

export default class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  loginHandler = () => {
    signIn(this.state.email, this.state.password).then(res => {
      if (!res) {
        this.setState({ failed: true });
        ToastAndroid.show("Login Failed", ToastAndroid.LONG);
      } else this.props.navigation.navigate("AppStack");
    });
  };

  highlightErrors = () => {
    if (this.state.failed)
      return {
        color: "red"
      };
  };

  render() {
    return (
      <View style={styles.container}>
        <Avatar
          width={150}
          height={150}
          rounded
          source={require("../../assets/logo.jpg")}
          containerStyle={styles.logo}
        />

        <Text style={styles.header}>مدرستي</Text>

        <TextInput
          name="email"
          placeholder="البريد الإلكتروني"
          keyboardType="email-address"
          underlineColorAndroid={"white"}
          style={[styles.Input, this.highlightErrors()]}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text, failed: false })}
        />
        <TextInput
          name="password"
          placeholder="كلمة السر"
          secureTextEntry
          underlineColorAndroid={"white"}
          style={[styles.Input, this.highlightErrors()]}
          value={this.state.password}
          onChangeText={text =>
            this.setState({ password: text, failed: false })
          }
        />

        <Button
          onPress={() => this.loginHandler()}
          backgroundColor="#00C14F"
          buttonStyle={styles.button}
          rounded
          title="تسجيل الدخول"
        />
        <Button
          onPress={() => this.props.navigation.navigate("SignUp")}
          buttonStyle={styles.button}
          rounded
          title="تسجيل حساب"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#106cc8",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    margin: 20,
    elevation: 10
  },
  header: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    textShadowOffset: {
      width: 0,
      height: 3
    },
    textShadowRadius: 30
  },
  Input: {
    textAlign: "center",
    height: 50,
    width: 300,
    marginTop: 10,
    color: "white"
  },
  button: {
    marginTop: 20,
    width: 300,
    elevation: 3
  }
});
