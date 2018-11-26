/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import TabNavigator from 'react-native-tab-navigator';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import Home from './componems/home/Home.js';
import Profile from './componems/profile/Profile.js';
import Shopcart from './componems/shopcart/Shopcart.js';
import Movies from './componems/movies/Movies.js';
import Icon from 'react-native-vector-icons/FontAwesome';


class App extends Component<Props> {

  constructor(){
    super();
    this.state = {
      selectedTab:'home'
    }
  }
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="主页"
            renderIcon={() => <Icon size={30} name="home" color='gray' />}
            renderSelectedIcon={() => <Icon size={30} name="home" color='blue' />}
             onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>
           <TabNavigator.Item
            selected={this.state.selectedTab === 'shopcart'}
            title="订单"
            renderIcon={() => <Icon size={30} name="shopping-cart" color='gray' />}
            renderSelectedIcon={() => <Icon size={30} name="shopping-cart" color='blue' />}
            
             onPress={() => this.setState({ selectedTab: 'shopcart' })}>
            <Shopcart />
          </TabNavigator.Item>
           <TabNavigator.Item
            selected={this.state.selectedTab === 'movies'}
            title="电影"
            renderIcon={() => <Icon size={30} name="film" color='gray' />}
            renderSelectedIcon={() => <Icon size={30} name="film" color='blue' />}
             onPress={() => this.setState({ selectedTab: 'movies' })}>
            <Movies />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="我的" 
            renderIcon={() => <Icon size={30} name="user" color='gray' />}
            renderSelectedIcon={() => <Icon size={30} name="user" color='blue' />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <Profile />
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}

export default App;