import React from 'react';
import {
  Text,
  StatusBar,
} from 'react-native';
import { SignIn, SplashScreen } from './pages';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
         {/* <SplashScreen /> */}
         <SignIn />
      </NavigationContainer>
       
    </>
  );
};

export default App;
