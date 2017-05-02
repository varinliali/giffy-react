import { combineReducers } from 'redux';

import ModalReducer from './modal';
import GifsReducer from './gifs';

const rootReducer = combineReducers({
  gifs: GifsReducer,
  modal: ModalReducer
})

export default rootReducer;