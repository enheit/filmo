import { takeEvery, call, put } from 'redux-saga/effects';

// API
import { moviesAPI } from '../../api';

// Action types
import actionTypes from './popular-movies.action-types';

// Action creators
import actionCreators from './popular-movies.actions';

function* fetchPopularMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchPopularMovies);
    yield put(actionCreators.receivePopularMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfPopularMovies(error));
  }
};

function* fetchMorePopularMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchPopularMovies, {page: action.payload.pageNumber});
    yield put(actionCreators.receiveExtendedPopularMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfExtendedPopularMovies(error));
  }
};

function* watchPopularMovies() {
  yield takeEvery(actionTypes.POPULAR_MOVIES_REQUEST, fetchPopularMovies);
};

function* watchExtendPopularMovies() {
  yield takeEvery(actionTypes.POPULAR_MOVIES_EXTEND_REQUEST, fetchMorePopularMovies);
};

const sagaTasks = {
  watchPopularMovies,
  watchExtendPopularMovies,
};

export default sagaTasks;
