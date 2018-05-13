import { takeEvery, call, put } from 'redux-saga/effects';

// API
import { moviesAPI } from '../../api';

// Action types
import actionTypes from './top-rated-movies.action-types';

// Action creators
import actionCreators from './top-rated-movies.actions';

function* fetchTopRatedMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchTopRatedMovies);
    yield put(actionCreators.receiveTopRatedMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfTopRatedMovies(error));
  }
};

function* fetchMoreTopRatedMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchTopRatedMovies, {page: action.payload.pageNumber});
    yield put(actionCreators.receiveExtendedTopRatedMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfExtendedTopRatedMovies(error));
  }
};

function* watchTopRatedMovies() {
  yield takeEvery(actionTypes.TOP_RATED_MOVIES_REQUEST, fetchTopRatedMovies);
};

function* watchExtendTopRatedMovies() {
  yield takeEvery(actionTypes.TOP_RATED_MOVIES_EXTEND_REQUEST, fetchMoreTopRatedMovies);
};

const sagaTasks = {
  watchTopRatedMovies,
  watchExtendTopRatedMovies,
};

export default sagaTasks;
