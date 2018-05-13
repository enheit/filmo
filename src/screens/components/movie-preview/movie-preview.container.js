import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';

// Constants
import { routes } from '../../../constants';

// Styles
import styles from './movie-preview.styles';

class MoviePreview extends Component {
  render() {
    return (
      <View style={styles.moviewPreview}>
        <Image
          style={styles.poster}
          source={{uri: this.props.posterPath}}
        />
        <View style={styles.information}>
            <Link
              to={routes.movieDetails(this.props.movieId)}
              component={TouchableOpacity}
            >
              <Text style={styles.originalTitle}>
                {this.props.originalTitle}
              </Text>
            </Link>
          <Text style={styles.releaseDate}>
            <Text style={styles.bold}>
              Release date:
            </Text>
            {'\n'}{this.props.releaseDate}
          </Text>
          <Text style={styles.voteAverage}>
            <Text style={styles.bold}>
              Vote average:
            </Text>
            {'\n'}{this.props.voteAverage}
          </Text>
          <Text style={styles.overview}>
            <Text style={styles.bold}>
              Overview:
            </Text>
            {'\n'}{this.props.overview}
          </Text>
        </View>
      </View>
    );
  }
}

export default MoviePreview;