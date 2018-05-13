import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Switch, Route, Link } from 'react-router-native';

// Store
import store from './store';

// Constants
import { routes } from './constants';

// Layout
import { Layout } from './layout';

// Components
import { DashboardContainer } from './screens/dashboard';
import { MovieDetailsContainer } from './screens/movie-details';

import { PopularMoviesContainer } from './screens/popular-movies';
import { TopRatedMoviesContainer }from './screens/top-rated-movies';
import { NowPlayingMoviesContainer } from './screens/now-playing-movies';
import { UpcomingMoviesContainer }from './screens/upcoming-movies';

import { NotFoundContainer } from './screens/not-found';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Switch>
            <Route exact path={routes.root} component={DashboardContainer} />
            <Route path={routes.categories} component={Layout} />
            <Route path={routes.movieDetails(':movieId')} component={MovieDetailsContainer} />
            <Route component={NotFoundContainer} />
          </Switch>
        </NativeRouter>
      </Provider>
    )
  }
}

export default Main;