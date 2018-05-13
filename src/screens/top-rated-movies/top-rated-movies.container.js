import React, { Component } from 'react';
import { ScrollView, Text, ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-native-infinite-scroll';
import throttle from 'lodash.throttle';

// Styles
import styles from './top-rated-movies.styles';

// Action creators
import actionCreators from './top-rated-movies.actions';

// Components
import { MoviePreview, Search } from '../components';

class TopRatedMoviesContainer extends Component {
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
        this.props.fetchExtendedTopRatedMovies(this.props.pageNumber + 1);
      }
    }
  }

  render() {
    const movies = this.props.topRatedMovies.results
      .filter(movie => movie.original_title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1);

    return (
      <View>
        <Search
          value={this.props.filter}
          onChangeText={this.props.filterTopRatedMoviesByName}
        />
        <InfiniteScroll
          horizontal={false}  //true - if you want in horizontal
          onLoadMoreAsync={this.fetchMore}
          distanceFromEnd={10} // distance in density-independent pixels from the right end
        >
          <ScrollView style={styles.topRatedMovies}>
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
  topRatedMovies: state.topRatedMovies.topRatedMovies,
  pageNumber: state.topRatedMovies.pageNumber,
  isLoading: state.topRatedMovies.isLoading,
  totalPages: state.topRatedMovies.totalPages,
  filter: state.topRatedMovies.filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTopRatedMovies(options) {
    dispatch(actionCreators.requestTopRatedMovies(options));
  },
  fetchExtendedTopRatedMovies(page) {
    dispatch(actionCreators.requestExtendedTopRatedMovies(page));
  },
  filterTopRatedMoviesByName(movieNmae) {
    dispatch(actionCreators.filterTopRatedMoviesByName(movieNmae));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TopRatedMoviesContainer);