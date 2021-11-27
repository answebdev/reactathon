import {
  INCREMENT,
  DECREMENT,
  REVERSE_MESSAGE,
  GET_MOVIES,
} from '../constants/actionTypes';

const initialState = {
  counter: 0,
  message: 'SKOOH XUDER YB DEREWOP SI NOITCA SIHT',
  movies: [
    {
      id: 1,
      title: 'Halloween',
      genre: 'Horror',
    },
  ],
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
    case GET_MOVIES:
      return {
        movies: state.movies.title,
      };
    default:
      return state;
  }
};

export default rootReducer;
