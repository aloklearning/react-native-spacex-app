// This will be used for setting the header text with Rocket
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeaderText = ({ fontSize=45 }) => {
    return(
        <Text style={[styles.text, {fontSize: fontSize}]}>
            SpaceX 🚀
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
});

export default HeaderText;