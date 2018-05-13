const API_KEY = '5548429f5571ff5728698deabb4aa135';
const HOST = 'https://api.themoviedb.org/3';
const URL = (endpoint) => `${HOST}${endpoint}?api_key=${API_KEY}`;

const context = {
  API_KEY,
  HOST,
  URL,
};

export default context;