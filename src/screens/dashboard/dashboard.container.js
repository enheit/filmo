import React, { Component } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';

// Styles
import dashboardStyles from './dashboard.styles';

// Constants
import { routes } from '../../constants';

// Component
import { MovieThumbnail, Headline, FullScreenSpinner } from '../components';

// Action creators
import { actionCreators as configurationActionCreators } from '../../configuration';
import { actionCreators as popularMoviesActionCreators } from '../popular-movies';
import { actionCreators as topRatedMoviesActionCreators } from '../top-rated-movies';
import { actionCreators as nowPlayingMoviesActionCreators } from '../now-playing-movies';
import { actionCreators as upcomingMoviesActionCreators } from '../upcoming-movies';

class DashboardContainer extends Component {
  componentDidMount() {
    this.props.requestConfiguration();
    this.props.requestPopularMovies();
    this.props.requestTopRatedMovies();
    this.props.requestNowPlayingMovies();
    this.props.requestUpcomingMovies();
  }

  isCategoriesFetching = () => {
    return this.props.isPopularMoviesLoading
      || this.props.isTopRatedMoviesLoading
      || this.props.isNowPlayingMoviesLoading
      || this.props.isUpcomingMoviesLoading;
  }

  render() {
    if(this.props.isConfigurationLoading || this.isCategoriesFetching()) {
      return <FullScreenSpinner />;
    }

    return (
      <SafeAreaView style={dashboardStyles.safeArea}>
        <ScrollView
          style={dashboardStyles.dashboard}
        >
          <Headline headline="Popular movies" />
            {!!this.props.popularMovies &&
              <MovieThumbnail
                to={routes.popularMovies}
                uri={this.props.configuration.images.secure_base_url + 'w780' + this.props.popularMovies.results[0].poster_path}
                movie={this.props.popularMovies.results[0]}
            />}

          <Headline headline="TOP rated movies" />
            {!!this.props.topRatedMovies &&
              <MovieThumbnail
                to={routes.topRatedMovies}
                uri={this.props.configuration.images.secure_base_url + 'w780' + this.props.topRatedMovies.results[0].poster_path}
                movie={this.props.topRatedMovies.results[0]}
            />}

          <Headline headline="Now playing in theatres" />
            {!!this.props.nowPlayingMovies &&
              <MovieThumbnail
                to={routes.nowPlayingMovies}
                uri={this.props.configuration.images.secure_base_url + 'w780' + this.props.nowPlayingMovies.results[0].poster_path}
                movie={this.props.nowPlayingMovies.results[0]}
            />}

          <Headline headline="Upcoming movies" />
            {!!this.props.upcomingMovies &&
              <MovieThumbnail
                to={routes.upcomingMovies}
                uri={this.props.configuration.images.secure_base_url + 'w780' + this.props.upcomingMovies.results[0].poster_path}
                movie={this.props.upcomingMovies.results[0]}
            />}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  isConfigurationLoading: state.configuration.isLoading,
  configuration: state.configuration.configuration,

  isPopularMoviesLoading: state.popularMovies.isLoading,
  popularMovies: state.popularMovies.popularMovies,

  isTopRatedMoviesLoading: state.topRatedMovies.isLoading,
  topRatedMovies: state.topRatedMovies.topRatedMovies,

  isNowPlayingMoviesLoading: state.nowPlayingMovies.isLoading,
  nowPlayingMovies: state.nowPlayingMovies.nowPlayingMovies,

  isUpcomingMoviesLoading: state.upcomingMovies.isLoading,
  upcomingMovies: state.upcomingMovies.upcomingMovies,
});

const mapDispatchToProps = dispatch => ({
  requestConfiguration() {
    dispatch(configurationActionCreators.requestConfiguration());
  },
  requestPopularMovies() {
    dispatch(popularMoviesActionCreators.requestPopularMovies());
  },
  requestTopRatedMovies() {
    dispatch(topRatedMoviesActionCreators.requestTopRatedMovies());
  },
  requestNowPlayingMovies() {
    dispatch(nowPlayingMoviesActionCreators.requestNowPlayingMovies());
  },
  requestUpcomingMovies() {
    dispatch(upcomingMoviesActionCreators.requestUpcomingMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);