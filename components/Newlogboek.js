import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity,Image    } from 'react-native';
import { DataTable, Button, withTheme, TextInput } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';
class oefening
{
  constructor()
  {
    this.value;
    this.id;
  }
}

  export default class newlogboek extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
        oefening: null,
        alleoefeningen:null,
        selectedoef:null,
        log:null,
          };
  }
  componentDidMount =  async() => 
  {  
    
    let day = new Date().getDate();
    let month = new Date().getMonth() +1;
    let year = new Date().getFullYear();
    this.setState({date: day + "-" + month + "-" + year});
    
  }
  opslaan = async() =>
  {
      const jsonbody = JSON.stringify({
        "studentid": loggedinuser.userid,
          "log": this.state.log
      });
      console.log(jsonbody);
      await fetch(ipadress+'oefening',{method: 'Post',body:jsonbody,headers: {'Content-Type': 'application/json'},})
      .then(response => response.json())
      .then(response => alert("Gegevens opgeslagen"))
      .then(response => this.props.navigation.goBack())
  }

  render() {
    return(
        <ScrollView>
            <DataTable style={{margin:10,marginTop:50}}>
            <DataTable.Row>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{width:80}}>Date:</Text>
                    <Text>{this.state.date}</Text>
                </View>
              </DataTable.Row>
              <DataTable.Row>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{width:80}}>Log:</Text>
                    <TextInput onChangeText={text => this.setState({log:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}}  ></TextInput>
                  </View>
              </DataTable.Row>
            </DataTable>
            <Button onPress={this.opslaan} style={{alignSelf:"center", padding:5,margin:15,width:200,backgroundColor:"#291876",borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}>
              <Text style={{color:"white"}}>Opslaan</Text>
            </Button> 

        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      width:200,
      marginTop:-10

    }
})