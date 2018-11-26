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

class Movies extends Component<Props> {

  constructor(){
  	super();
  }

  render() {
    return (
     <ScrollView style={{height:660}}>
         <View style={{height:50}}>
             <Text style={{color: 'red',fontWeight: 'bold',fontSize: 20}}>即将上映的电影</Text>
         </View>
         <Swiper autoplay={true} style={styles.wrapper} showsButtons={true}>
              <View style={styles.slide1}>
                <Image style={{width:415,height:195}} source={require('../imgs/y4.png')} />
              </View>
              <View style={styles.slide2}>
                <Image style={{width:415,height:195}} source={require('../imgs/y5.png')} />
              </View>
              <View style={styles.slide3}>
                <Image style={{width:415,height:195}} source={require('../imgs/y6.png')} />
              </View>
          </Swiper>
          <View style={{height:50}}>
             <Text>&nbsp;</Text>
             <Text style={{color: 'gray',fontWeight: 'bold',fontSize: 15}}>正在热播</Text>
             <Text>&nbsp;</Text>
         </View>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/7.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;五个姐姐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

         <Text style={{height:10}}></Text>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/8.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;克隆人</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

          <Text style={{height:10}}></Text>

         <View style={{width:120,flexDirection:'row'}}>
           <View>
              <Image style={{width:100,height:120}} source={require('../imgs/9.png')} />
           </View>  
           <View>
              <Text>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
              <Text style={{fontSize:20,fontWeight:'bold',color:'blue'}}>&nbsp;&nbsp;&nbsp;&nbsp;我们的美好时光</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;导演：罗伯特.文斯</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;类型：独播 新片 歌舞 音乐</Text>
              <Text style={{width:265}}>&nbsp;&nbsp;&nbsp;&nbsp;上映时间：2018-11-20</Text>
           </View>
         </View>

          <View style={{height:50}}>
             <Text>&nbsp;</Text>
             <Text style={{color: 'gray',fontWeight: 'bold',fontSize: 15}}>热门电影</Text>
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
export default Movies;