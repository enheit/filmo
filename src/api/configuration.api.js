import axios from 'axios';

// API Settings
import context from './context';

const fetchConfiguration = () => {
  const url = context.URL('/configuration');
  const request = axios.get(url);

  return request;
}

const configurationAPI = {
  fetchConfiguration,
};

export default configurationAPI;