import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, ActivityIndicator, Button, Text, View, TextInput, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';



const styles = StyleSheet.create({
  wrapper: {
    height:150
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

class Shopcart extends Component<Props> {

  constructor(){
  	super();
  }

  render() {
    return (
      <ScrollView style={{height:660}}>
         <View style={{height:50}}>
             <Text style={{color: 'red',fontWeight: 'bold',fontSize: 20}}>我的订阅</Text>
         </View>
         <Swiper autoplay={true} style={styles.wrapper} showsButtons={true}>
              <View style={styles.slide1}>
                <Image source={require('../imgs/d1.png')} />
              </View>
              <View style={styles.slide2}>
                <Image source={require('../imgs/d2.png')} />
              </View>
              <View style={styles.slide3}>
                <Image source={require('../imgs/d3.png')} />
              </View>
          </Swiper>
          <View style={{height:50}}>
             <Text>&nbsp;</Text>
             <Text style={{color: 'gray',fontWeight: 'bold',fontSize: 15}}>我订阅的电影</Text>
             <Text>&nbsp;</Text>
         </View>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/1.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;萌犬好声音</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

         <Text style={{height:10}}></Text>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/2.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;狼伴归途</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

          <Text style={{height:10}}></Text>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/3.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;妖狐苏妲己</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>



          <View style={{height:50}}>
             <Text>&nbsp;</Text>
             <Text style={{color: 'gray',fontWeight: 'bold',fontSize: 15}}>即将上映的电影</Text>
             <Text>&nbsp;</Text>
         </View>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/4.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;我不是药神</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

         <Text style={{height:10}}></Text>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/5.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;西红柿首付</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

          <Text style={{height:10}}></Text>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/6.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;蚁人</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

      </ScrollView>
      )
  }
}
export default Shopcart;