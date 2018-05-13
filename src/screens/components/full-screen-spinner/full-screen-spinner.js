import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

// Styles
import styles from './full-screen-spinner.styles';

class FullScreenSpinner extends Component {
  render() {
    return (
      <View style={styles.fullScreenSpinnerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

export default FullScreenSpinner;