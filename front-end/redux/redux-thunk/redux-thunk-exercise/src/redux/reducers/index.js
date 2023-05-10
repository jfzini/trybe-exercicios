import { REQUEST_STARTED, REQUEST_SUCESSFUL, REQUEST_FAILED } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

export const dogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return { ...state, isFetching: true };
    case REQUEST_SUCESSFUL:
      return {
        isFetching: false,
        imageURL: action.payload,
        errorMessage: '',
      };
    case REQUEST_FAILED:
      return {
        isFetching: false,
        imageURL: '',
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
