// Action types
import actionTypes from './similar-movies.action-types';

const requestSimilarMovies = (movieId) => ({
  type: actionTypes.SIMILAR_MOVIES_REQUEST,
  payload: {
    isLoading: true,
    movieId,
  },
});

const receiveSimilarMovies = (similarMovies) => ({
  type: actionTypes.SIMILAR_MOVIES_RECEIVE,
  payload: {
    isLoading: false,
    similarMovies,
  },
});

const handleFailureOfSimilarMovies = (error) => ({
  type: actionTypes.SIMILAR_MOVIES_FAILURE,
  payload: {
    isLoading: false,
    error,
  },
});

const actionCreators = {
  requestSimilarMovies,
  receiveSimilarMovies,
  handleFailureOfSimilarMovies,
};

export default actionCreators;