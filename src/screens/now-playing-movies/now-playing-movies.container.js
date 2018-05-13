import React, { Component } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-native-infinite-scroll';
import throttle from 'lodash.throttle';

// Styles
import styles from './now-playing-movies.styles';

// Action creators
import actionCreators from './now-playing-movies.actions';

// Components
import { MoviePreview, Search } from '../components';

class NowPlayingMoviesContainer extends Component {

  constructor(props) {
    super(props);

    this.fetchMore = throttle(this.fetchMore.bind(this), 5000);
  }

  renderMoviewPreview = (movie, index) => {
    const posterPath = this.props.configuration.images.secure_base_url+'w154'+movie.poster_path;
    return (
      <MoviePreview
        key={index}
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
        this.props.fetchExtendedNowPlayingMovies(this.props.pageNumber + 1);
      }
    }
  }

  render() {
    const movies = this.props.nowPlayingMovies.results
      .filter(movie => movie.original_title.toLowerCase().indexOf(this.props.filter.toLowerCase()) !== -1);

    return (
      <View>
        <Search
          value={this.props.filter}
          onChangeText={this.props.filterNowPlayingMoviesByName}
        />
       <InfiniteScroll
          horizontal={false}  //true - if you want in horizontal
          onLoadMoreAsync={this.fetchMore}
          distanceFromEnd={10} // distance in density-independent pixels from the right end
        >
          <ScrollView style={styles.nowPlayingMovies}>
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
  nowPlayingMovies: state.nowPlayingMovies.nowPlayingMovies,
  pageNumber: state.nowPlayingMovies.pageNumber,
  isLoading: state.nowPlayingMovies.isLoading,
  totalPages: state.nowPlayingMovies.totalPages,
  filter: state.nowPlayingMovies.filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNowPlayingMovies(options) {
    dispatch(actionCreators.requestNowPlayingMovies(options));
  },
  fetchExtendedNowPlayingMovies(page) {
    dispatch(actionCreators.requestExtendedNowPlayingMovies(page));
  },
  filterNowPlayingMoviesByName(movieName) {
    dispatch(actionCreators.filterNowPlayingMoviesByName(movieName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlayingMoviesContainer);