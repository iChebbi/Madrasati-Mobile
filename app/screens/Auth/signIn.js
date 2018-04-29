import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  AsyncStorage,
  Alert,
  Image
} from "react-native";
import { Button, Avatar } from "react-native-elements";

import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  loginHandler = async () => {
    // (this.state.email === "") ? this.setState({ invalidEmail: true }) : this.setState({ invalidEmail: false }) ;
    // (this.state.password === "") ? this.setState({ invalidPassword: true }) : this.setState({ invalidPassword: false }) ;
    // if (this.state.invalidEmail || this.state.invalidPassword) {
    // 	ToastAndroid.show("عمر البيانات", ToastAndroid.LONG);
    // 	return
    // }
    await this.props.signIn(this.state.email, this.state.password);
    if (this.props.auth.logged) {
      this.props.navigation.navigate("AppStack");
    } else {
      ToastAndroid.show("بيانات خاطئة", ToastAndroid.LONG);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />

        <Text style={styles.header}>مدرستي</Text>

        <TextInput
          name="email"
          placeholder="البريد الإلكتروني"
          keyboardType="email-address"
          underlineColorAndroid={this.state.invalidEmail ? "red" : "white"}
          style={[
            styles.Input,
            this.state.invalidEmail ? { color: "red" } : {}
          ]}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text, failed: false })}
        />
        <TextInput
          name="password"
          placeholder="كلمة السر"
          secureTextEntry
          underlineColorAndroid={this.state.invalidPassword ? "red" : "white"}
          style={[
            styles.Input,
            this.state.invalidPassword ? { color: "red" } : {}
          ]}
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
    width: 150,
    height: 150
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    testAction: () => dispatch(testAction()),
    signIn: (email, password) => dispatch(signIn(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
