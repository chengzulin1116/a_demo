import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, ActivityIndicator, Button, Text, View, TextInput, Image} from 'react-native';

class Dog extends Component<Props> {

  constructor(){
  	super();
  }

  render() {
    return (
      <View style={{flex:1}}>
         <View style={{flex:3,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/1.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;萌犬好声音</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>
         <View style={{flex:7}}>
           <Text>简介：</Text>
           <Text>&nbsp;&nbsp;&nbsp;&nbsp;《萌犬好声音》是由罗伯特·文斯执导，麦肯锡·莫斯、杰德·瑞斯等主演，
           凯特林·马希尔（Kaitlyn Maher）、汤姆·艾弗瑞特·斯科特等配音的萌宠合家欢喜剧电影。
影片讲述了热爱唱歌的狗狗泰妮因为一次意外从家中走失，为了找回主人，实现梦想，踏上了一场冒险之旅 [1]  。
该片于2016年8月30日在美国上映。</Text>
         </View>  
      </View>
      )
  }
}
export default Dog;