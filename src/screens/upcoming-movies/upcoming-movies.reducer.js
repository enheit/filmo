// Action types
import actionTypes from './upcoming-movies.action-types';

const defaultState = {
  upcomingMovies: null,
  isLoading: false,
  pageNumber: 1,
  totalPages: 1,
  filter: '',
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        pageNumber: 1,
        totalPages: 1,
      };
    case actionTypes.UPCOMING_MOVIES_RECEIVE:
      return {
        ...state,
        upcomingMovies: action.payload.upcomingMovies,
        isLoading: action.payload.isLoading,
        totalPages: action.payload.upcomingMovies.total_pages,
      };

    case actionTypes.UPCOMING_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.UPCOMING_MOVIES_EXTEND_REQUEST:
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.UPCOMING_MOVIES_EXTEND_RECEIVE:
      return {
        ...state,
        upcomingMovies: {
          results: [
            ...state.upcomingMovies.results,
            ...action.payload.upcomingMovies.results,
          ],
        },
        isLoading: action.payload.isLoading,
        totalPages: action.payload.upcomingMovies.total_pages,
      };

    case actionTypes.UPCOMING_MOVIES_EXTEND_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.UPCOMING_MOVIES_FILTER_BY_NAME:
      return {
        ...state,
        filter: action.payload.movieName,
      }
    default:
      return state;
  }
}

export default reducer;