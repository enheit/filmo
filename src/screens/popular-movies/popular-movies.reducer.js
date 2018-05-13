// Action types
import actionTypes from './popular-movies.action-types';

const defaultState = {
  popularMovies: null,
  isLoading: false,
  pageNumber: 1,
  totalPages: 1,
  filter: '',
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.POPULAR_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        page: 1,
        totalPages: 1,
      };
    case actionTypes.POPULAR_MOVIES_RECEIVE:
      return {
        ...state,
        popularMovies: action.payload.popularMovies,
        isLoading: action.payload.isLoading,
        totalPages: action.payload.popularMovies.total_pages,
      };
    case actionTypes.POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.POPULAR_MOVIES_EXTEND_REQUEST:
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.POPULAR_MOVIES_EXTEND_RECEIVE:
      return {
        ...state,
        popularMovies: {
          results: [
            ...state.popularMovies.results,
            ...action.payload.popularMovies.results,
          ],
        },
        isLoading: action.payload.isLoading,
        totalPages: action.payload.popularMovies.total_pages,
      };

    case actionTypes.NOW_PLAYING_MOVIES_EXTEND_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.POPULAR_MOVIES_FILTER_BY_NAME:
      return {
        ...state,
        filter: action.payload.movieName,
      };
    default:
      return state;
  }
}

export default reducer;