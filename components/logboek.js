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
        logboek:null,
        refreshing:false,
    };
  }
  componentDidMount =  async() => 
  {  
    await fetch(ipadress + "logboek/" + loggedinuser.userid)
      .then(response => response.json())
      .then(logs => this.setState({logboek:logs}));
      
  }
  refresh = async() =>
  {
    this.setState({refreshing:true});
    await fetch(ipadress + "logboek/" + loggedinuser.userid)
      .then(response => response.json())
      .then(logs => this.setState({logboek:logs}));
      this.setState({refreshing:false});
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
          <FlatList refreshing={this.state.refreshing} onRefresh={this.refresh}
            data={this.state.logboek}
            renderItem={({ item }) => (
              <View style={styles.container}>
                <Text style={{alignSelf:"flex-end"}}>{item.datum.split("T")[0]}</Text>
                <View style={{flexDirection: "row",minHeight:20,flex:1,flexWrap:"wrap"}}>
                      <Text style={{flex:1,flexWrap:"wrap"}}>{item.log}</Text>
                </View>
                <View style={{height:1,backgroundColor:"#d80399",borderRadius:2,marginTop:2}}/>
                {item.commentaar
                  ? <View style={{flexDirection: "row",minHeight:20,flex:1,flexWrap:"wrap",marginTop:5}}>
                    <Text style={{width:80}}>Commentaar:</Text>
                    <Text style={{flex:1, flexWrap:"wrap"}}>{item.commentaar}</Text>
                  </View>
                  :<View/>}
                {item.commentaar ? <View style={{height:1,backgroundColor:"#d80399",borderRadius:2,marginTop:2}}/> : <View/>}
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
      backgroundColor:"white",
      padding :10,
      borderWidth:1,
      borderRadius:10,
      borderColor: "#d80399"
    }
})