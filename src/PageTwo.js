import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class PageTwo extends Component {

  render() {
    const { close } = this.props;
    let foo = function() {
       console.log('foo');
    };

    return (
      <View style={{margin: 128}}>
        <Text>This is PageTwo!</Text>
        <Text onPress={close}>This is { this.props.flagger ? 'bar' : 'foo'}</Text>
      </View>
    )
  }
}
