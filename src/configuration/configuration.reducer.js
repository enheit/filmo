// Action types
import actionTypes from './configuration.action-types';

const defaultState = {
  configuration: null,
  isLoading: false,
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CONFIGURATION_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case actionTypes.CONFIGURATION_RECEIVE:
      return {
        ...state,
        configuration: action.payload.configuration,
        isLoading: action.payload.isLoading,
      };
    case actionTypes.CONFIGURATION_FAILURE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
};

export default reducer;
