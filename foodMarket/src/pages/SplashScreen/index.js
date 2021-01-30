import React from 'react';
import {Text, View} from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = () => {
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
             <Text
                style={{
                    fontSize: 50, 
                    color: '#020202',
                    fontFamily: 'PottaOne-Regular'
                    
                }}
            >FoodMarket2</Text>
             <Text
                style={{
                    fontSize:50, 
                    color: '#020202',
                    fontFamily: 'Poppins-Light'
                }}
            >FoodMarket</Text>
            <Text
                style={{
                    fontSize:50, 
                    color: '#020202',
                    fontFamily: 'Poppins-Regular'
                }}
            >FoodMarket</Text>
        </View>
    );
};

export default SplashScreen;