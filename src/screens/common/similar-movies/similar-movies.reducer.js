// Action types
import actionTypes from './similar-movies.action-types';

const defaultState = {
  similarMovies: null,
  isLoading: false,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SIMILAR_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.SIMILAR_MOVIES_RECEIVE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        similarMovies: action.payload.similarMovies,
      };

    case actionTypes.SIMILAR_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};

export default reducer;