import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import SplashScreen from './app/screens/splash';
import HomeScreen from './app/screens/home';
import MoreInfoScreen from './app/screens/moreinfo';
import AboutSpaceXScreen from './app/screens/aboutcompany';

// This will ensure the stack of the all the page
const Stack = createStackNavigator();

const App = () => {
  return(
    <SafeAreaProvider>
      {/* This is used for keeping the track of changes/history of the page transitions */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
           <Stack.Screen name='SplashScreen' component={SplashScreen} />
           <Stack.Screen name='HomeScreen' component={HomeScreen} />
           <Stack.Screen name='MoreInfoScreen' component={MoreInfoScreen} />
           <Stack.Screen 
           name='AboutSpaceXScreen' 
           component={AboutSpaceXScreen}
           options={{...TransitionPresets.ModalSlideFromBottomIOS}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
