import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

// API
import { moviesAPI } from '../../api';

// Action types
import actionTypes from './movie-details.action-types';

// Action creators
import actionCreators from './movie-details.actions';

function* fetchMovieDetails(action) {
  try {
    const response = yield call(moviesAPI.fetchMovieDetails, action.payload.movieId);
    yield put(actionCreators.receiveMovieDetails(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfMovieDetails(error));
  }
};

function* watchMovieDetails() {
  yield takeEvery(actionTypes.MOVIE_DETAILS_REQUEST, fetchMovieDetails);
}

const sagaTasks = {
  watchMovieDetails,
};

export default sagaTasks;