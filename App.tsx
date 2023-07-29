/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './src/routes/RootStack';



const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App;
