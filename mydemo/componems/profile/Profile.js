import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, ActivityIndicator, Button, Text, View, TextInput, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Router,Stack,Scene,Actions} from 'react-native-router-flux';


class Profile extends Component<Props> {

  constructor(){
  	super();
  }

  render() {
    return (
      <ScrollView style={{height:630}}>
          <Text style={{height:50,color: 'red',fontWeight: 'bold',fontSize: 20,backgroundColor:'#ccc'}}>我的</Text>
          <Text style={{height:50,fontWeight: 'bold',fontSize: 15,backgroundColor:'black',color: 'white'}}>基本信息</Text>
          <View style={{height:140,flexDirection:'row',backgroundColor:'black'}}>
             <Image style={{width:100,height:100,borderRadius:50}} source={require('../imgs/hh.png')} />
              <View>
                  <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;珍惜.珍爱</Text>
                  <Text style={{width:265,color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;座右铭：佛曰：“前世的500次回眸才换</Text>
                  <Text style={{width:265,color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;来今生的一次擦肩而过”。我宁愿用来世</Text>
                  <Text style={{width:265,color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;的一次擦肩而过来换得今生的500次回</Text>
                  <Text style={{width:265,color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;眸。</Text>
              </View>
          </View>
          <Text style={{height:20}}></Text>
          <Text style={{backgroundColor:'#ddd',height:30}}>会员服务</Text>
           
           <View style={{flexDirection:'row',height:80}}>
               <Text style={{width:20}}>&nbsp;</Text>
              <View style={{width:150,height:60}}>
                   <Text style={{width:10}}></Text>
                   <View style={{width:150,height:50,backgroundColor:'#eee'}}>
                       <Text style={{color:'orange'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的VIP会员</Text>
                       <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;领取升级礼包</Text>
                   </View>
              </View>     

               <Text style={{width:50}}>&nbsp;</Text>
              <View style={{width:150,height:60}}>
                   <Text style={{width:10}}></Text>
                   <View style={{width:150,height:50,backgroundColor:'#eee'}}>
                       <Text style={{color:'orange'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开通FUN会员</Text>
                       <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;畅看动漫漫画</Text>
                   </View>
              </View>    
           </View>

           <Text style={{height:20}}></Text>
          <Text style={{backgroundColor:'#ddd',height:30}}>我的泡泡</Text>
           
           <View style={{flexDirection:'row',height:80}}>
               <Text style={{width:20}}>&nbsp;</Text>
              <View style={{width:150,height:60}}>
                   <Text style={{width:10}}></Text>
                   <View style={{width:150,height:50,backgroundColor:'#eee',flexDirection:'row'}}>
                       <Image style={{width:40,height:40,borderRadius:50}} source={require('../imgs/hkk.png')} />
                      <View>
                          <Text style={{fontWeight:'bold',}}>&nbsp;&nbsp;&nbsp;&nbsp;海贼王</Text>
                          <Text style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;已更新845节</Text>
                      </View>
                   </View>
              </View>     

               <Text style={{width:50}}>&nbsp;</Text>
              <View style={{width:150,height:60}}>
                   <Text style={{width:10}}></Text>
                   <View style={{width:150,height:50,backgroundColor:'#eee',flexDirection:'row'}}>
                       <Image style={{width:40,height:40,borderRadius:50}} source={require('../imgs/qq.png')} />
                      <View>
                          <Text style={{fontWeight:'bold',}}>&nbsp;&nbsp;&nbsp;&nbsp;画江湖</Text>
                          <Text style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;已更新45节</Text>
                      </View>
                   </View>
              </View>    
           </View>

            <Text style={{height:20}}></Text>
          <Text style={{backgroundColor:'#ddd',height:30}}>我的泡泡</Text>
           
           <View style={{flexDirection:'row',height:80}}>
               <Text style={{width:20}}>&nbsp;</Text>
              <View style={{width:150,height:60}}>
                   <Text style={{width:10}}></Text>
                   <View style={{width:150,height:50,backgroundColor:'#eee',flexDirection:'row'}}>
                       <Image style={{width:40,height:40,borderRadius:50}} source={require('../imgs/hkk.png')} />
                      <View>
                          <Text style={{fontWeight:'bold',}}>&nbsp;&nbsp;&nbsp;&nbsp;海贼王</Text>
                          <Text style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;已更新845节</Text>
                      </View>
                   </View>
              </View>     

               <Text style={{width:50}}>&nbsp;</Text>
              <View style={{width:150,height:60}}>
                   <Text style={{width:10}}></Text>
                   <View style={{width:150,height:50,backgroundColor:'#eee',flexDirection:'row'}}>
                       <Image style={{width:40,height:40,borderRadius:50}} source={require('../imgs/qq.png')} />
                      <View>
                          <Text style={{fontWeight:'bold',}}>&nbsp;&nbsp;&nbsp;&nbsp;画江湖</Text>
                          <Text style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;已更新45节</Text>
                      </View>
                   </View>
              </View>    
           </View>

      </ScrollView>
      )
  }
}
export default Profile;