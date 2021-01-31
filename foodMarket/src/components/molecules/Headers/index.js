import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icback } from '../../../assets/icon'

const Headers = ({title, subTitle, onBack}) => {
    return (
        <View style={styles.container}> 
        {
            onBack && (
               <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.back}>
                        <Icback />   
                    </View>    
                </TouchableOpacity>  
            )
        }
            
            <View>
                <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            
        </View>
    )
}

export default Headers;

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        paddingHorizontal :24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection : 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    subTitle :{
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3'
    },
    back: {
        // backgroundColor:'yellow',
        padding: 16,
        marginRight: 16,
        marginLeft: -10
    },
})
