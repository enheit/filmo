// Action types
import actionTypes from './top-rated-movies.action-types';

const requestTopRatedMovies = () => ({
  type: actionTypes.TOP_RATED_MOVIES_REQUEST,
  payload: {
    isLoading: true,
  }
});

const receiveTopRatedMovies = (topRatedMovies) => ({
  type: actionTypes.TOP_RATED_MOVIES_RECEIVE,
  payload: {
    topRatedMovies,
    isLoading: false,
  },
});

const handleFailureOfTopRatedMovies = (error) => ({
  type: actionTypes.TOP_RATED_MOVIES_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const requestExtendedTopRatedMovies = (pageNumber) => ({
  type: actionTypes.TOP_RATED_MOVIES_EXTEND_REQUEST,
  payload: {
    isLoading: true,
    pageNumber,
  }
});

const receiveExtendedTopRatedMovies = (topRatedMovies) => ({
  type: actionTypes.TOP_RATED_MOVIES_EXTEND_RECEIVE,
  payload: {
    topRatedMovies,
    isLoading: false,
  },
});

const handleFailureOfExtendedTopRatedMovies = (error) => ({
  type: actionTypes.TOP_RATED_MOVIES_EXTEND_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const filterTopRatedMoviesByName = (movieName) => ({
  type: actionTypes.TOP_RATED_MOVIES_FILTER_BY_NAME,
  payload: {
    movieName,
  },
});

const actionCreators = {
  requestTopRatedMovies,
  receiveTopRatedMovies,
  handleFailureOfTopRatedMovies,

  requestExtendedTopRatedMovies,
  receiveExtendedTopRatedMovies,
  handleFailureOfExtendedTopRatedMovies,

  filterTopRatedMoviesByName,
};

export default actionCreators;