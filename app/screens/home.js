import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, 
    TouchableOpacity, Alert } from 'react-native';

import API from '../utility/api';
import HeaderText from '../utility/header';
import AppSpinner from '../utility/appspinner';

import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    /* 
        This is for the ease of exploring through the data, and go to 
        the next page. Reason why I chose Capsules, and Cores, cos, 
        they have same payload, so that I can reuse the next page efficiently 
    */
    const spacexCategories = require('../utility/spacexcontent.json');

    const ExpandedItemContent = ({ type }) => {

        const moreInfoPage = () => {
            setIsLoading(true);
            API.instance.getData(type.urlroute).then(data => {
                setIsLoading(false);
                //transitioning to the page with the data only when we have data
                // Else we will show the Alert
                if(data.length > 0){
                    navigation.navigate('MoreInfoScreen', 
                    { title: type.name, apiData: data });
                }else{
                    Alert.alert(
                        'SpaceX',
                        'Currently there is no data to show for this category.' 
                        + ' Please try for some other category',
                        [{ text: 'Ok' }],
                        { cancelable: false }
                    );
                }
            });
        }

        return(
            <TouchableOpacity activeOpacity={0.7}
            onPress={() => moreInfoPage()}
            style={{marginVertical: 5}}>
                <Text style={{fontSize: 16, color: '#1d1135'}}>
                    {type.name}
                </Text>
            </TouchableOpacity>
        );
    }

    const ExpandableWidget = ({ data }) => {
        const [isExpanded, setIsExpanded] = useState(false);

        // To hide/show the expandable content
        const toggle = () => {
            setIsExpanded(value => value = !value);
        }

        return(
            <TouchableOpacity activeOpacity={1} 
            onPress={() => toggle()}
            style={styles.expandableContainer}>
                {/* Collapsed View Content */}
                {/* TODO: Use of a right side icon using react-native element */}
                <View style={styles.collapsedContent}>
                    <Text style={styles.expandableHeader}>
                        {data.category}
                    </Text>
                </View>

                {/* Expanded Content. Shows only when toggle value is true */}
                { isExpanded && <View style={{width: '100%', paddingTop: 10}}>
                    {/* Looping through the types of the category */}
                    { data.types.map((type, index) => (
                        <View key={index}>
                            <ExpandedItemContent type={type} />
                        </View>
                    )) }
                </View> }
            </TouchableOpacity>
        );
    }

    const toAboutPage = () => {
        setIsLoading(true);
        API.instance.getData('/info').then(data => {
            setIsLoading(false);
            navigation.navigate('AboutSpaceXScreen', { companyData: data });
        });
    }

    return(
        <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: '#1d1135'}}>
            <View style={styles.container}>
                <HeaderText fontSize={35} />
                <Text style={styles.instructions}>
                    Welcome Astrophile! All the below items are expandable, if you wish to know more about a particular item, 
                    please select any one of them from the list, and explore... 
                </Text>

                {/* SPACER */}
                <View style={{paddingVertical: 15}}/>

                {/* Content */}
                <View style={{flexGrow: 1, paddingTop: 20}}>
                    {/* Looping through the content */}
                    { spacexCategories.map((item, index) => (
                        <View key={index}>
                            <ExpandableWidget data={item} />
                        </View>
                    ))}
                </View> 

                {/* About SpaceX */}
                <TouchableOpacity activeOpacity={0.7}
                onPress={() => toAboutPage()}
                style={{marginTop: 'auto', marginBottom: 30,
                backgroundColor: 'orange', padding: 12, borderRadius: 50}}>
                    <Text style={{fontSize: 18, fontWeight: '600', 
                    color: '#1d1135', textAlign: 'center'}}>
                        About SpaceX
                    </Text>
                </TouchableOpacity>

                {/* App Spinner which will be used to call the API and then pass it to the next page */}
                { isLoading && <AppSpinner />}
            </View>

            <StatusBar barStyle="light-content" backgroundColor='#1d1135' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20, 
        paddingTop: '10%'
    },
    instructions: {
        paddingTop: 10,
        color: 'white',
        fontStyle: 'italic'
    },
    expandableContainer: {
        padding: 10,
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },
    collapsedContent: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    expandableHeader: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'rgba(29, 17, 53, 1)'
    },
    iconContainer: {
        backgroundColor: 'rgba(29, 17, 53, 1)',
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
});

export default HomeScreen;