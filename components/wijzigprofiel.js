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


          };
  }
  componentDidMount =  async() => 
  {  
    this.setState({newloggedinuser: loggedinuser})
  }
  wijzig = async() =>
  {

    const jsonbody = JSON.stringify({
        "userid":loggedinuser.userid,
        "username": loggedinuser.username,
        "studentmail": loggedinuser.studentmail,
        "wachtwoord": loggedinuser.wachtwoord,
        "klasid": loggedinuser.klasid,
        "lengte": loggedinuser.lengte,
        "gewicht":loggedinuser.gewicht ,
        "fetpercentage": loggedinuser.fetpercentage,
        "voornaam":loggedinuser.voornaam,
        "achternaam": loggedinuser.achternaam,
        "foto": loggedinuser.foto
    });
    
    
    
    
    await fetch(ipadress + 'users',{method: 'PATCH',body:jsonbody,headers: {'Content-Type': 'application/json'},})
      .then(response => response.json())
      .then(response => alert("Gegevens opgeslagen"));
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
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#d80399",marginLeft:Dimensions.get('window').width - 180,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#291876",marginLeft:Dimensions.get('window').width - 120,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>


            <DataTable style={{marginTop:10}}>
                <DataTable.Row style={{alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <Image style={{margin:5,borderRadius:75,width:150,height:150,borderWidth:2,borderColor:"#d80399",marginBottom:20,alignContent:"center"}} source={{uri:loggedinuser.foto}}/>
                    </View>
                </DataTable.Row>
                <DataTable.Row>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:10,width:100}}>Username</Text>
                        <TextInput onChangeText={text => loggedinuser.username = text}  style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={loggedinuser.username} ></TextInput>
                    </View>
                </DataTable.Row>
                <DataTable.Row>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:10,width:100}}>Studentmail</Text>
                        <TextInput onChangeText={text => loggedinuser.studentmail = text} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={loggedinuser.studentmail}></TextInput>
                    </View>
                </DataTable.Row>
                <DataTable.Row>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:10,width:100}}>lengte</Text>
                        <TextInput onChangeText={text => loggedinuser.lengte = text} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}}defaultValue={loggedinuser.lengte.toString()}></TextInput>
                    </View>
                </DataTable.Row>
                <DataTable.Row>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:10,width:100}}>Gewicht</Text>
                        <TextInput onChangeText={text => loggedinuser.gewicht = text} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={loggedinuser.gewicht.toString()}></TextInput>
                    </View>
                </DataTable.Row>                
                <DataTable.Row>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:10,width:100}}>Fetpercentage</Text>
                        <TextInput onChangeText={text => loggedinuser.fetpercentage = text} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={loggedinuser.fetpercentage.toString()}></TextInput>
                    </View>
                </DataTable.Row>
                <DataTable.Row>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:10,width:100}}>Voornaam</Text>
                        <TextInput onChangeText={text => loggedinuser.voornaam = text}  style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={loggedinuser.voornaam}></TextInput>
                    </View>
                </DataTable.Row>
                <DataTable.Row>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{margin:10,width:100}}>Achternaam</Text>
                        <TextInput onChangeText={text => loggedinuser.achternaam = text} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={loggedinuser.achternaam}></TextInput>
                    </View>
                </DataTable.Row>

            </DataTable>
            <Button onPress={this.wijzig} style={{alignSelf:"center", padding:5,margin:15,width:200,backgroundColor:"#291876",borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}>
                    <Text style={{color:"white"}}>wijzig</Text>
                </Button> 


              
              <View style={{alignSelf:"flex-end",marginRight:Dimensions.get('window').width + 60,marginTop:Dimensions.get('window').height - 800,}}>
                <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#d80399",marginLeft:-40,shadowColor:"#000",shadowOffset:{width:0,height:-2},shadowOpacity:0.4}}></View>
                <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#291876",marginLeft:-100,shadowColor:"#000",shadowOffset:{width:0,height:-2},shadowOpacity:0.4}}></View>
              </View>

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