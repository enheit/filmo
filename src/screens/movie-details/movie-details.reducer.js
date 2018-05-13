import actionTypes from './movie-details.action-types';

const defaultState = {
  movieDetails: null,
  isLoading: false,
  movieId: undefined,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.MOVIE_DETAILS_RECEIVE:
      return {
        ...state,
        movieDetails: action.payload.movieDetails,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.MOVIE_DETAILS_RESET:
      return {
        ...state,
        movieDetails: action.payload.movieDetails,
      };

    default:
      return state;
  }
};

export default reducer;