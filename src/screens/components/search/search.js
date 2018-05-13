import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Styles
import styles from './search.styles';

class Search extends Component {
  render() {
    return (
      <TextInput
        value={this.props.value}
        style={styles.search}
        placeholder="Search..."
        clearButtonMode="always"
        onChangeText={this.props.onChangeText}
      />
    );
  }
}

export default Search;