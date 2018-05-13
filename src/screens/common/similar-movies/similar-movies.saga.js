import { takeEvery, call, put } from 'redux-saga/effects';

// API
import { moviesAPI } from '../../../api';

// Action types
import actionTypes from './similar-movies.action-types';

// Action creators
import actionCreators from './similar-movies.actions';

function* fetchSimilarMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchSimilarMovies, action.payload.movieId);
    yield put(actionCreators.receiveSimilarMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfSimilarMovies(error));
  }
};

function* watchSimilarMovies() {
  yield takeEvery(actionTypes.SIMILAR_MOVIES_REQUEST, fetchSimilarMovies);
}

const sagaTasks = {
  watchSimilarMovies,
};

export default sagaTasks;
