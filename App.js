import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import Intro from "./screens/Intro"
import Prevention from "./screens/Prevention"

export default class App extends Component {
  render(){
    return (
      <AppContainer/>
    );
  }
  

  }

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen ,
  Intro : Intro ,
  Prevention : Prevention
})

const AppContainer = createAppContainer(AppNavigator)