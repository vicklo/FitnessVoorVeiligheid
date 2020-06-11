import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';


  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
        logboek:null
    };
  }
  componentDidMount =  async() => 
  {  
    await fetch(ipadress + "logboek/" + loggedinuser.userid)
      .then(response => response.json())
      .then(logs => this.setState({logboek:logs}));
      
  }
  render() {
      if(this.state.logboek == null)
      return (
    <ScrollView>      
        <ActivityIndicator>

        </ActivityIndicator>
    </ScrollView>
    
    );
    else
        return(
          <FlatList
            data={this.state.logboek}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Text style={{alignSelf:"flex-end"}}>{item.datum.split("T")[0]}</Text>
                <DataTable>
                <DataTable.Row >
                  <DataTable.Cell style={{width:50}}>Log:</DataTable.Cell>
                  <DataTable.Cell>{item.log}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row >
                  <DataTable.Cell style={{width:100}}>Oefeninf</DataTable.Cell>
                  <DataTable.Cell>{item.oefeningnaam}</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
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
      backgroundColor:"lightgray",
      padding :10
    }
})