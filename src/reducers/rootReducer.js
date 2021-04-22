import {
  INCREMENT,
  DECREMENT,
  REVERSE_MESSAGE,
} from '../constants/actionTypes';

const initialState = {
  counter: 0,
  message: 'SKOOH XUDER YB DEREWOP SI NOITCA SIHT',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case REVERSE_MESSAGE:
      return {
        message: state.message.split('').reverse().join(''),
      };
    default:
      return state;
  }
};

export default rootReducer;
