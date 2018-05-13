import React, { Component } from 'react';
import { ScrollView, Text, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-native-infinite-scroll';
import throttle from 'lodash.throttle';

// Styles
import styles from './upcoming-movies.styles';

// Action creators
import actionCreators from './upcoming-movies.actions';

// Components
import { MoviePreview, Search } from '../components';

class UpcomingMoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.fetchMore = throttle(this.fetchMore.bind(this), 5000);
  }

  renderMoviewPreview = (movie) => {
    const posterPath = this.props.configuration.images.secure_base_url+'w154'+movie.poster_path;
    return (
      <MoviePreview
        key={movie.id}
        movieId={movie.id}
        posterPath={posterPath}
        originalTitle={movie.original_title}
        voteAverage={movie.vote_average}
        overview={movie.overview}
        releaseDate={movie.release_date}
      />
    )
  }

  fetchMore() {
    if(!this.props.isLoading) {
      if(this.props.pageNumber + 1 <= this.props.totalPages) {
        this.props.fetchExtendedUpcomingMovies(this.props.pageNumber + 1);
      }
    }
  }

  render() {
    const movies = this.props.upcomingMovies.results
    .filter(movie => movie.original_title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1);

    return (
      <View>
        <Search
          value={this.props.filter}
          onChangeText={this.props.filterUpcomingMoviesByName}
        />
        <InfiniteScroll
          horizontal={false}  //true - if you want in horizontal
          onLoadMoreAsync={this.fetchMore}
          distanceFromEnd={10} // distance in density-independent pixels from the right end
        >
        <ScrollView style={styles.upcomingMovies}>
            {movies.length > 0
              ? movies.map(this.renderMoviewPreview)
              : !!this.props.filter
                ? <Text>No results for '{this.props.filter}'</Text>
                : <Text>There are no movies found</Text>}
        </ScrollView>
        {this.props.isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        </InfiniteScroll>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  configuration: state.configuration.configuration,
  upcomingMovies: state.upcomingMovies.upcomingMovies,
  pageNumber: state.upcomingMovies.pageNumber,
  isLoading: state.upcomingMovies.isLoading,
  totalPages: state.upcomingMovies.totalPages,
  filter: state.upcomingMovies.filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUpcomingMovies(options) {
    dispatch(actionCreators.requestUpcomingMovies(options));
  },
  fetchExtendedUpcomingMovies(page) {
    dispatch(actionCreators.requestExtendedUpcomingMovies(page));
  },
  filterUpcomingMoviesByName(movieName) {
    dispatch(actionCreators.filterUpcomingMoviesByName(movieName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingMoviesContainer);