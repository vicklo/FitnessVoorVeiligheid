import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';



  export default class profile extends Component {
    constructor(props) {
      super(props);
      this.state = {
          schemaid: this.props.route.params.id,
          schema:null,
      };
    }
    componentDidMount =  async() => 
    {  
      await fetch(ipadress + "schema/"+ this.state.schemaid)
        .then(response => response.json())
        .then(schema => this.setState({schema:schema}));
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
        <View>
            <Text style={{fontSize:30}}>{this.state.schema[0].schemanaam}</Text>
            <View style={{flexDirection:"row"}}>
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