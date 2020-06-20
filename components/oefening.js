import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity,Alert    } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
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
    showalert = () =>
    {
      Alert.prompt(
        "Aandachtspunt toevoegen",
        "Oefening " + this.state.oefening.oefeningnaam,
        [
          {
            text: "Annuleer",
            style: "cancel"
          },
          {
            text: "OK",
            onPress: text => this.toevoegen(text)
          }
        ]
      );
    }
    toevoegen = async(text) =>
    {
      const jsonbody = JSON.stringify({
        "text": text,
        "id": this.state.oefening.oefeningid
      });
    
    await fetch(ipadress + 'aandachtpunten',{method: 'POST',body:jsonbody,headers: {'Content-Type': 'application/json'},})
      .then(response => response.json())
      .then(response => alert("Gegevens opgeslagen"))
      .then(response => this.setState({register:true}))
      .then(response => this.componentDidMount());
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
                {loggedinuser.docent
                ?
                <Button onPress={() => this.showalert()}>Aandachtspunt toevoegen</Button>
                :
                <View/>

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