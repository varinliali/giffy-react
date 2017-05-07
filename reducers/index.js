import { combineReducers } from 'redux';

import ModalReducer from './modal';
import GifsReducer from './gifs';
import AuthReducer from './auth'

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer,
  auth: AuthReducer
})

export default rootReducer;