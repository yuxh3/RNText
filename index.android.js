import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './Commponent/Main/Main'
class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>

            <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('myreactactivity', () => AwesomeProject);