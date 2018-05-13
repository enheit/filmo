// Action types
import actionTypes from './popular-movies.action-types';

const requestPopularMovies = () => ({
  type: actionTypes.POPULAR_MOVIES_REQUEST,
  payload: {
    isLoading: true,
  }
});

const receivePopularMovies = (popularMovies) => ({
  type: actionTypes.POPULAR_MOVIES_RECEIVE,
  payload: {
    popularMovies,
    isLoading: false,
  },
});

const handleFailureOfPopularMovies = (error) => ({
  type: actionTypes.POPULAR_MOVIES_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const requestExtendedPopularMovies = (pageNumber) => ({
  type: actionTypes.POPULAR_MOVIES_EXTEND_REQUEST,
  payload: {
    isLoading: true,
    pageNumber,
  }
});

const receiveExtendedPopularMovies = (popularMovies) => ({
  type: actionTypes.POPULAR_MOVIES_EXTEND_RECEIVE,
  payload: {
    popularMovies,
    isLoading: false,
  },
});

const handleFailureOfExtendedPopularMovies = (error) => ({
  type: actionTypes.POPULAR_MOVIES_EXTEND_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const filterPopularMoviesByName = (movieName) => ({
  type: actionTypes.POPULAR_MOVIES_FILTER_BY_NAME,
  payload: {
    movieName,
  },
});

const resetFilterByName = () => ({
  type: actionTypes.POPULAR_MOVIES_FILTER_BY_NAME,
  payload: {
    movieName: '',
  },
});

const actionCreators = {
  requestPopularMovies,
  receivePopularMovies,
  handleFailureOfPopularMovies,

  requestExtendedPopularMovies,
  receiveExtendedPopularMovies,
  handleFailureOfExtendedPopularMovies,

  filterPopularMoviesByName,
  resetFilterByName,
};

export default actionCreators;