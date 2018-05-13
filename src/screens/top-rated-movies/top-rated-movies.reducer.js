// Action types
import actionTypes from './top-rated-movies.action-types';

const defaultState = {
  topRatedMovies: null,
  isLoading: false,
  pageNumber: 1,
  totalPages: 1,
  filter: '',
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.TOP_RATED_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        pageNumber: 1,
        totalPages: 1,
      };

    case actionTypes.TOP_RATED_MOVIES_RECEIVE:
      return {
        ...state,
        topRatedMovies: action.payload.topRatedMovies,
        isLoading: action.payload.isLoading,
        totalPages: action.payload.topRatedMovies.total_pages,
      };

    case actionTypes.TOP_RATED_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.TOP_RATED_MOVIES_EXTEND_REQUEST:
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.TOP_RATED_MOVIES_EXTEND_RECEIVE:
      return {
        ...state,
        topRatedMovies: {
          results: [
            ...state.topRatedMovies.results,
            ...action.payload.topRatedMovies.results,
          ],
        },
        isLoading: action.payload.isLoading,
        totalPages: action.payload.topRatedMovies.total_pages,
      };

    case actionTypes.TOP_RATED_MOVIES_EXTEND_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.TOP_RATED_MOVIES_FILTER_BY_NAME:
      return {
        ...state,
        filter: action.payload.movieName,
      };

    default:
      return state;
  }
}

export default reducer;