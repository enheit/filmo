import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

// Components
import { Header, Main, Footer } from '../layout';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header history={this.props.history} />
        <Main />
        {/* <Footer /> */}
      </React.Fragment>
    )
  }
}

export default Layout;