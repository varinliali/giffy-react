import React from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import { Button, Icon } from "react-native-elements";

import * as actions from "../actions";

class Signup extends React.Component {
  static navigationOptions = {
    title: Signup,
    header: null,
    tabBarIcon: ({ tintColor }) => (
      <Icon name="favorite-border" size={30} color={tintColor} />
    )
  };

  onEmailChange = email => {
    this.props.emailChanged(email);
  };

  onPasswordChange = password => {
    this.props.passwordChanged(password);
  };

  onPasswordConfirmationChange = passwordConfirmation => {
    this.props.passwordConfirmationChanged(passwordConfirmation);
  };

  handleSubmit = () => {
    const { email, password, passwordConfirmation } = this.props;

    this.props.loginUser(email, password, passwordConfirmation);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Signup</Text>

        <View>

          <TextInput
            style={this.props.errors.email ? styles.errorInputStyle : styles.input}
            placeholder="Email"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
          <Text style={styles.errorTextStyle}>{this.props.errors.email}</Text>

          <TextInput
            style={this.props.errors.password ? styles.errorInputStyle : styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
          <Text style={styles.errorTextStyle}>{this.props.errors.password}</Text>

          <TextInput
            style={this.props.errors.passwordConfirmation ? styles.errorInputStyle : styles.input}
            placeholder="Verify password"
            secureTextEntry
            onChangeText={this.onPasswordConfirmationChange}
            value={this.props.passwordConfirmation}
          />
          <Text style={styles.errorTextStyle}>
            {this.props.errors.passwordConfirmation}
          </Text>

          <View style={{ marginBottom: 20 }}>

            <Text>
              Already a member? Click
              <Text
                onPress={() => this.props.navigation.navigate("login")}
                style={{ fontWeight: "bold" }}
              >
                {" "}here{" "}
              </Text>
              to login
            </Text>
          </View>

          <Button
            backgroundColor="#A0ddFF"
            title="Signup"
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
    passwordConfirmation: state.auth.passwordConfirmation,
    errors: state.auth.errors
  };
}

export default connect(mapStateToProps, actions)(Signup);
