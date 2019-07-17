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
        characters: action.payload.results
      }
    }
    case FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
};
