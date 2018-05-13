import React, { Component } from 'react';
import { Text } from 'react-native';

// Styles
import styles from './headline.styles';

class Headline extends Component {
  render() {
    return (
      <Text style={styles.headline}>
        {this.props.headline}
      </Text>
    )
  }
}

export default Headline;