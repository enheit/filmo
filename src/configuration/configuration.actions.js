// Action types
import actionTypes from './configuration.action-types';

const requestConfiguration = () => ({
  type: actionTypes.CONFIGURATION_REQUEST,
  payload: {
    isLoading: true,
  }
});

const receiveConfiguration = (configuration) => ({
  type: actionTypes.CONFIGURATION_RECEIVE,
  payload: {
    configuration,
    isLoading: false,
  },
});

const handleFailureOfConfiguration = (error) => ({
  type: actionTypes.CONFIGURATION_FAILURE,
  payload: {
    error,
    isLoading: false,
  },
});

const actionCreators = {
  requestConfiguration,
  receiveConfiguration,
  handleFailureOfConfiguration,
};

export default actionCreators;

