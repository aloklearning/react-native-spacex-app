// This will contain the information about the company
import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, 
    Image, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppSpinner from '../utility/appspinner';

const { height } = Dimensions.get('screen');

const AboutSpaceXScreen = ({ navigation, route }) => {
    const [url, setUrl] = useState('');
    const { companyData } = route.params;
    const [modalVisible, setModalVisible] = useState(false);

    // Which will load the url in the webwiview
    const SocialMediaWebView = () => {
        const [isLoading, setIsLoading] = useState(false);

        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Modal 
                animationType="slide"
                transparent={false}
                visible={modalVisible}>
                    <View style={{height: '100%', marginTop: height * 0.05}}>
                        <Text onPress={() => setModalVisible(false)}
                        style={{fontSize: 18, fontWeight: '600', textAlign: 'right', paddingRight: 20}}>
                            X
                        </Text>

                        {/* WebView Content */}
                        <View style={{flex: 1, marginTop: 16}}>
                            <WebView source={{uri: url }} 
                            onLoadStart={() => setIsLoading(true)}
                            onLoad={() => setIsLoading(false)} 
                            onError={() => setIsLoading(false)} />
                        </View>
                    </View>

                    {/* AppSpinner. Loads when the content is loading in the modal webview */}
                    { isLoading && <AppSpinner color='lightblue' /> }
                </Modal>
            </View>
        );
    }

    const SocialNetworkIcon = ({ uri, url }) => {
        return(
            <TouchableOpacity activeOpacity={1}
            onPress={() => {
                setUrl(url);
                setModalVisible(true);
            }}>
                <Image style={{height: 35, width: 35}}
                source={{ uri: uri }}/>
            </TouchableOpacity>
        );
    }

    return(
        <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Text onPress={() => navigation.goBack()}
                style={{fontWeight: 'bold', fontSize: 16.5, color: '#1d1135'}}>
                    Go Back
                </Text>
                
                {/* SPACER */}
                <View style={{paddingVertical: 10}} />
                <ScrollView overScrollMode='never'
                showsVerticalScrollIndicator={false}>
                    {/* Image Container */}
                    <View style={{width: '100%', marginBottom: '8%', 
                    alignItems: 'center'}}>
                        <Image resizeMode='cover' style={{width: '100%', height: 150}}
                        source={{ uri: 'https://i.pinimg.com/originals/47/ad/b9/47adb95a09f4541ef3096fc3b646edd0.jpg'}}/>
                    </View>

                    {/* Information About the company */}
                    {/*  TOO TIRED TO MAKE A REUSABLE WIDGET :( CAN MAKE IT */}
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Name Of the Company:{' '}
                        </Text>
                        <Text>{companyData.name}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Founder:{' '}
                        </Text>
                        <Text>{companyData.founder}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Foundation Year:{' '}
                        </Text>
                        <Text>{companyData.founded}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Total Number of Employees:{' '}
                        </Text>
                        <Text>{companyData.employees}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Number Of Vehicles:{' '}
                        </Text>
                        <Text>{companyData.vehicles}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Test Site(s):{' '}
                        </Text>
                        <Text>{companyData.test_sites}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            CEO:{' '}
                        </Text>
                        <Text>{companyData.ceo}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            CTO:{' '}
                        </Text>
                        <Text>{companyData.cto}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            COO:{' '}
                        </Text>
                        <Text>{companyData.coo}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            CTO Propulsion:{' '}
                        </Text>
                        <Text>{companyData.cto_propulsion}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Valuation:{' '}
                        </Text>
                        <Text>${companyData.valuation}</Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Headquarter:{' '}
                        </Text>
                        <Text>
                            {companyData.headquarters.address},{' '}
                            {companyData.headquarters.city},{' '}
                            {companyData.headquarters.state}
                        </Text>
                    </Text>
                    <Text style={{fontSize: 17, color: '#1d1135', paddingBottom: 5}}>
                        <Text style={{fontWeight: 'bold'}}>
                            Summary:{' '}
                        </Text>
                        <Text>{companyData.summary}</Text>
                    </Text>
                </ScrollView>
                
                {/* Social Network Icons */}
                <View style={{marginBottom: 'auto', marginBottom: 30, flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                    {/* WebSite */}
                    <SocialNetworkIcon url={companyData.links.website}
                    uri='https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Website-Outline-256.png' />
                    <SocialNetworkIcon url={companyData.links.flickr}
                    uri='https://cdn3.iconfinder.com/data/icons/picons-social/57/44-flickr-256.png' />
                    <SocialNetworkIcon url={companyData.links.twitter}
                    uri='https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-256.png' />
                    <SocialNetworkIcon url={companyData.links.elon_twitter}
                    uri='https://cdn3.iconfinder.com/data/icons/picons-social/57/45-twitter-256.png' />
                </View>

                {/* Social Media Modal */}
                { modalVisible && <SocialMediaWebView /> }
            </View>
            <StatusBar barStyle="default" backgroundColor='#1d1135' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '5%',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    }
})

export default AboutSpaceXScreen;