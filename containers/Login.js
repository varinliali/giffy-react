import React from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from "react-native";

import { Button, Icon } from "react-native-elements";

import * as actions from "../actions";

class Login extends React.Component {
  static navigationOptions = {
    title: Login,
    tabBarVisible: false,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="eject" size={30} color={tintColor} />
    )
  };

  componentDidMount = async () => {
    let currentUser = await AsyncStorage.getItem('currentUser')
    if (currentUser) return this.props.navigation.navigate("home");
    else return 
    // AsyncStorage.removeItem('fb_token')
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("home");
    }
  }

  onEmailChange = email => {
    this.props.emailChanged(email);
  };

  onPasswordChange = password => {
    this.props.passwordChanged(password);
  };

  handleSubmit = async () => {
    const { email, password } = this.props;

    await this.props.loginUser(email, password, password);
    return this.props.navigation.navigate('home')
  };

  render() {
    return (
      <View style={styles.container}>

        {this.props.authenticated
          ? <Text style={styles.headerStyle}>
              You're logged in as {this.props.user}{" "}
            </Text>
          : <Text style={styles.headerStyle}>Log In</Text>}

        <View>
          <TextInput
            style={
              this.props.errors.email ? styles.errorInputStyle : styles.input
            }
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
          <Text style={styles.errorTextStyle}>{this.props.errors.email}</Text>

          <TextInput
            style={
              this.props.errors.password ? styles.errorInputStyle : styles.input
            }
            placeholder="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
          {/*<View>{this.props.errors.map(error => <Text key={error.password}>{error.password}</Text>)}</View>*/}
          <Text style={styles.errorTextStyle}>
            {this.props.errors.password}
          </Text>
          <View style={{ marginBottom: 20 }}>

            <Text>
              Not a member? Click
              <Text
                onPress={() => this.props.navigation.navigate("signup")}
                style={{ fontWeight: "bold" }}
              >
                {" "}here{" "}
              </Text>
              to sign up
            </Text>
          </View>

          <Button
            backgroundColor="#A0ddFF"
            title="Login"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(215, 219, 226, 0.12)",
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5
  },
  headerStyle: {
    marginBottom: 30,
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 37,
    width: 300,
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  errorTextStyle: {
    color: "red"
  },
  errorInputStyle: {
    borderColor: "red",
    borderWidth: 1,
    height: 37,
    width: 300,
    alignSelf: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  }
});

function mapStateToProps(state) {
  return {
    email: state.auth.email,
    password: state.auth.password,
    errors: state.auth.errors,
    authenticated: state.auth.authenticated,
    user: state.auth.user
  };
}

export default connect(mapStateToProps, actions)(Login);
