import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons,AntDesign  } from 'react-native-vector-icons';
import {DefaultTheme, Provider as PaperProvider, TextInput, Button} from 'react-native-paper';
import Image from 'react-native-scalable-image';

import Home from './components/Home';
import Logboek from './components/logboek';
import Profiel from './components/profiel';
import Schemas from './components/schemas';

import {userstudent,userdocent} from "./classes";



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function consthome(){
  return(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
  </Stack.Navigator>

  );
}
function constprofiel(){
  return(
  <Stack.Navigator>
    <Stack.Screen name="Profiel" component={Profiel} />
  </Stack.Navigator>

  );
}
function constlogboek(){
  return(
  <Stack.Navigator>
    <Stack.Screen name="Logboek" component={Logboek} />
  </Stack.Navigator>

  );
}
function constschemas(){
  return(
  <Stack.Navigator>
    <Stack.Screen name="Schema's" component={Schemas}/>
  </Stack.Navigator>

  );
}



export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin:false,
      loginname:null,
      loginpass:null,
      users: null,
      user:null,
    };
  }
  componentDidMount =  async() => 
  {  
    let listusers = new Array();
    const users =  await fetch('http://localhost:3000/users');

    users.forEach(element => {
        let _user = new userstudent;
        _user.userid = element.userid;
        _user.userfoto = "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
        _user.username = element.username;
        _user.wachtwoord = element.wachtwoord;
        _user.studentmail = element.userid;
        _user.lengte = element.lengte;
        _user.gewicht = element.gewicht;
        _user.vetpercentage = element.vetpercentage;
        _user.klasid = element.klasid;
        alert(element.username)
        listusers.push(element);
    });





    for(i = 5;i>1;i--)
    {
      let _user = new userstudent;
      _user.userid = i;
      _user.userfoto = "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
      _user.username = "Vicklo";
      _user.wachtwoord = "Pwd123";
      _user.studentmail = "vic.kloeppel@gmail.com";
      _user.lengte = 1.79;
      _user.gewicht = 70;
      _user.vetpercentage = 15;
      listusers.push(_user);
    }
    for(i = 10;i>5;i--)
    {
      let _user = new userdocent;
      _user.userid = i;
      _user.username = "Docent";
      _user.wachtwoord = "Doc123";
      listusers.push(_user);
    }
    this.setState({users: listusers})

  }

  Login = () =>
  {
    if(this.state.loginname != null && this.state.loginpass != null)
    {
      let log = false;
      this.state.users.forEach(element => {
        if(element.username == this.state.loginname && element.wachtwoord == this.state.loginpass)
        {
          log = true;
          this.setState({loggedin:true});
          this.setState({user:element});
          
          globalThis.loggedinuser = element;

          return element;
        }
      });
      if(!log)
      {
        alert("Inloggegevens onjuist");
      }
    }
  }



  render(){
    if (!this.state.loggedin){
      return (
        <View style={styles.LoginView}>
          

        <Image width={200} style={{margin:40}} source={{uri:'https://www.summacollege.nl/images/default-source/default-album/summa_veiligheid-min.png?sfvrsn=5e3f4c85_4'}}/>
        <Text style={styles.LoginText}>Naam</Text>
        <TextInput style={styles.LoginInput} onChangeText={text => this.setState({loginname:text})}></TextInput>
        <Text style={styles.LoginText}>Wachtwoord</Text>
        <TextInput style={styles.LoginInput} onChangeText={text => this.setState({loginpass:text})}></TextInput>
        <Button onPress={this.Login} style={styles.LoginButton}>Login</Button>
      </View>
      );
    }
    
    return(
      <PaperProvider theme={DefaultTheme}>
          <NavigationContainer theme={DefaultTheme}>
            <Tab.Navigator 
              >
              <Tab.Screen name="Home" component={consthome}  
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Schemas" component={constschemas}
                options={{
                  tabBarLabel: "Schama's",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Logboek" component={constlogboek}
                options={{
                  tabBarLabel: 'Logboek',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="book" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Profiel" component={constprofiel} 
                options={{
                  tabBarLabel: 'Profiel',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
      </PaperProvider>
      );
  }
}

const styles = StyleSheet.create({
  LoginView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column"
  },
  LoginText:{
    height: 40,
    width:200,
    fontSize:30,

  },
  LoginInput:{
    height:40,
    width:200,
    fontSize:25,
    backgroundColor: "white"
  },
  LoginButton:{

  },
});
