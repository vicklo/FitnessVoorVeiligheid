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
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Schema wijzigen',{schema:item,refresh:this.refresh})}>
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