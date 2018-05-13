import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native';

// Constants
import routes from '../../../constants/routes.constants';

// Styles
import styles from './similar-movies.styles';

// Action creators
import actionCreators from './similar-movies.actions';
import { actionCreators as movieDetailsActionCreators } from '../../movie-details';

class SimilarMovies extends Component {
  componentDidMount() {
    this.props.requestSimilarMovies(this.props.movieId);
  }

  requestDetails(movieId) {
    this.props.requestMovieDetails(movieId);
    this.props.requestSimilarMovies(movieId);
  }

  renderSimilarMoviesItems = (movie, index) => {
    const posterPath = this.props.configuration.images.secure_base_url+'w500'+movie.poster_path;
    return (
      <TouchableOpacity
        key={movie.id}
        onPress={() => this.requestDetails(movie.id)}
      >
        <Image
          style={styles.thumbnailImage}
          source={{uri: posterPath}}
        />
        <Text style={styles.thumbnailTitle}>
          {movie.original_title}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    if(!this.props.similarMovies) {
      return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (
      <View style={styles.similarMoviesContainer}>
        <Text style={styles.headline}>Similar movies</Text>
        <ScrollView
          horizontal={true}
        >
          {this.props.similarMovies.results.map(this.renderSimilarMoviesItems)}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  configuration: state.configuration.configuration,
  similarMovies: state.similarMovies.similarMovies,
});

const mapDispatchToProps = (dispatch) => ({
  requestSimilarMovies(movieId) {
    dispatch(actionCreators.requestSimilarMovies(movieId));
  },
  requestMovieDetails(movieId) {
    dispatch(movieDetailsActionCreators.requestMovieDetails(movieId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovies);