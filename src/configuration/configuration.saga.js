import { takeEvery, put, call } from 'redux-saga/effects';

// Configuration API
import { configurationAPI } from '../api';

// Action types
import actionTypes from './configuration.action-types';

// Action creators
import actionCreators from './configuration.actions';

function* fetchConfiguration() {
  try {
    const response = yield call(configurationAPI.fetchConfiguration);
    yield put(actionCreators.receiveConfiguration(response.data));
  } catch (error) {
    yield put(actionCreators.handleFailureOfConfiguration(error));
  }
}

function* watchConfiguration() {
  yield takeEvery(actionTypes.CONFIGURATION_REQUEST, fetchConfiguration);
}

const sagaTasks = {
  watchConfiguration,
};

export default sagaTasks;


