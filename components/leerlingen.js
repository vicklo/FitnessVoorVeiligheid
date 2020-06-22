import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';


  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        klas:this.props.route.params.klas,
        leerlingen:null,
        isrefreshing:false,
    };
  }
  componentDidMount =  async() => 
  {  
    this.setState({isrefreshing : true})
    await  fetch(ipadress + "klassenstudents/" + this.state.klas.klasid)
      .then(Response => Response.json())
      .then(dbklassen => this.setState({leerlingen:dbklassen}))
      this.setState({isrefreshing : false})

  }
  render() {
      if(this.state.leerlingen == null)
      return (
    <View>      
        <ActivityIndicator>

        </ActivityIndicator>
    </View>
    
    );
    else
        return(
        <FlatList onRefresh={this.componentDidMount} refreshing={this.state.isrefreshing}
          data={this.state.leerlingen}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Leerling',{leerling:item})}>
                <View style={styles.container}>
                    <Text>{item.username}</Text>
                    <Text style={{fontSize:20}}>{item.voornaam} {item.achternaam}</Text>  
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
      backgroundColor:"lightgray",
      padding :10,
    }
})