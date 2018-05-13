import { combineReducers } from 'redux';

// Common
import { reducer as similarMoviesReducer } from './screens/common/similar-movies';

// Screen reducers
import { reducer as configurationReducer } from './configuration';
import { reducer as dashboardReducer } from './screens/dashboard';
import { reducer as movieDetailsReducer } from './screens/movie-details';
import { reducer as popularMoviesReducer } from './screens/popular-movies';
import { reducer as topRatedMoviesReducer } from './screens/top-rated-movies';
import { reducer as nowPlayingMoviesReducer } from './screens/now-playing-movies';
import { reducer as upcomingMoviesReducer } from './screens/upcoming-movies';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  movieDetails: movieDetailsReducer,
  popularMovies: popularMoviesReducer,
  configuration: configurationReducer,
  topRatedMovies: topRatedMoviesReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
  similarMovies: similarMoviesReducer,
});

export default rootReducer;