import { REQUEST_GIFS } from "../actions";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFS:
      return {
        ...state,
        data: action.payload.data.data
      };
    default:
      return state;
  }
};
