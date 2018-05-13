const routes = {
  root: '/',
  categories: '/categories',

  popularMovies: `/categories/popular-movies`,
  topRatedMovies: `/categories/top-rated-movies`,
  nowPlayingMovies: `/categories/now-playing-movies`,
  upcomingMovies: `/categories/upcoming-movies`,

  movieDetails: movieId => `/movie-details/${movieId}`,
};

export default routes;