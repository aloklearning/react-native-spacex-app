import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const AppSpinner = ({ color=null }) => {
    return(
        <View style={{position: 'absolute', backgroundColor: 'transparent',
        justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <ActivityIndicator size="large" color={color ?? 'white'} />
        </View>
    );
}

export default AppSpinner;