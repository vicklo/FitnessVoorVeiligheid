import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity,Image    } from 'react-native';
import { DataTable, Button, withTheme } from 'react-native-paper'; 
import { debug, round, set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

  export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isloading:false,
          };
  }

  render() {
      if(this.state.isloading)
      return (
    <ScrollView>      
        <ActivityIndicator>

        </ActivityIndicator>
    </ScrollView>
    
    );
    else
        return(
            <ScrollView>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#d80399",marginLeft:200,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#291876",marginLeft:260,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}></View>
              <View style={styles.container}>
              <Image style={{margin:5,borderRadius:75,width:150,height:150,borderWidth:2,borderColor:"#d80399",marginBottom:20}} source={{uri:loggedinuser.userfoto}}/>
              <View style={{alignItems:"center" ,backgroundColor:"#291876" ,width: Dimensions.get('window').width,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                  <View style={{alignItems:"center",margin:15,width:100}}>
                      <Text style={{color:"white",fontSize:15}}>Lengte</Text>
                      <Text style={{color:"white",fontSize:30}}>{loggedinuser.lengte}</Text>
                  </View> 
                  <View style={{alignItems:"center",margin:15,width:100}}>
                      <Text style={{color:"white",fontSize:15}}>Gewicht</Text>
                      <Text style={{color:"white",fontSize:30}}>{loggedinuser.gewicht}</Text>
                  </View>
                  <View style={{alignItems:"center",margin:15,width:100}}>
                    <Text style={{color:"white",fontSize:15}}>fetpercentage</Text>
                    <Text style={{color:"white",fontSize:30}}>{loggedinuser.vetpercentage}</Text> 
                  </View>
                </View>
              </View>
              <View style={{alignItems:"center",backgroundColor:"#291876",marginTop:20,width:Dimensions.get('window').width,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}>
                <View style={{flexDirection: "row",alignItems:"center",width:Dimensions.get('window').width}}>
                  <Text style={{color:"white",textAlign:"left",width:Dimensions.get('window').width / 2 - 20,margin:10,fontSize:18}}>Username:</Text>
                  <Text style={{color:"white",textAlign:"right",width:Dimensions.get('window').width / 2 - 20,margin:10,fontSize:18}}>{loggedinuser.username}</Text>
                </View>
                <View style={{height:2,width: Dimensions.get('window').width - 15,backgroundColor:"#d80399",alignSelf:"center" ,borderRadius:2 }}></View>
                                <View style={{flexDirection: "row",alignItems:"center",width:Dimensions.get('window').width}}>
                  <Text style={{color:"white",textAlign:"left",width:Dimensions.get('window').width / 2 - 20,margin:10,fontSize:18}}>Naam:</Text>
                  <Text style={{color:"white",textAlign:"right",width:Dimensions.get('window').width / 2 - 20,margin:10,fontSize:18}}>{loggedinuser.firstname} {loggedinuser.lastname}</Text>
                </View>
                <View style={{height:2,width: Dimensions.get('window').width - 15,backgroundColor:"#d80399",alignSelf:"center" ,borderRadius:2 }}></View>

                <View style={{flexDirection: "row",alignItems:"center",width:Dimensions.get('window').width}}>
                  <Text style={{color:"white",textAlign:"left",width:Dimensions.get('window').width / 2 - 20,margin:10,fontSize:18}}>Studentmail:</Text>
                  <Text style={{color:"white",textAlign:"right",width:Dimensions.get('window').width / 2 - 20,margin:10,fontSize:18}}>{loggedinuser.studentmail}</Text>
                </View>
                <View style={{height:2,width: Dimensions.get('window').width - 15,backgroundColor:"#d80399",alignSelf:"center" ,borderRadius:2 }}></View>

                  <Text>{loggedinuser.klasid}</Text>
              </View>
              <Button style={{padding:5,margin:15,width:200,backgroundColor:"#291876",borderRadius:10,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.4}}>
                  <Text style={{color:"white"}}>wijzig</Text>
              </Button>
              </View>
              <View style={{alignSelf:"flex-start",marginLeft:-200}}>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#d80399",marginLeft:60,shadowColor:"#000",shadowOffset:{width:0,height:-2},shadowOpacity:0.4}}></View>
              <View style={{width:300,height:100,position:"absolute",transform: [{ rotate: "45deg" }],backgroundColor:"#291876",marginLeft:0,shadowColor:"#000",shadowOffset:{width:0,height:-2},shadowOpacity:0.4}}></View>

              </View>

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