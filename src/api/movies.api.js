import axios from 'axios';

// Helpers
import { appendQueryParams } from '../helpers';

// API Settings
import context from './context';

const fetchPopularMovies = (options) => {
  const url = context.URL('/movie/popular');
  const request = axios.get(appendQueryParams(url, options));

  return request;
};

const fetchTopRatedMovies = (options) => {
  const url = context.URL('/movie/top_rated');
  const request = axios.get(appendQueryParams(url, options));

  return request;
};

const fetchNowPlayingMovies = (options) => {
  const url = context.URL('/movie/now_playing');
  const request = axios.get(appendQueryParams(url, options));

  return request;
};

const fetchUpcomingMovies = (options) => {
  const url = context.URL('/movie/upcoming');
  const request = axios.get(appendQueryParams(url, options));

  return request;
};

const fetchMovieDetails = (movieId, options) => {
  const url = context.URL(`/movie/${movieId}`);
  const request = axios.get(appendQueryParams(url, options));

  return request;
};

const fetchSimilarMovies = (movieId, options) => {
  const url = context.URL(`/movie/${movieId}/similar`);
  const request = axios.get(appendQueryParams(url, options));

  return request;
};

const moviesAPI = {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchMovieDetails,
  fetchSimilarMovies,
};

export default moviesAPI;