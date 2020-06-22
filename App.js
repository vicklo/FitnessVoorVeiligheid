import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons,AntDesign  } from 'react-native-vector-icons';
import {DefaultTheme, Provider as PaperProvider, TextInput, Button, ActivityIndicator} from 'react-native-paper';
import Image from 'react-native-scalable-image';
import DropDownPicker from 'react-native-dropdown-picker';


import Home from './components/Home';
import Logboek from './components/logboek';
import Newlogboek from './components/Newlogboek';
import Profiel from './components/profiel';
import wijzigprofiel from './components/wijzigprofiel';
import Schemas from './components/schemas';
import schema from './components/schema';
import Oefening from './components/oefening';


import docenthome from './components/docenthome';
import docenteprofiel from './components/docentprofiel';
import decentprofielwijzig from './components/docentprofielwijzig';
import klassen from './components/klassen';
import klastoevoegen from './components/klastoevoegen';
import schematoevoegen from './components/schematoevoegen';
import schemawijzig from './components/schemawijzig';
import leerlingen from './components/leerlingen';
import leerling from './components/leerling';
import oefening from './components/oefeningen';
import oefeningtoevoegen from './components/oefeningtoevoegen';
import docentschemas from './components/docentschemas';

import newlogboek from './components/Newlogboek';
import { ScrollView } from 'react-native-gesture-handler';




const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#291876',
    accent: '#291876',
  },
};

function consthome(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>

  );
}
function constprofiel(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Profiel" component={Profiel} />

    <Stack.Screen name="wijzigprofiel" component={wijzigprofiel} />
  </Stack.Navigator>

  );
}
function constlogboek(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: { fontWeight: 'bold',},}}>
    <Stack.Screen name="Logboek" component={Logboek} 
    options={({navigation}) => ({headerRight:()=> (<Button onPress={() => navigation.navigate('Newlogboek')} style={{color:"white"}} ><Text style={{color:"white",fontSize:25}}>+</Text></Button>)})} />
    <Stack.Screen name="Newlogboek" component={newlogboek} />
  </Stack.Navigator>

  );
}
function constschemas(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Schema's" component={Schemas}/>
    <Stack.Screen name="Schema" component={schema}/> 
     <Stack.Screen name="Oefening" component={Oefening}/>
  </Stack.Navigator>

  );
}

function constdocenthome(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Home" component={docenthome}/>
  </Stack.Navigator>

  );
}function constdocentschemas(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Schema's" component={docentschemas}
        options={({navigation}) => ({headerRight:()=> (<Button onPress={() => navigation.navigate('Schema toevoegen')} style={{color:"white"}} ><Text style={{color:"white",fontSize:25}}>+</Text></Button>)})} />
        
    <Stack.Screen name="Schema wijzigen" component={schemawijzig}/> 
     <Stack.Screen name="Schema toevoegen" component={schematoevoegen}/>
     <Stack.Screen name="Oefening" component={Oefening}/>
  </Stack.Navigator>

  );
}function constdocentleerlingen(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Klassen" component={klassen}
            options={({navigation}) => ({headerRight:()=> (<Button onPress={() => navigation.navigate('Klas toevoegen')} style={{color:"white"}} ><Text style={{color:"white",fontSize:25}}>+</Text></Button>)})} />

<Stack.Screen name="Klas toevoegen" component={klastoevoegen}/> 
<Stack.Screen name="Leerlingen" component={leerlingen}/>
<Stack.Screen name="Leerling" component={leerling}/> 

  </Stack.Navigator>

  );
}function constdocentprofiel(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Profiel" component={docenteprofiel}/>
  </Stack.Navigator>

  );
}
function constdocentoefening(){
  return(
  <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#291876',},headerTintColor: '#fff',headerTitleStyle: {fontWeight: 'bold',},}}>
    <Stack.Screen name="Oefingen" component={oefening}
        options={({navigation}) => ({headerRight:()=> (<Button onPress={() => navigation.navigate('Oefingen toevoegen')} style={{color:"white"}} ><Text style={{color:"white",fontSize:25}}>+</Text></Button>)})} />
    <Stack.Screen name="Oefingen toevoegen" component={oefeningtoevoegen}/>
    <Stack.Screen name="Aandachtpunten" component={Oefening}/>
  </Stack.Navigator>

  );
}
class userclass{
  constructor(){
    this.username;
    this.studentmail;
    this.pass;
    this.lengte;
    this.gewicht;
    this.fetpercentage;
    this.voornaam;
    this.achternaam; 
  }
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
      student:true,
      register:true,

