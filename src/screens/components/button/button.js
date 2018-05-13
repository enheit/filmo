import React, { Component } from 'react';
import { Button as NativeButton } from 'react-native';

// Styles
import styles from './button.styles';

class Button extends Component {
  render() {
    return (
      <NativeButton
        onPress={this.props.onPress}
        title={this.props.title}
      />
    );
  }
}

export default Button;