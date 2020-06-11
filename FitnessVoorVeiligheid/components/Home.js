import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

  export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
    };
  }
  componentDidMount =  async() => 
  {
      
  }

  render() {
      if(this.state.isloading)
      return (
    <ScrollView>      
        <ActivityIndicator>
           
        </ActivityIndicator>
    </ScrollView>
    
    );
    else
        return(
          
            <ScrollView >
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#d80399",marginLeft:225,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#291876",marginLeft:260,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>
              <View style={{alignItems:"center" ,backgroundColor:"#291876" ,width: Dimensions.get('window').width,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}} >
                <View style={{alignItems:"center",margin:0,width:100}}>
                  
              
                
                </View>
                </View>
                
                <View style={{marginLeft:15,width:300,height:300}}>
                <Text style={{color:"black",fontSize:30}}>Text</Text>
                </View>
            </ScrollView>
        );
  }
}
const styles = StyleSheet.create({
    container:{

    }
})