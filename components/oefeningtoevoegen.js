import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction,TextInput } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';


  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        oefeningnaam:"",
        oefeningvideo:""
    };
  }
  componentDidMount =  async() => 
  {  
    

  }
  voegtoe = async() =>
  {
    const jsonbody = JSON.stringify({
        "oefeningnaam": this.state.oefeningnaam,
          "oefeningvideo": this.state.oefeningvideo,
          "docentid": loggedinuser.userid
      });
      console.log(jsonbody);
      await fetch(ipadress+'oefeningen',{method: 'Post',body:jsonbody,headers: {'Content-Type': 'application/json'},})
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => this.props.navigation.goBack())
  }
  render() {
        return(
            <View style={{alignItems:"center"}}>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:50}}>
                 <Text>Oefening naam</Text>
                 <TextInput onChangeText={text =>  this.setState({oefeningnaam:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" }}></TextInput>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:50}}>
                 <Text>Oefening video</Text>
                 <TextInput onChangeText={text =>  this.setState({oefeningvideo:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" }}></TextInput>
            </View>
            <Button onPress={this.voegtoe}>Toevoegen</Button>
        </View>

        );
  }
}
const styles = StyleSheet.create({
    container:{
      margin: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: 
      {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      backgroundColor:"lightgray",
      padding :10,
      flexDirection:"row"
    }
})