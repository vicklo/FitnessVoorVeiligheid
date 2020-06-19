import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
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

  export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
        schemaid:this.props.route.params.schema.schemaid,
        schema:null,
        schemanaam: this.props.route.params.schema.schemanaam,
        schemadoel:this.props.route.params.schema.doel,
        oefeningen:null,
        oefherhaling:null,
        oefsets:null,
        oefid:null,
    };
  }
  componentDidMount =  async() => 
  {
    await fetch(ipadress + "schema/"+ this.state.schemaid)
      .then(response => response.json())
      .then(schema => this.setState({schema:schema}));
      this.getoefeningen();
    
  }
  getoefeningen = async() =>
  {
    await fetch(ipadress + "oefening")
    .then(response => response.json())
    .then(_oefeningen => this.setState({oefeningen:_oefeningen}));
    let _array = new Array();
    this.state.oefeningen.forEach(element => {
      let _item = new item();
      _item.value = element.oefeningid
      _item.label = element.oefeningnaam
      _array.push(_item);
    });
    this.setState({oefeningen:_array});
    console.log(this.state.oefeningen);
  }
  toevoegen = async() =>
  {
    const jsonbody = JSON.stringify({
      "oefeningid":this.state.oefid,
      "sets": this.state.oefsets,
      "hethaling": this.state.oefherhaling,
      "schemaid": this.state.schemaid
  });
  await fetch(ipadress + 'schemaoefening',{method: 'POST',body:jsonbody,headers: {'Content-Type': 'application/json'},})
    .then(response => response.json())
    .then(response => alert("Gegevens opgeslagen"));

    this.componentDidMount();
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
          
            <ScrollView >
                <Text style={{fontSize:30}}>{this.state.schemanaam}</Text>
            <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:23,color:"gray"}}>Doel:</Text>
                <Text style={{fontSize:23,color:"gray"}}>{this.state.schemadoel}</Text>
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
                {this.state.oefeningen
                ?
                <View>
                  <DropDownPicker
                    items={this.state.oefeningen}
                    defaultIndex={0}
                    containerStyle={{height: 40}}
                    onChangeItem={item => this.setState({oefid:item.value})}
                  />
                  <View style={{flexDirection:"row"}}>
                    <TextInput onChangeText={text => this.setState({oefherhaling:text})} style={{width:Dimensions.get('window').width / 2-10,margin:5}} placeholder={"Herhaling"}></TextInput>
                    <TextInput onChangeText={text => this.setState({oefsets:text})} style={{width:Dimensions.get('window').width / 2-10,margin:5}} placeholder={"Sets"}></TextInput>
                  </View>
                  {this.state.oefid && this.state.oefherhaling && this.state.oefsets
                  ?
                    <Button onPress={this.toevoegen} style={{marginBottom:200,margin:5}}>Toevoegen</Button>
                  :
                    <Text style={{alignSelf:"center"}} style={{marginBottom:200,margin:5}}>Vul de bovenste gegevens in</Text>

                  }

                </View>
                :
                <Text>geen oefeningen</Text>

                }
            </ScrollView>
        );
  }
}
const styles = StyleSheet.create({
    container:{

    }
})