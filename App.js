/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import ToDoListHome from './src/Components/ToDoList/Component/ToDoListHome'
import AddNewTask from './src/Components/AddNewTask/component/AddNewTask'
import ImageConstants from './src/Constants/ImageConstants'
import {Router, Scene, Actions} from 'react-native-router-flux'

const leftBack = () => {



  return (
    <View style={{ marginRight: 10, marginTop: Platform.OS === 'ios' ? 10 : 0 }} >
      <TouchableOpacity onPress={() => Actions.pop()} >
        {/* <Icon
          name='home'
          // type='font-awesome'
          size={30}

        /> */}

        <Image
          source={ImageConstants.homeIMage.arrow_back}
          style={{ height: 28, width: 30, marginLeft: 7, }}
        >

        </Image>
      </TouchableOpacity>
    </View>
  );
}


export default class App extends React.Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="ToDoListHome" component={ToDoListHome} title="ToDo List" />
        <Scene
        renderLeftButton={leftBack}
         key="AddNewTask" 
         component={AddNewTask} 
         title="Add ToDo" />
        {/* <Scene key="home" component={Home} /> */}
      </Scene>
    </Router>
    )
  }

}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'red',
    alignItems:'center',
    justifyContent:'center'
  }
})



