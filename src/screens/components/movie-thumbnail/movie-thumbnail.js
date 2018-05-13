import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import { BlurView } from 'expo';

// Styles
import movieThumbnailStyles from './movie-thumbnail.styles';

class MovieThumbnail extends Component {
  render() {
    return (
      <Link
        to={this.props.to}
        style={movieThumbnailStyles.link}
      >
        <ImageBackground
          style={movieThumbnailStyles.thumbnail}
          source={{uri: this.props.uri}}
          imageStyle={movieThumbnailStyles.image}
        >
          <BlurView
            intensity={100}
            style={movieThumbnailStyles.footer}
          >
            <Text style={movieThumbnailStyles.footerText}>
              {this.props.movie.original_title.toUpperCase()}
            </Text>
          </BlurView>
        </ImageBackground>
      </Link>
    );
  }
}

export default MovieThumbnail;