      klassen:null,
      selectedklas:null,
      username:"",
      studentmail:"",
      pass:"",
      lengte:"",
      gewicht:"",
      fetpercentage:"",
      voornaam:"",
      achternaam:"",
      docenten:null
    };
  }
  
  componentDidMount =  async() => 
  { 
    globalThis.ipadress = "http://192.168.2.17:3000/users";
    globalThis.loggedinuser = null;
    await fetch(ipadress + 'users')
      .then(response => response.json())
      .then(dbusers => this.setState({users:dbusers}))
    await fetch(ipadress + 'docenten')
      .then(response => response.json())
      .then(dbusers => this.setState({docenten:dbusers}))
      console.log(this.state.docenten);
    globalThis.app = this;
    await fetch(ipadress + "klassencombo")
      .then(response => response.json())
      .then(dbklassen => this.setState({klassen:dbklassen}));
  }
  register =  async() => 
  { 
    if(this.state.username != null && this.state.studentmail != null && this.state.pass != null && this.state.lengte != null && this.state.gewicht != null && this.state.fetpercentage != null && this.state.voornaam != null && this.state.achternaam != null )
    {
      const jsonbody = JSON.stringify({
        "username": this.state.username,
        "studentmail": this.state.studentmail,
        "wachtwoord": this.state.pass,
        "lengte": this.state.lengte,
        "gewicht":this.state.gewicht,
        "fetpercentage": this.state.fetpercentage,
        "voornaam":this.state.voornaam,
        "achternaam": this.state.achternaam,
        "foto":"https://assets.zoom.nl/thumbnails/500x500/5/7/5788343c7c2d3728eb9db8f096b62081.png",
      });
    
    await fetch(ipadress + 'users',{method: 'POST',body:jsonbody,headers: {'Content-Type': 'application/json'},})
      .then(response => response.json())
      .then(response => alert("Gegevens opgeslagen"))
      .then(response => this.setState({register:true}))
      .then(response => this.componentDidMount());
    }
    

  }

  Login = async() =>
  {
    await this.componentDidMount();
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
          console.log(element);
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
  Logindocent = () =>
  {
    if(this.state.loginname != null && this.state.loginpass != null && this.state.users != null)
    {
      let log = false;
      this.state.docenten.forEach(element => {
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
  uitloggen = () =>
  {
    loggedinuser = null;
    this.setState({user:null})
    this.setState({loggedin:false});
  }


  render(){
    if (!this.state.loggedin ){
      return (
        <View style={styles.LoginView}>
          {this.state.student
            ?
            <View >
              {
                this.state.register
                ?
                <View style={styles.LoginView}>
                  <Button onPress={() => this.setState({student: false})} >log in als docent</Button>
                  <Image width={200} style={{margin:40}} source={{uri:'https://www.summacollege.nl/images/default-source/default-album/summa_veiligheid-min.png?sfvrsn=5e3f4c85_4'}}/>
                  <Text style={styles.LoginText}>Student naam</Text>
                  <TextInput style={styles.LoginInput} onChangeText={text => this.setState({loginname:text})}></TextInput>
                  <Text style={styles.LoginText}>Wachtwoord</Text>
                  <TextInput style={styles.LoginInput} secureTextEntry={true} onChangeText={text => this.setState({loginpass:text})}></TextInput>
                  <Button onPress={this.Login} style={styles.LoginButton}><Text style={{color:"white",fontSize:20}}>Login</Text></Button>
                  <Button onPress={() => this.setState({register:false})} style={styles.register}><Text style={{fontSize:20}}>Registreren</Text></Button>
                </View>
                :
                <View style={{marginTop:60}}>
                  <ScrollView>
                    <Button  onPress={() => this.setState({register:true})}>Terug</Button>
                    <View  style={{flexDirection:"row",margin:10}}>
                        <Text style={{width:100}}>Username:</Text>
                        <TextInput onChangeText={text => this.setState({username:text})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                      <Text style={{width:100}}>Email:</Text>
                        <TextInput onChangeText={text => this.setState({studentmail:text})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                    <Text style={{width:100}}>Wachtwoord:</Text>
                        <TextInput onChangeText={text => this.setState({pass:text})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                    <Text style={{width:100}}>Voornaam:</Text>
                        <TextInput onChangeText={text => this.setState({voornaam:text})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                    <Text style={{width:100}}>Achternaam:</Text>
                        <TextInput onChangeText={text => this.setState({achternaam:text.replace(",",".")})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                    <Text style={{width:100}}>Lengte:</Text>
                        <TextInput onChangeText={text => this.setState({lengte:text.replace(",",".")})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                    <Text style={{width:100}}>Gewicht:</Text>
                        <TextInput onChangeText={text => this.setState({gewicht:text.replace(",",".")})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                      <Text style={{width:100}}>Fetpercentage:</Text>
                        <TextInput onChangeText={text => this.setState({fetpercentage:text.replace(",",".")})} style={{height:20,width:150,backgroundColor:"none"}}></TextInput>
                    </View>
                    <View style={{flexDirection:"row",margin:10}}>
                    <Text style={{width:100}}>Klas:</Text>

                    {!this.state.klassen
                    ?
                    <ActivityIndicator></ActivityIndicator>
                    :
                    <DropDownPicker
                      style={{width:150}}
                      items={this.state.klassen}
                      defaultIndex={0}
                      containerStyle={{height: 40}}
                      onChangeItem={item => this.setState({oefid:item.value})}
                    />
                    }
                  </View>
                    <Button onPress={this.register} style={styles.LoginButton}><Text style={{color:"white",alignSelf:"center"}}>Registreren</Text></Button>
                  </ScrollView>
                </View>
              }
            </View>
            :
            <View style={styles.LoginView}>
              <Button onPress={() => this.setState({student:true})}>Log in als student</Button>
              <Image width={200} style={{margin:40}} source={{uri:'https://www.summacollege.nl/images/default-source/default-album/summa_veiligheid-min.png?sfvrsn=5e3f4c85_4'}}/>
              <Text style={styles.LoginText}>Docent naam</Text>
              <TextInput style={styles.LoginInput} onChangeText={text => this.setState({loginname:text})}></TextInput>
              <Text style={styles.LoginText}>Wachtwoord</Text>
              <TextInput style={styles.LoginInput} secureTextEntry={true} onChangeText={text => this.setState({loginpass:text})}></TextInput>
              <Button onPress={this.Logindocent} style={styles.LoginButton}><Text style={{color:"white",fontSize:20}}>Login</Text></Button>
            </View>
          
          
        
          }
          

      </View>
      );
    }
    
    return(

      <PaperProvider theme={theme}>
          {this.state.student ?
            <NavigationContainer theme={theme}>
              <Tab.Navigator options={{inactiveBackgroundColor:"black"}}>
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
            :
            <NavigationContainer theme={theme}>
            <Tab.Navigator
              >
              <Tab.Screen name="Home" component={constdocenthome}  
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Schemas" component={constdocentschemas}  
                options={{
                  tabBarLabel: 'Schemas',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Oefeningen" component={constdocentoefening}  
                options={{
                  tabBarLabel: 'Oefeningen',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Leerlingen" component={constdocentleerlingen}  
                options={{
                  tabBarLabel: 'Leerlingen',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account-multiple" color={color} size={size} />
                  ),
                }}
              />
              <Tab.Screen name="Profiel" component={constdocentprofiel}  
                options={{
                  tabBarLabel: 'Profiel',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                  ),
                }}
              />

            </Tab.Navigator>
          </NavigationContainer>
          }
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
    width:150,
    borderRadius:10,
    backgroundColor:"#291876",
    marginTop:60,
    alignContent:"center"
  },
  register:{
    width:200,
    marginTop:10,
    alignContent:"center"
  },
});
