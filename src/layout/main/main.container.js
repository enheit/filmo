import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Route } from 'react-router-native';
import InfiniteScroll from 'react-native-infinite-scroll';
// Constants
import { routes } from '../../constants';

// Components
import { PopularMoviesContainer } from '../../screens/popular-movies';
import { TopRatedMoviesContainer }from '../../screens/top-rated-movies';
import { NowPlayingMoviesContainer } from '../../screens/now-playing-movies';
import { UpcomingMoviesContainer }from '../../screens/upcoming-movies';

class Main extends Component {
  render() {
    return (
      // <InfiniteScroll
      //   horizontal={false}  //true - if you want in horizontal
      //   onLoadMoreAsync={() => {console.error('happened')}}
      //   distanceFromEnd={10} // distance in density-independent pixels from the right end
      // >
      <React.Fragment>
        <Route path={routes.popularMovies} component={PopularMoviesContainer} />
        <Route path={routes.topRatedMovies} component={TopRatedMoviesContainer} />
        <Route path={routes.nowPlayingMovies} component={NowPlayingMoviesContainer} />
        <Route path={routes.upcomingMovies} component={UpcomingMoviesContainer} />
      </React.Fragment>
      // </InfiniteScroll>
    )
  }
}

export default Main;