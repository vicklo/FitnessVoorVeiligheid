import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

  export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading:false,
      messages:null,
      refreshing:false,
};
  }
  componentDidMount =  async() => 
  {  
    console.log(ipadress + "messages/"+ loggedinuser.klasid);
    await fetch(ipadress + "messages/" + loggedinuser.klasid)
      .then(response => response.json())
      .then(logs => this.setState({messages:logs}));
      
  }
  refresh = async() =>
  {
    this.setState({refreshing:true});
    await fetch(ipadress + "messages/"+ loggedinuser.klasid)
      .then(response => response.json())
      .then(logs => this.setState({messages:logs}));
      this.setState({refreshing:false});
  }

render() {
  if(this.state.messages == null)
  return (
<ScrollView>      
    <ActivityIndicator>

    </ActivityIndicator>
</ScrollView>

);
else
    return(

      <FlatList refreshing={this.state.refreshing} onRefresh={this.refresh}
        data={this.state.messages}
        renderItem={({ item }) => (
          <View style={styles.container}>
              <Text style={{fontSize:20}}>{item.klasnaam}</Text>
              <Text style={{fontSize:20}}>{item.message}</Text>
              <View style={{height:1,backgroundColor:"#d80399",borderRadius:2,marginTop:2}}/>

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