import React, { Component } from 'react';
import { Text, ScrollView, View, FlatList, Linking, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

// Styles
import styles from './movie-details.styles';

// Action creators
import actionCreators from './movie-details.actions';

// Components
import { FullScreenSpinner } from '../components';
import { SimilarMovies } from '../common';

class MovieDetailsContainer extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.movieId);
  }

  componentWillUnmount() {
    this.props.resetMovieDetails();
  }

  getListData = () => {
    const {
      genres, // array [{id: 1, name: 'Crime'}]
      homepage, // link
      original_language, // string
      overview, // text
      popularity, // 8.733937
      production_companies, // array [{name: 'Legendary'}],
      release_date, // 2017-10-12
      runtime, // `{105}m`,
      status, // string,
      vote_average, // 7.5,
      vote_count, // 1974
    } = this.props.movieDetails;

    const data = [
      {title: 'Genres', value: genres.map(genre => genre.name).join(', ')},
      {title: 'Homepage', value: !!homepage ? homepage : '-'},
      {title: 'Original language', value: original_language},
      {title: 'Overview', value: overview},
      {title: 'Popularity', value: popularity},
      {title: 'Production companies', value: production_companies.map(campaign => campaign.name).join(', ')},
      {title: 'Release date', value: release_date},
      {title: 'Runtime', value: `${runtime} m.`},
      {title: 'Status', value: status},
      {title: 'Vote average', value: vote_average},
      {title: 'Vote count', value: vote_count},
    ];

    return data;
  }

  renderListItem = (data, index) => {
    return (
      <View style={styles.movieDetailsItem} key={index}>
        <Text style={styles.movieDetailsItemHeadline}>
          {data.item.title}
        </Text>
        <Text>
          {data.item.value}
        </Text>
      </View>
    )
  }

  keyExtractor = (item, index) => index;

  render() {
    if(!this.props.movieDetails) {
      return <FullScreenSpinner />
    }

    const posterPath = this.props.configuration.images.secure_base_url+'w500'+this.props.movieDetails.poster_path;
    return (
      <HeaderImageScrollView
        maxHeight={300}
        minHeight={100}
        headerImage={{uri: posterPath}}
      >
        <TriggeringView
          style={styles.movieDetailsTriggeringView}
        >
          <Text style={styles.movieHeadline}>{this.props.movieDetails.original_title}</Text>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.getListData()}
            renderItem={this.renderListItem}
          />
          <SimilarMovies movieId={this.props.match.params.movieId} />
          <Button
            style={{paddingBottom: 40}}
            title="Got it"
            onPress={this.props.history.goBack}
          />
        </TriggeringView>
      </HeaderImageScrollView>
    );
  }
}

const mapStateToProps = state => ({
  configuration: state.configuration.configuration,
  movieDetails: state.movieDetails.movieDetails,
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetails(movieId) {
    dispatch(actionCreators.requestMovieDetails(movieId));
  },
  resetMovieDetails() {
    dispatch(actionCreators.resetMovieDetails());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);