import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

  export default class oefening extends Component {
    constructor(props) {
      super(props);
      this.state = {
        oefening:this.props.route.params.oefening,
        aandachtspunten:null,

      };
    }
    componentDidMount =  async() => 
    {
      await fetch(ipadress + "aandachtspunten/"+ this.state.oefening.oefeningid)
        .then(response => response.json())
        .then(dbaandachtspunten => this.setState({aandachtspunten:dbaandachtspunten}));
    }
  render() {
      return(
        <View>
            <Text style={{fontSize:30}}>{this.state.oefening.oefeningnaam}</Text>

            <View style={{flexDirection:"row", padding: 8,borderBottomColor:"black",borderBottomWidth:2,margin:2}}>
                <Text style={{width: Dimensions.get('window').width}}>Aandachtspunten</Text>
            </View>
                <FlatList data={this.state.aandachtspunten}
                renderItem={({ item }) => (
                    <View style={{flexDirection:"row", padding: 8,borderBottomColor:"lightgray",borderBottomWidth:1,margin:10}}>
                        <Text style={{width: Dimensions.get('window').width}}>{item.aandachtspunt}</Text>
                    </View>
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