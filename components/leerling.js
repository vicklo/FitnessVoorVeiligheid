import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity,Image   } from 'react-native';
import { DataTable, Button, Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction,TextInput } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';


  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        leerling: this.props.route.params.leerling,
        userid: this.props.route.params.leerling.userid,
        username: this.props.route.params.leerling.username,
        studentmail: this.props.route.params.leerling.studentmail,
        wachtwoord: this.props.route.params.leerling.wachtwoord,
        klasid: this.props.route.params.leerling.klasid,
        lengte: this.props.route.params.leerling.lengte,
        gewicht: this.props.route.params.leerling.gewicht,
        fetpercentage: this.props.route.params.leerling.fetpercentage,
        voornaam: this.props.route.params.leerling.voornaam,
        achternaam: this.props.route.params.leerling.achternaam,
        foto: this.props.route.params.leerling.foto,

        
    };
  }
  componentDidMount =  async() => 
  {  
    
    console.log(this.state.leerling);
  }
  wijzig = async() =>
  {

    const jsonbody = JSON.stringify({
        "userid":this.state.userid,
        "username": this.state.username,
        "studentmail": this.state.studentmail,
        "wachtwoord": this.state.wachtwoord,
        "klasid": this.state.klasid,
        "lengte": this.state.lengte,
        "gewicht":this.state.gewicht ,
        "fetpercentage": this.state.fetpercentage,
        "voornaam":this.state.voornaam,
        "achternaam": this.state.achternaam,
        "foto": this.state.foto
    });
    
    
    console.log(jsonbody);
    
    await fetch(ipadress + 'users',{method: 'PATCH',body:jsonbody,headers: {'Content-Type': 'application/json'},})
      .then(response => response.json())
      .then(response => alert("Gegevens opgeslagen"));
  }



  render() {
      if(this.state.leerling == null)
      return (
    <View>      
        <ActivityIndicator>

        </ActivityIndicator>
    </View>
    
    );
    else
    return(
    <ScrollView>

  <DataTable style={{marginTop:10}}>
      <DataTable.Row style={{alignItems:"center"}}>
          <View style={{flexDirection:"row"}}>
              <Image style={{margin:5,borderRadius:75,width:150,height:150,borderWidth:2,borderColor:"#d80399",marginBottom:20,alignContent:"center"}} source={{uri:this.state.foto}}/>
          </View>
      </DataTable.Row>
      <DataTable.Row>
          <View style={{flexDirection:"row"}}>
              <Text style={{margin:10,width:100}}>Username</Text>
              <TextInput onChangeText={text => this.setState({username:text})}  style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={this.state.username} ></TextInput>
          </View>
      </DataTable.Row>
      <DataTable.Row>
          <View style={{flexDirection:"row"}}>
              <Text style={{margin:10,width:100}}>Studentmail</Text>
              <TextInput onChangeText={text => this.setState({studentmail:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={this.state.studentmail}></TextInput>
          </View>
      </DataTable.Row>
      <DataTable.Row>
          <View style={{flexDirection:"row"}}>
              <Text style={{margin:10,width:100}}>lengte</Text>
              <TextInput onChangeText={text => this.setState({lengte:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}}defaultValue={this.state.lengte.toString()}></TextInput>
          </View>
      </DataTable.Row>
      <DataTable.Row>
          <View style={{flexDirection:"row"}}>
              <Text style={{margin:10,width:100}}>Gewicht</Text>
              <TextInput onChangeText={text => this.setState({gewicht:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={this.state.gewicht.toString()}></TextInput>
          </View>
      </DataTable.Row>                
      <DataTable.Row>
          <View style={{flexDirection:"row"}}>
              <Text style={{margin:10,width:100}}>Fetpercentage</Text>
              <TextInput onChangeText={text => this.setState({fetpercentage:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={this.state.fetpercentage.toString()}></TextInput>
          </View>
      </DataTable.Row>
      <DataTable.Row>
          <View style={{flexDirection:"row"}}>
              <Text style={{margin:10,width:100}}>Voornaam</Text>
              <TextInput onChangeText={text => this.setState({voornaam:text})}  style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={this.state.voornaam}></TextInput>
          </View>
      </DataTable.Row>
      <DataTable.Row>
          <View style={{flexDirection:"row"}}>
              <Text style={{margin:10,width:100}}>Achternaam</Text>
              <TextInput onChangeText={text => this.setState({achternaam:text})} style={{width:200,height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}} defaultValue={this.state.achternaam}></TextInput>
          </View>
      </DataTable.Row>

  </DataTable>
  <Button onPress={this.wijzig} style={{alignSelf:"center", padding:5,margin:15,width:200,backgroundColor:"#291876",borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}>
          <Text style={{color:"white"}}>wijzig</Text>
      </Button> 



</ScrollView>
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
      padding :10
    }
})