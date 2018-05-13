import actionTypes from './movie-details.action-types';

const requestMovieDetails = (movieId) => ({
  type: actionTypes.MOVIE_DETAILS_REQUEST,
  payload: {
    movieId,
    isLoading: true,
  }
});

const receiveMovieDetails = (movieDetails) => ({
  type: actionTypes.MOVIE_DETAILS_RECEIVE,
  payload: {
    movieDetails,
    isLoaidng: false,
  },
});

const handleFailureOfMovieDetails = (error) => ({
  type: actionTypes.MOVIE_DETAILS_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const resetMovieDetails = () => ({
  type: actionTypes.MOVIE_DETAILS_RESET,
  payload: {
    movieDetails: null,
  },
});


const actionCreators = {
  requestMovieDetails,
  receiveMovieDetails,
  handleFailureOfMovieDetails,
  resetMovieDetails,
};

export default actionCreators;