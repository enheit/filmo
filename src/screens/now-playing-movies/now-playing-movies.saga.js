import { takeEvery, call, put } from 'redux-saga/effects';

// API
import { moviesAPI } from '../../api';

// Action types
import actionTypes from './now-playing-movies.action-types';

// Action creators
import actionCreators from './now-playing-movies.actions';

function* fetchNowPlayingMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchNowPlayingMovies);
    yield put(actionCreators.receiveNowPlayingMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfNowPlayingMovies(error));
  }
};

function* fetchMoreNowPlayingMovies(action) {
  try {
    const response = yield call(moviesAPI.fetchNowPlayingMovies, {page: action.payload.pageNumber});
    yield put(actionCreators.receiveExtendedNowPlayingMovies(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfExtendedNowPlayingFailure(error));
  }
}

function* watchNowPlayingMovies() {
  yield takeEvery(actionTypes.NOW_PLAYING_MOVIES_REQUEST, fetchNowPlayingMovies);
}

function* watchExtendNowPlayingMovies() {
  yield takeEvery(actionTypes.NOW_PLAYING_MOVIES_EXTEND_REQUEST, fetchMoreNowPlayingMovies);
}

const sagaTasks = {
  watchNowPlayingMovies,
  watchExtendNowPlayingMovies,
};

export default sagaTasks;
