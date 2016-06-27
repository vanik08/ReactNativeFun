/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput
} from 'react-native';

class AwesomeProject extends Component {
  constructor() {
    super();
    this.state = {
      name: 'vanik',
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let myString = 'ay';
    [1, 2, 'van'].forEach((itm) => myString += itm);
    this.setState({name: myString});
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
        <Text>
          To get sdtarted, edit index.ios.js
        </Text>
        <View style={{backgroundColor: 'red'}}>
          <TextInput style={{ height: 60 }} value={'nil'} placeholder="type JOEEEEE here" />
        </View>
        <TouchableHighlight onPress={this.onPress}>
          <Text>Click Me {this.state.name}</Text>
        </TouchableHighlight>
        <Text>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
