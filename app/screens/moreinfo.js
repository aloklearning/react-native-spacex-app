import React, { useState, useRef } from 'react';
import { View, Text, StatusBar, StyleSheet, 
    ScrollView, TouchableOpacity } from 'react-native';

import DetailsModal from '../utility/detailsmodal';

import { SafeAreaView } from 'react-native-safe-area-context';

const MoreInfoScreen = ({ navigation, route }) => {
    const scrollViewRef = useRef();
    const { apiData } = route.params;
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    /* 
        This is a workaround for showing the capsules item and Cors item 
        on the details modal. Both of them have some similar API content, 
        and some different. Want to show every possible data avaiable for both
        of them. Hence identifying and showing the content based upon the parent
    */
    const isCapsuleContent = route.params.title.includes('Capsules');

    const Item = ({ itemData }) => {
        return(
            <TouchableOpacity activeOpacity={0.9} 
            onPress={() => {
                setData(itemData);
                setModalVisible(true);
            }}
            style={styles.itemContainer}>
                <View style={{width: '100%', flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{color: '#1d1135', fontWeight: '600', fontSize: 16, width: '75%'}}>
                        {/* This is to check some of the responses doesn't have a mission, so put a check */}
                        Mission Name: {itemData.missions.length > 0 ? itemData.missions[0].name : 'No Missions Yet'}
                    </Text>

                    { itemData.status !== null && <View style={{backgroundColor: 'grey', padding: 5, borderRadius: 10}}>
                        <Text style={{fontStyle: 'italic', color: '#1d1135'}}>
                            {itemData.status}
                        </Text>
                    </View> }
                </View>

                <Text style={{color: '#1d1135', fontSize: 14, paddingTop: 10}}>
                    {itemData.details !== null ? itemData.details : 'No Details'}
                </Text>
            </TouchableOpacity>
        );
    }

    return(
        <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: '#1d1135'}}>
            <View style={styles.container}>
                <Text onPress={() => navigation.goBack()}
                style={{color: 'white', fontSize: 16.5, fontWeight: 'bold'}}>
                    Go Back
                </Text>
                <Text style={styles.header}>
                    {route.params.title}
                </Text>
                <Text style={styles.instructions}>
                    Welcome to {route.params.title} page. This page will give you an insight about the chosen category. Should you wish to 
                    explore more about a particular type, please click on the item, and explore...
                </Text>

                {/* SPACER */}
                <View style={{paddingVertical: 15}} />

                <ScrollView ref={scrollViewRef} overScrollMode='never'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
                    {/* Traversing through the data to show the listings */}
                    { apiData.map((item, index) => (
                        <View key={index}>
                            <Item itemData={item} />
                        </View>
                    ))}
                </ScrollView>

                {/* Modal for showing details of the types */}
                { modalVisible && 
                <DetailsModal data={data} isParentCapsule={isCapsuleContent}
                setModalVisible={setModalVisible} /> }

                {/* Floating Button to go on top */}
                <TouchableOpacity activeOpacity={0.8} 
                onPress={() => scrollViewRef.current?.scrollTo({ y: 0, animate: true})}
                style={styles.floatingAction}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Up</Text>
                </TouchableOpacity>
            </View>

            <StatusBar barStyle='light-content' backgroundColor='#1d1135' />
        </SafeAreaView>
    );
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: '5%'
    },
    instructions: {
        paddingTop: 10,
        color: 'white',
        fontStyle: 'italic'
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        paddingTop: '5%'
    },
    itemContainer: {
        width: '100%',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(135,206,235,0.7)'
    },
    floatingAction: {
        position: 'absolute', 
        bottom: 30, 
        right: 30, 
        height: 50, 
        width: 50, 
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        borderRadius: 40, 
        backgroundColor: 'rgba(29, 17, 53, 1)', 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default MoreInfoScreen;