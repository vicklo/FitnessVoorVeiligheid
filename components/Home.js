import React, { Component, useLayoutEffect } from 'react';
import { View, ActivityIndicator,FlatList,StyleSheet,Text,Dimensions,TouchableOpacity   } from 'react-native';
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
                
            </ScrollView>
        );
  }
}
const styles = StyleSheet.create({
    container:{

    }
})