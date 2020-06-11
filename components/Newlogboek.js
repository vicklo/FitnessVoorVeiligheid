import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity,Image    } from 'react-native';
import { DataTable, Button, withTheme, TextInput } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

  export default class newlogboek extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
        klassen:null,
          };
  }
  componentDidMount =  async() => 
  {  
    
  }
  wijzig = async() =>
  {

  }

  render() {
    return(
        <ScrollView>

        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      alignItems:"center",
      marginTop:40
    }
})