/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './src/routes/RootStack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/store';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';




const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>

            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>


  )
}

export default App;
