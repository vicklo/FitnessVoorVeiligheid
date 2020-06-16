import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity,Image    } from 'react-native';
import { DataTable, Button, withTheme, TextInput } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
        klassen:null,
        klasnaam:"",


          };
  }
  componentDidMount =  async() => 
  {  

  } 
  voegtoe =  async() => 
  {  

      const jsonbody = JSON.stringify({
        "klasnaam": this.state.klasnaam,
          "id": loggedinuser.userid
      });
      console.log(jsonbody);
      await fetch(ipadress+'klassen',{method: 'Post',body:jsonbody,headers: {'Content-Type': 'application/json'},})
      .then(response => response.json())
      .then(response => console.log(response))
      .then(response => this.props.navigation.goBack())
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
           <View style={{alignItems:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center",marginTop:50}}>
                    <Text>Klas naam</Text>
                    <TextInput onChangeText={text =>  this.setState({klasnaam:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" }}></TextInput>
               </View>
               <Button onPress={this.voegtoe}>Toevoegen</Button>
           </View>
        );
  }
}
const styles = StyleSheet.create({
    container:{
      alignItems:"center",
      marginTop:40
    }
})