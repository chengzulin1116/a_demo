import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, ActivityIndicator, Button, Text, View, TextInput, Image} from 'react-native';
import {Router,Stack,Scene} from 'react-native-router-flux';
import Home from './componems/home/Home.js';
import Profile from './componems/profile/Profile.js';
import Shopcart from './componems/shopcart/Shopcart.js';
import Movies from './componems/movies/Movies.js';
import App from './App.js';
import Dog from './componems/all/Dog.js';
import Wayhome from './componems/wayhome/Wayhome.js';


class Main extends Component<Props> {

  constructor(){
  	super();
  }

  render() {
    return (
       <Router>
          <Stack key="root">
            <Scene key="app" component={App} title="" hideNavBar={true}/>
            <Scene key="home" component={Home} title="主页面"/>
            <Scene key="movies" component={Movies} title="电影列表"/>
            <Scene key="profile" component={Profile} title="我的信息"/>
            <Scene key="shopcart" component={Shopcart} title="我的订单"/>
            <Scene key="dog" component={Dog} title="萌犬好声音"/>
            <Scene key="wayhome" component={Wayhome} title="狼伴归途"/>
          </Stack>
        </Router>
      )
  }
}
export default Main;