import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import { SplashScreen } from './pages';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SplashScreen />
    </>
  );
};

export default App;
