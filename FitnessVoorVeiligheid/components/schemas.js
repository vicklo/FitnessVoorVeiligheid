import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { ShowDataTableRow } from './ShowDataTableRow';



  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
    };
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
            <ScrollView>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#d80399",marginLeft:200,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#291876",marginLeft:260,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>
              <View style={{alignItems:"center" ,backgroundColor:"#291876" ,width: Dimensions.get('window').width,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}} >
              <View style={{flexDirection:"row",alignItems:"center"}} >
                  <View style={{alignItems:"center",margin:15,width:100}}>
                      <Text style={{color:"white",fontSize:15}}>schema naam</Text>
                      <Text style={{color:"white",fontSize:30}}>{loggedinuser.voornaam}</Text>
                  </View> 
                  <View style={{alignItems:"center",margin:15,width:100}}>
                      <Text style={{color:"white",fontSize:15}}>doel</Text>
                      <Text style={{color:"white",fontSize:30}}>{loggedinuser.wachtwoord}</Text>
                  </View>
                  </View>
                  
                </View>
                <DataTable>
        <DataTable.Header>
          <DataTable.Title>
            schema
          </DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={loggedinuser.voornaam}
          renderItem={
            ({item})=> <ShowDataTableRow navigation={this.props.navigation} oefening={item}/>
          }
        />
      </DataTable>
     
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