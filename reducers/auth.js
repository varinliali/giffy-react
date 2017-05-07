import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PASSWORD_CONFIRMATION_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from "../actions";

const INITIAL_STATE = {
  email: "",
  password: "",
  passwordConfirmation: "",
  errors: {},
  authenticated: false,
  user: null
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case PASSWORD_CONFIRMATION_CHANGED:
      return {
        ...state,
        passwordConfirmation: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errors: action.payload,
        email: "",
        password: "",
        passwordConfirmation: ""
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: "",
        authenticated: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        email: "",
        password: "",
        passwordConfirmation: "",
        errors: "",
        authenticated: false
      };
    default:
      return state;
  }
}
