import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import PageTwo from './PageTwo';

class PageOne extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
      main: {paddingLeft: 3},
    };
    let closeControlPanel = () => {
      this.refs._drawer.close()
    };
    let openControlPanel = () => {
      this.refs._drawer.open()
    };
    let boundClose = closeControlPanel.bind(this);

    return (
      <Drawer
      type="overlay"
      ref="_drawer"
      content={<PageTwo text="close me" close={closeControlPanel} flagger={this.props.flagger}/>}
      tapToClose={true}
      openDrawerOffset={0.2} // 20% gap on the right side of drawer
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={drawerStyles}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}>
        <View style={{margin: 128}}>
          <Text onPress={openControlPanel}>This is { this.props.flagger ? 'bar' : 'foo'}</Text>
          <Text onPress={this.props.toggleBar}>Toggle bar</Text>
        </View>
      </Drawer>
    )
  }
}

function addTodo(text) {
  return {
  	type: 'bar',
  	text: 'what'
  };
}

function mapStateToProps({previousRoute}) {
  return { flagger: previousRoute.bar }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleBar: function (text) {
      return dispatch(addTodo(text));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);
