import 'react-native-gesture-handler';

import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/Home';
import ImageDetail from './Components/ImageDetail';

const Stack = createStackNavigator();


 class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            paddingTop: 0,
            alignSelf: 'center',
            justifyContent: 'center'
          },

        }} />
          <Stack.Screen name="ImageDetail" component={ImageDetail} options={{
            title: 'Image Detail',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;