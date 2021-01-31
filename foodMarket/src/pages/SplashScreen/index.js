import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import { Logo } from '../../assets';


const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout (() => {
            navigation.navigate("SignIn")
        }, 2000)
    }, []);

    return (
        <View 
            style={{
                backgroundColor: '#FFC700',
                flex:1,
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
            <Logo />
            <View 
                style={{
                    height: 38, 
                }}/>
            <Text
                style={{
                    fontSize: 50, 
                    color: '#020202',
                    fontFamily: 'Poppins-Medium'
                }}
            >FoodMarket</Text>
            
           
        </View>
    );
};

export default SplashScreen;