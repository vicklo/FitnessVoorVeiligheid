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
      <Button onPress={() =>  this.props.navigation.navigate('schematoevoegen', { klas: this.state.klas })} style={{padding:5,margin:70,width:200,backgroundColor:"#291876",borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}>
                    <Text style={{color:"white"}}>toevoegen</Text>
                </Button>
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