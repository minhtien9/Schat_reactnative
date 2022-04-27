import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const WaitScreenConnect = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.zoomButton}>
                <AntDesign name='arrowsalt' size={24} color='white' />
            </View>

            <View style={styles.headerContainer}>
                <Image
                    source={require('../../assets/images/CallCenter/avt.png')}
                    style={styles.avatar}
                />
                <Text style={styles.textHeader}>Gsoft Group</Text>
                <View style={styles.bodyContainer}>
                    <View style={styles.iconContainer}>
                        <AntDesign name='left' size={24} color='black' />
                        <AntDesign name='left' size={24} color='black' />
                        <AntDesign name='left' size={24} color='black' />
                    </View>
                    <Text style={styles.textBody}>Đang kết nối với máy chủ</Text>
                    <View style={styles.iconContainer}>
                        <AntDesign name='right' size={24} color='black' />
                        <AntDesign name='right' size={24} color='black' />
                        <AntDesign name='right' size={24} color='black' />
                    </View>
                </View>
            </View>

            <View>
                <Feather name='volume-2' size={24} color='black' />
                <FontAwesome5 name='video' size={24} color='black' />
                <FontAwesome5 name='microphone' size={24} color='black' />
            </View>
            <MaterialCommunityIcons
                name='phone-in-talk'
                size={24}
                color='black'
            />
        </SafeAreaView>
    )
}

export default WaitScreenConnect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27AAE1',
        paddingTop: 50,
    },
    zoomButton: {
        marginRight: 16,
    },
    headerContainer: {
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    textHeader: {
        marginTop: 30,
        fontFamily: 'roboto-medium',
        width: 174,
        height: 44,
        fontSize: 18,
        lineHeight: 21,
        color: '#F2F1F1',
        textAlign: 'center',
    },
    bodyContainer: {
        flexDirection: 'row',
    },
    textBody:{
      width: 218,
height: 18.


fontWeight: 400;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;

/* C0F7FF */

color: #C0F7FF;
    },
    iconContainer: {
        flexDirection: 'row',
    },
})