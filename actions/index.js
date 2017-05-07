import axios from "axios";
import { AsyncStorage } from "react-native";

export const REQUEST_GIFS = "request_gifs";
export const OPEN_MODAL = "open_modal";
export const CLOSE_MODAL = "close_modal";
export const EMAIL_CHANGED = "email_changed";
export const PASSWORD_CHANGED = "password_changed";
export const PASSWORD_CONFIRMATION_CHANGED = "password_confirmation_changed";
export const LOGIN_USER = "login_user";
export const LOGIN_USER_FAIL = "login_user_fail";
export const LOGOUT_USER = "logout_user";

const API_URL = "http://api.giphy.com/v1/gifs/search?q=";
const API_KEY = "&api_key=dc6zaTOxFJmzC";

export const requestGifs = (term = null) => async dispatch => {
  let data = await axios.get(`${API_URL}${term.replace(/\s/g, "+")}${API_KEY}`);

  dispatch({
    type: REQUEST_GIFS,
    payload: data
  });
};

export const openModal = gif => {
  return {
    type: OPEN_MODAL,
    gif
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const passwordConfirmationChanged = passwordConfirmation => {
  return {
    type: PASSWORD_CONFIRMATION_CHANGED,
    payload: passwordConfirmation
  };
};

export const logoutUser = (navigation) => {
  return async dispatch => {
    let user = await AsyncStorage.removeItem('currentUser')
    navigation.navigate('login')
    dispatch({
      type: LOGOUT_USER
    })
  }
};

export const loginUser = (email, password, passwordConfirmation) => {
  let notValidatedUser = validate({ email, password, passwordConfirmation });

  if (
    notValidatedUser.email ||
    notValidatedUser.password ||
    notValidatedUser.passwordConfirmation
  ) {
    return {
      type: LOGIN_USER_FAIL,
      payload: notValidatedUser
    };
  }

  return async dispatch => {
    try {
      await AsyncStorage.setItem("currentUser", email);
      let user = await AsyncStorage.getItem('currentUser')
      
      dispatch({
        type: LOGIN_USER,
        payload: user
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_USER_FAIL
      });
    }
  };
};

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = "Passwords do not match ";
    errors.password = "Passwords do not match ";
  }

  return errors;
};
