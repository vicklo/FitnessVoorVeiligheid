import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

  export default class profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isloading:false,
          schemas:null,
          refreshing:false,
          gevoldschema:null,
          schema:null,
          schemaid: loggedinuser.schemaid
      };
    }
    componentDidMount =  async() => 
    {  
      
        this.setState({gevoldschema: loggedinuser.schemaid})
        await fetch(ipadress + "schema")
          .then(response => response.json())
          .then(logs => this.setState({schemas:logs}));
  
      if(loggedinuser.schemaid != null)
      {
        this.onBack(loggedinuser.schemaid);
  
      }
    }
    refresh = async() =>
    {
      this.setState({refreshing:true});
      await fetch(ipadress + "schema")
        .then(response => response.json())
        .then(logs => this.setState({schemas:logs}));
        this.setState({refreshing:false});
    }
    onBack = async(_schemaid) =>
    {
      console.log("schema aan het laden")
      this.setState({gevoldschema: _schemaid})
      await fetch(ipadress + "schema/"+ _schemaid)
      .then(response => response.json())
      .then(schema => this.setState({schema:schema}))
      .then(response => this.setState({schemaid:_schemaid}))
    }
    ontvolgen =  async() => 
    {  
      await fetch(ipadress + "volgschema/NULL/" + loggedinuser.userid,{method: 'PATCH'})
        .then(response => response.json())
        .then(response => this.setState({schemaid:null}))
        .then(response => loggedinuser.schemaid = null)

        console.log(loggedinuser.schemaid)
    }
    schemavolgen =  async() => 
    {  
      await fetch(ipadress + "volgschema/"+this.state.schemaid+"/" + loggedinuser.userid,{method: 'PATCH'})
        .then(response => response.json())
        .then(response => loggedinuser.schemaid = this.state.schemaid)

        console.log(loggedinuser.schemaid)
    }


  
  render() {
    if(this.state.schemas == null)
    return (
  <ScrollView>      
      <ActivityIndicator>

      </ActivityIndicator>
  </ScrollView>
  
  );
  else if(this.state.schemaid == null)
      return(
        <FlatList refreshing={this.state.refreshing} onRefresh={this.refresh}
          data={this.state.schemas}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Schema',{schema:item,onBack:this.onBack})}>
              <View style={styles.container}>
                <Text style={{fontSize:30,flex:1,flexWrap:"wrap"}}>{item.schemanaam}</Text>
                <View style={{flexDirection:"row",margin:5}}>
                  <Text style={{width:150}}>doel:</Text>
                  <Text>{item.doel}</Text>
                </View>
                <View style={{height:1,backgroundColor:"#d80399",borderRadius:2,marginTop:2}}/>
              </View>
            </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />

      );
    else if(this.state.schema == null)
    return (
      <ScrollView>      
          <ActivityIndicator>
    
          </ActivityIndicator>
      </ScrollView>
      
      );
    else
    return(
      <View>
      <Text style={{fontSize:30,margin:5}}>{this.state.schema[0].schemanaam}</Text>
      <View style={{flexDirection:"row",margin:5}}>
          <Text style={{fontSize:23,color:"gray"}}>Doel:</Text>
          <Text style={{fontSize:23,color:"gray"}}>{this.state.schema[0].doel}</Text>
      </View>
      <View style={{flexDirection:"row", padding: 8,borderBottomColor:"black",borderBottomWidth:2,margin:2}}>
          <Text style={{width: Dimensions.get('window').width / 3}}>Oefening</Text>
          <Text style={{width: Dimensions.get('window').width / 3}}>Sets</Text>
          <Text style={{width: Dimensions.get('window').width / 3}}>Herhaling</Text>
      </View>
          <FlatList data={this.state.schema}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Oefening',{oefening:item})}>
              <View style={{flexDirection:"row", padding: 8,borderBottomColor:"lightgray",borderBottomWidth:1,margin:10}}>
                  <Text style={{width: Dimensions.get('window').width / 3}}>{item.oefeningnaam}</Text>
                  <Text style={{width: Dimensions.get('window').width / 3}}>{item.sets}</Text>
                  <Text style={{width: Dimensions.get('window').width / 3}}>{item.hethaling}</Text>
              </View>
            </TouchableOpacity>
          )}
          />
          {!this.state.schemaid
            ?
            <Button onPress={this.schemavolgen} >Volgen</Button>
            :
            <Button onPress={this.ontvolgen} >Ontvolgen</Button>
          }
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
    backgroundColor:"white",
    padding :10,
    borderWidth:1,
    borderRadius:10,
    borderColor: "#d80399"
  }
})