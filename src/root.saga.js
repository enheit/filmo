import { all, takeEvery } from 'redux-saga/effects';

// Common
import { sagaTasks as similarMoviesSagaTasks } from './screens/common/similar-movies';

// Screens
import { sagaTasks as configurationSagaTasks } from './configuration';
import { sagaTasks as movieDetailsSagaTasks, } from './screens/movie-details';
import { sagaTasks as popularMoviesSagaTasks } from './screens/popular-movies';
import { sagaTasks as topRatedMoviesSagaTasks } from './screens/top-rated-movies';
import { sagaTasks as nowPlayingMoviesSagaTasks } from './screens/now-playing-movies';
import { sagaTasks as upcomingMoviesSagaTasks } from './screens/upcoming-movies';

function* rootSaga() {
  yield all([
    configurationSagaTasks.watchConfiguration(),

    popularMoviesSagaTasks.watchPopularMovies(),
    popularMoviesSagaTasks.watchExtendPopularMovies(),

    topRatedMoviesSagaTasks.watchTopRatedMovies(),
    topRatedMoviesSagaTasks.watchExtendTopRatedMovies(),

    nowPlayingMoviesSagaTasks.watchNowPlayingMovies(),
    nowPlayingMoviesSagaTasks.watchExtendNowPlayingMovies(),

    upcomingMoviesSagaTasks.watchUpcomingMovies(),
    upcomingMoviesSagaTasks.watchExtendUpcomingMovies(),

    movieDetailsSagaTasks.watchMovieDetails(),

    similarMoviesSagaTasks.watchSimilarMovies(),
  ]);
};

export default rootSaga;