import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Buttons, Gaps, Headers, Select, TextInputs } from '../../components';

const SignUpAddress = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Headers 
                title="Address" 
                subTitle="Make sure it’s valid"
                onBack={() => {}}
            />
            <View style={styles.container}>    
                <TextInputs 
                    label="Phone No."
                    placeholder="Type your phone number"
                />
                <Gaps height={16}/>
                <TextInputs 
                    label="Address"
                    placeholder="Type your address"
                />
                <Gaps height={16}/>
                <TextInputs
                    label="House No."
                    placeholder="Type your house number"
                />
                <Gaps height={16}/>
                <Select label="City" />
                <Gaps height={24}/>
                <Buttons 
                    text="Sign Up Now" 
                    onPress={() => navigation.replace('SuccessSignUp')}
                />
            
        </View>
        </View>
    )
}

export default SignUpAddress;

const styles = StyleSheet.create({
    page : {
        flex: 1,
    },
    container : {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },

})
