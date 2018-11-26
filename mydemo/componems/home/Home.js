import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, ActivityIndicator, Button, Text, View, TextInput, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  wrapper: {
    flex:9
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

class Home extends Component<Props> {

  constructor(){
  	super();
  }
  gotoDog(){
    Actions.dog({data:"",title:"萌犬好声音"})
  }
  gotoWayhome(){
    Actions.wayhome({data:"",title:"狼伴归途"})
  }
  gotoMovies(){
    Actions.movies({data:"",title:"HPEU电影"})
  }
  gotoShopcar(){
    Actions.shopcart({data:"",title:"订单列表"})
  }
  gotoProfile(){
     Actions.profile({data:"",title:"我的列表"})
  }

  render() {
    return (
      <View style={{flex:1}}>
         <Swiper autoplay={true} style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Image source={require('../imgs/11.jpg')} />
          </View>
          <View style={styles.slide2}>
            <Image source={require('../imgs/12.jpg')} />
          </View>
          <View style={styles.slide3}>
            <Image source={require('../imgs/13.jpg')} />
          </View>
      </Swiper>

      <View style={{flex:0.3,flexDirection:'row', justifyContent:'center'}}>
          <View style={{width:'16%'}}>

          </View>
          <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/1.png')} />
              <Text onPress={this.gotoDog}>萌犬好声音</Text>
          </View>
         <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/2.png')} />
              <Text onPress={this.gotoWayhome}>狼伴归途</Text>
          </View>
          <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/3.png')} />
              <Text onPress={this.gotoWayhome}>妖狐苏妲己</Text>
          </View>
      </View>

       <View style={{flex:0.3,flexDirection:'row', justifyContent:'center'}}>
          <View style={{width:'16%'}}>

          </View>
          <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/4.png')} />
              <Text onPress={this.gotoWayhome}>我不是药神</Text>
          </View>
         <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/5.png')} />
              <Text onPress={this.gotoWayhome}>西红柿首付</Text>
          </View>
          <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/6.png')} />
              <Text onPress={this.gotoWayhome}>蚁人</Text>
          </View>
      </View>

       <View style={{flex:0.4,flexDirection:'row', justifyContent:'center'}}>
          <View style={{width:'16%'}}>

          </View>
          <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/7.png')} />
              <Text onPress={this.gotoWayhome}>五个姐姐</Text>
          </View>
         <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/8.png')} />
              <Text onPress={this.gotoWayhome}>克隆人</Text>
          </View>
          <View style={{width:'28%'}}>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Image style={{width:45,height:35}} source={require('../imgs/9.png')} />
              <Text onPress={this.gotoWayhome}>我们的美好时光</Text>
          </View>
      </View>

      </View>
      )
  }
}
export default Home;