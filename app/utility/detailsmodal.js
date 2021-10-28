// This is a utility modal which will be used to see each items data when clicked
import React, { useState } from 'react';
import { Modal, View, StyleSheet, Text, 
    TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { height } = Dimensions.get('screen');

const DetailsModal = ({ data, setModalVisible, isParentCapsule }) => {
    const date = new Date(data.original_launch_unix * 1000);
    var formatted = (date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate())
    + '-' + (date.getMonth()+1 <=9 ? `0${date.getMonth()+1}` : date.getMonth()+1)
    + '-' + date.getFullYear();

    const NumberedDetails = ({ title, info }) => {
        return(
            <Text style={{fontSize: 16, paddingTop: 5}}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <Text style={{textTransform: 'capitalize'}}>{info}</Text>
            </Text>
        );
    }

    // This will show all Content for CORS
    const COREData = () => {
        return(
            <View style={{paddingTop: 5}}>
                <NumberedDetails title={'1. Core Serial: '} info={data.core_serial}/>
                <NumberedDetails title={'2. Block: '} info={data.block ?? 'No Data Available'} />
                <NumberedDetails title={'3. Status: '} info={data.status ?? 'No Data Available'} />
                <NumberedDetails title={'4. Original Launch Date: '} 
                info={data.original_launch_unix !== null ? formatted : 'No Data Available'} />
                <NumberedDetails title={'5. Reuse Count(s): '} info={data.reuse_count ?? 'No Data Available'} />
                <NumberedDetails title={'6. RTLS Attempt(s): '} info={data.rtls_attempts ?? 'No Data Available'} />
                <NumberedDetails title={'7. RTLS Landing(s): '} info={data.rtls_landings ?? 'No Data Available'} />
                <NumberedDetails title={'8. ASDS Attempt(s): '} info={data.asds_attempts ?? 'No Data Available'} />
                <NumberedDetails title={'9. ASDS Landing(s): '} info={data.asds_landings ?? 'No Data Available'} />
                <NumberedDetails title={'10. Water Landing: '} info={data.water_landing ? 'Yes' : 'No'} />
                <NumberedDetails title={'5. About: '} info={data.details ?? 'No Data Available'} />
                <View style={{ paddingBottom: 15 }}/>
            </View>
        );
    }

    // A component to show Capsules Specific Information
    const CapsuleData = () => {
        return(
            <View style={{paddingTop: 5}}>
                <NumberedDetails title={'1. Capsule Serial: '} info={data.capsule_serial}/>
                <NumberedDetails title={'2. Capsule ID: '} info={data.capsule_id ?? 'No Data Available'} />
                <NumberedDetails title={'3. Status: '} info={data.status ?? 'No Data Available'} />
                <NumberedDetails title={'4. Original Launch Date: '} 
                info={data.original_launch_unix !== null ? formatted : 'No Data Available' } />
                <NumberedDetails title={'5. Landing(s): '} info={data.landings ?? 'No Data Available'} />
                <NumberedDetails title={'6. Type: '} info={data.type ?? 'No Data Available'} />
                <NumberedDetails title={'7. Resue Count(s): '} info={data.reuse_count ?? 'No Data Available'} />
                <NumberedDetails title={'5. About: '} info={data.details ?? 'No Data Available'} />
                <View style={{ paddingBottom: 15 }}/>
            </View>
        );
    }

    return(
        <View style={styles.centeredView}>
            {/* Height of the modal should increase in CORE, since it has more
            data as compared to Capsules */}
            <View style={[styles.modalContainer,
             { height: isParentCapsule ? height * 0.4 : height * 0.5 }]}>
                {/* Close Modal Button */}
                <Text style={{textAlign: 'right', fontWeight: '500',
                fontSize: 18}} onPress={() => setModalVisible(false)}>
                    X
                </Text> 

                <ScrollView overScrollMode='never'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
                    {/* This should only be visible when the Misson name is there */}
                    { data.missions.length > 0 && <Text style={styles.mission}>
                        {data.missions[0].name}
                    </Text> }

                    <Text style={{fontSize: 17, fontWeight: '600', paddingTop: 16}}>
                        More Information:
                    </Text>

                    {/* Details of the Type based upon the Parent. */}
                    { !isParentCapsule && <COREData /> }

                    {/* Details of the Capsule based upon Parent Name */}
                    { isParentCapsule && <CapsuleData /> }
                </ScrollView>  
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.4)'
    }, 
    modalContainer: {
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 20,
        marginHorizontal: 20
    },
    mission: {
        textAlign: 'center', 
        fontSize: 18, 
        fontWeight: 'bold'
    }
});

export default DetailsModal;