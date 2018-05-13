// Action types
import actionTypes from './now-playing-movies.action-types';

const requestNowPlayingMovies = () => ({
  type: actionTypes.NOW_PLAYING_MOVIES_REQUEST,
  payload: {
    isLoading: true,
  }
});

const receiveNowPlayingMovies = (nowPlayingMovies) => ({
  type: actionTypes.NOW_PLAYING_MOVIES_RECEIVE,
  payload: {
    nowPlayingMovies,
    isLoading: false,
  },
});

const handleFailureOfNowPlayingMovies = (error) => ({
  type: actionTypes.NOW_PLAYING_MOVIES_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const requestExtendedNowPlayingMovies = (pageNumber) => ({
  type: actionTypes.NOW_PLAYING_MOVIES_EXTEND_REQUEST,
  payload: {
    isLoading: true,
    pageNumber,
  },
});

const receiveExtendedNowPlayingMovies = (nowPlayingMovies) => ({
  type: actionTypes.NOW_PLAYING_MOVIES_EXTEND_RECEIVE,
  payload: {
    nowPlayingMovies,
    isLoading: false,
  },
});

const handleFailureOfExtendedNowPlayingFailure = (error) => ({
  type: actionTypes.NOW_PLAYING_MOVIES_EXTEND_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const filterNowPlayingMoviesByName = (movieName) => ({
  type: actionTypes.NOW_PLAYING_MOVIES_FILTER_BY_NAME,
  payload: {
    movieName,
  },
});

const resetFilterByName = () => ({
  type: actionTypes.NOW_PLAYING_MOVIES_FILTER_BY_NAME,
  payload: {
    movieName: '',
  },
});

const actionCreators = {
  requestNowPlayingMovies,
  receiveNowPlayingMovies,
  handleFailureOfNowPlayingMovies,

  requestExtendedNowPlayingMovies,
  receiveExtendedNowPlayingMovies,
  handleFailureOfExtendedNowPlayingFailure,

  filterNowPlayingMoviesByName,
  resetFilterByName,
};

export default actionCreators;