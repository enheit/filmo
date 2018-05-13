import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Constants
import { titles } from '../../constants';

import styles from './header.styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.props.history.goBack}
        >
          <View style={styles.button}>
            <Icon
              style={styles.buttonIcon}
              name="keyboard-arrow-left"
              size={32}
              color="#0099ff"
            />
            <Text style={styles.buttonText}>
              Back
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{titles[this.props.history.location.pathname]}</Text>
        </View>

      </View>
    )
  }
}

export default Header;