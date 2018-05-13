// Action types
import actionTypes from './upcoming-movies.action-types';

const requestUpcomingMovies = () => ({
  type: actionTypes.UPCOMING_MOVIES_REQUEST,
  payload: {
    isLoading: true,
  },
});

const receiveUpcomingMovies = (upcomingMovies) => ({
  type: actionTypes.UPCOMING_MOVIES_RECEIVE,
  payload: {
    upcomingMovies,
    isLoading: false,
  },
});

const handleFailureOfUpcomingMovies = (error) => ({
  type: actionTypes.UPCOMING_MOVIES_RECEIVE,
  payload: {
    error,
    isLoading: false,
  },
});

const requestExtendedUpcomingMovies = (pageNumber) => ({
  type: actionTypes.UPCOMING_MOVIES_EXTEND_REQUEST,
  payload: {
    isLoading: true,
    pageNumber,
  },
});

const receiveExtendedUpcomingMovies = (upcomingMovies) => ({
  type: actionTypes.UPCOMING_MOVIES_EXTEND_RECEIVE,
  payload: {
    upcomingMovies,
    isLoading: false,
  },
});

const handleExtendedFailureOfUpcomingMovies = (error) => ({
  type: actionTypes.UPCOMING_MOVIES_EXTEND_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const filterUpcomingMoviesByName = (movieName) => ({
  type: actionTypes.UPCOMING_MOVIES_FILTER_BY_NAME,
  payload: {
    movieName,
  },
});

const actionCreators = {
  requestUpcomingMovies,
  receiveUpcomingMovies,
  handleFailureOfUpcomingMovies,

  requestExtendedUpcomingMovies,
  receiveExtendedUpcomingMovies,
  handleExtendedFailureOfUpcomingMovies,

  filterUpcomingMoviesByName,
};

export default actionCreators;