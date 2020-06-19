import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity,Image    } from 'react-native';
import { DataTable, Button, withTheme, TextInput } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

class item
{
  constructor(value,label)
  {
    this.label;
    this.value;
  }
}


  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
        doelid:null,
        doelen:null,
        schemanaam:""
          };
  }

  componentDidMount =  async() => 
  {  
    await fetch(ipadress + "doelen")
      .then(response => response.json())
      .then(_doelen => this.setState({doelen:_doelen}));
    let _array = new Array();
    this.state.doelen.forEach(element => {
      let _item = new item();
      _item.value = element.doelid
      _item.label = element.doel
      _array.push(_item);
    });
    this.setState({doelen:_array});
  }
  toevoegen = async() =>
  {
    const jsonbody = JSON.stringify({
      "doelid":this.state.doelid,
      "schemanaam": this.state.schemanaam
  });
  await fetch(ipadress + 'schema',{method: 'POST',body:jsonbody,headers: {'Content-Type': 'application/json'},})
    .then(response => response.json())
    .then(response => alert("Gegevens opgeslagen"));

    this.componentDidMount();
    this.props.navigation.goBack();

  }

  render() {
      if(this.state.doelen == null)
      return (
    <ScrollView>      
        <ActivityIndicator>

        </ActivityIndicator>
    </ScrollView>
    
    );
    else
        return(
            <ScrollView>
              <Text style={{fontSize:20,margin:5}}>Schema naam:</Text>
              <TextInput onChangeText={text => this.setState({schemanaam:text})} style={{height:20,margin:10,backgroundColor:"none" ,bordercolor:"none"}}></TextInput>
              <Text style={{fontSize:20,margin:5}}>Doel:</Text>
              <DropDownPicker
                    items={this.state.doelen}
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeItem={item => this.setState({doelid:item.value})}
                  />

                {this.state.schemanaam && this.state.doelid
                ?
                <Button onPress={this.toevoegen} style={{marginBottom:200}}>Toevoegen</Button> 
                :
                <Text style={{alignSelf:"center",margin:10,marginBottom:200}}>Vul de bovenste gegevens in</Text>
                }

          </ScrollView>
        );
  }
}
const styles = StyleSheet.create({
    container:{
      alignItems:"center",
      marginTop:40
    }
})