import React from 'react';
import SignIn from '../pages/SignIn';
import SplashScreen from '../pages/SplashScreen';
import SignUp from '../pages/SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpAddress from '../pages/SignUpAddress';



const Stack = createStackNavigator();

const Router = () => {
    
    return(
        <Stack.Navigator>
        <Stack.Screen 
            name="SplashScreen"
            component={SplashScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerShown: false
            }}
        />
         <Stack.Screen
            name="SignUpAddress"
            component={SignUpAddress}
            options={{
                headerShown: false
            }}
        />

    </Stack.Navigator>
    );
};

export default Router;