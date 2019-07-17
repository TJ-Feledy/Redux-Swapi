import {
  FETCHING, SUCCESS, FAILURE
} from "../actions";


const initialState = {
  characters: [],
  fetching: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      console.log(action.payload)
      return {
        ...state,
        fetching: true,
      }
    }
    case SUCCESS: {
      return {
        ...state,
        fetching: false,
        error: null,
        characters: action.payload
      }
    }
    case FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.payload.message
      }
    }
    default:
      return state;
  }
};
