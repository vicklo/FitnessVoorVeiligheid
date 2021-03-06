import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';


  export default class profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
          schemaid: this.props.route.params.schema.schemaid,
          schema:null,
      };
    }
    componentDidMount =  async() => 
    {  

      await fetch(ipadress + "schema/"+ this.state.schemaid)
        .then(response => response.json())
        .then(schema => this.setState({schema:schema}));

        console.log(this.state.schema)
    }
    schemavolgen =  async() => 
    {  
      await fetch(ipadress + "volgschema/"+ this.state.schemaid + "/" + loggedinuser.userid,{method: 'PATCH'})
        .then(response => response.json())
        .then(response => loggedinuser.schemaid = this.state.schemaid)
        .then(response => globalThis.loggedinuser = loggedinuser)
        .then(response => this.props.route.params.onBack(this.state.schemaid))
        .then(schema => this.props.navigation.goBack());
      
    }
    ontvolgen =  async() => 
    {  
      await fetch(ipadress + "volgschema/NULL/" + loggedinuser.userid,{method: 'PATCH'})
        .then(response => response.json())
        .then(response => loggedinuser.schemaid = null)
        .then(response => globalThis.loggedinuser = loggedinuser)
        .then(response =>  this.props.route.params.onBack(1))
        .then(response => this.props.navigation.goBack());
  
    }
  
  render() {
    if(this.state.schema == null)
    return (
  <ScrollView>      
      <ActivityIndicator>

      </ActivityIndicator>
  </ScrollView>
  
  );
  else
      return(
        <ScrollView>
            <Text style={{fontSize:30,margin:5}}>{this.props.route.params.schema.schemanaam}</Text>
            <View style={{flexDirection:"row",margin:5}}>
                <Text style={{fontSize:23,color:"gray"}}>Doel:</Text>
                <Text style={{fontSize:23,color:"gray"}}>{this.props.route.params.schema.doel}</Text>
            </View>
            <View style={{flexDirection:"row", padding: 8,borderBottomColor:"black",borderBottomWidth:2,margin:2}}>
            <Text styles={{width:20}}>        </Text>
                <Text style={{width: Dimensions.get('window').width / 3}}>Oefening</Text>
                <Text style={{width: Dimensions.get('window').width / 3}}>Sets</Text>
                <Text style={{width: Dimensions.get('window').width / 3}}>Herhaling</Text>
            </View>
                <FlatList data={this.state.schema}
                renderItem={({ item,index }) => (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Oefening',{oefening:item})}>
                    <View style={{flexDirection:"row", padding: 8,borderBottomColor:"lightgray",borderBottomWidth:1,margin:10}}>
                      <Text styles={{width:20}}>{index}    </Text>
                        <Text style={{width: Dimensions.get('window').width / 3 }}>{item.oefeningnaam}</Text>
                        <Text style={{width: Dimensions.get('window').width / 3 }}>{item.sets}</Text>
                        <Text style={{width: Dimensions.get('window').width / 3 }}>{item.hethaling}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                />
                {this.state.schema[0]
                ?
                <View>{!loggedinuser.schemaid
                  ?
                  <Button onPress={this.schemavolgen} >Volgen</Button>
                  :
                  <Button onPress={this.ontvolgen} >Ontvolgen</Button>
                }</View>
                :
                <View style={{alignSelf:"center",margin:5}}>
                <Text>Dit schema kan je niet volgen</Text>
                </View>


                }
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
    backgroundColor:"white",
    padding :10,
    borderWidth:1,
    borderRadius:10,
    borderColor: "#d80399"
  }
})