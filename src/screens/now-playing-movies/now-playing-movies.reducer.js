// Action types
import actionTypes from './now-playing-movies.action-types';

const defaultState = {
  nowPlayingMovies: null,
  isLoading: false,
  pageNumber: 1,
  totalPages: 1,
  filter: '',
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.NOW_PLAYING_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        page: 1,
        totalPages: 1,
      };
    case actionTypes.NOW_PLAYING_MOVIES_RECEIVE:
      return {
        ...state,
        nowPlayingMovies: action.payload.nowPlayingMovies,
        isLoading: action.payload.isLoading,
        totalPages: action.payload.nowPlayingMovies.total_pages,
      };
    case actionTypes.NOW_PLAYING_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.NOW_PLAYING_MOVIES_EXTEND_REQUEST:
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.NOW_PLAYING_MOVIES_EXTEND_RECEIVE:
      return {
        ...state,
        nowPlayingMovies: {
          results: [
            ...state.nowPlayingMovies.results,
            ...action.payload.nowPlayingMovies.results,
          ],
        },
        isLoading: action.payload.isLoading,
        totalPages: action.payload.nowPlayingMovies.total_pages,
      };

    case actionTypes.NOW_PLAYING_MOVIES_EXTEND_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    case actionTypes.NOW_PLAYING_MOVIES_FILTER_BY_NAME:
      return {
        ...state,
        filter: action.payload.movieName,
      };
    default:
      return state;
  }
}

export default reducer;