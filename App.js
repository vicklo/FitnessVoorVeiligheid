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
import Newlogboek from './components/Newlogboek';
import Profiel from './components/profiel';
import wijzigprofiel from './components/wijzigprofiel';
import Schemas from './components/schemas';

import {userstudent,userdocent} from "./classes";
import newlogboek from './components/Newlogboek';



const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function consthome(){
  return(
  <Stack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#291876',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>

  );
}
function constprofiel(){
  return(
  <Stack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#291876',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <Stack.Screen name="Profiel" component={Profiel} />
    <Stack.Screen name="wijzigprofiel" component={wijzigprofiel} />
  </Stack.Navigator>

  );
}
function constlogboek(){
  return(
  <Stack.Navigator       
  screenOptions={{
    headerStyle: {
      backgroundColor: '#291876',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <Stack.Screen name="Logboek" component={Logboek} 
    options={({navigation}) => ({headerRight:()=> (<Button onPress={() => navigation.navigate('Newlogboek')} style={{color:"white"}} >New log</Button>)})} />
    <Stack.Screen name="Newlogboek" component={newlogboek} />
  </Stack.Navigator>

  );
}
function constschemas(){
  return(
  <Stack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#291876',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
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
    globalThis.ipadress = "http://192.168.2.24:3000/";
    globalThis.loggedinuser = null;
    fetch(ipadress + 'users')
      .then(response => response.json())
      .then(dbusers => this.setState({users:dbusers}))
  }

  Login = () =>
  {
    if(this.state.loginname != null && this.state.loginpass != null && this.state.users != null)
    {
      let log = false;
      this.state.users.forEach(element => {
        if(element.username == this.state.loginname && element.wachtwoord == this.state.loginpass)
        {
          log = true;
          this.setState({loggedin:true});
          this.setState({user:element});
          
          loggedinuser = element;
          return element;
        }
      });
      if(!log)
      {
        alert("Inloggegevens onjuist");
      }
    }
    else{
      alert("Kan geen verbinding maken met de server conroleer of de server aan staat of dat de ipadres correct is van de laptop/computer")
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
