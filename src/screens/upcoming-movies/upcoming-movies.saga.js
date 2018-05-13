import { takeEvery, call, put } from 'redux-saga/effects';

// API
import { moviesAPI } from '../../api';

// Action types
import actionTypes from './upcoming-movies.action-types';

// Action creators
import actionCreators from './upcoming-movies.actions';

function* fetchUpcomingMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchUpcomingMovies);
    yield put(actionCreators.receiveUpcomingMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfUpcomingMovies(error));
  }
};

function* fetchMoreUpcomingMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchUpcomingMovies, {page: action.payload.pageNumber});
    yield put(actionCreators.receiveExtendedUpcomingMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfExtendedUpcomingMovies(error));
  }
};

function* watchUpcomingMovies() {
  yield takeEvery(actionTypes.UPCOMING_MOVIES_REQUEST, fetchUpcomingMovies);
};

function* watchExtendUpcomingMovies() {
  yield takeEvery(actionTypes.UPCOMING_MOVIES_EXTEND_REQUEST, fetchMoreUpcomingMovies);
};

const sagaTasks = {
  watchUpcomingMovies,
  watchExtendUpcomingMovies,
};

export default sagaTasks;
