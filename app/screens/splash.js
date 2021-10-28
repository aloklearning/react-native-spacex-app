import React, { useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

import HeaderText from '../utility/header';

import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        // This is for staying at this screen for 1.5 seconds
        // And then switch to homepage
        const timerId = setTimeout(() => {
            // This will transit to the next page, and remove the 
            // splash screen from the stack
            navigation.dispatch(StackActions.replace('HomeScreen'));
        }, 1500);

        // Finally removing the timer to avoid any leakage issue
        // while removing this component from the view
        return () => clearTimeout(timerId);
    }, []);

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#1d1135'}}>
          <View style={styles.container}>
            <HeaderText />
          </View>  

          <StatusBar barStyle="light-content" backgroundColor='#1d1135'/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#1d1135', 
        justifyContent: 'center',
        alignItems: 'center' 
    }
});

export default SplashScreen;