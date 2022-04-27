import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'

const WaitScreenConnect = () => {
    return (
        <View style={styles.container}>
            <AntDesign name='arrowsalt' size={24} color='black' />
            <View>
                <Image
                    source={require('../../assets/images/CallCenter/avt.png')}
                />
                <Text>Gsoft Group</Text>
                <View>
                    <AntDesign name='left' size={24} color='black' />
                    <AntDesign name='left' size={24} color='black' />
                    <AntDesign name='left' size={24} color='black' />
                </View>
                <Text>Đang kết nối với máy chủ</Text>
                <View></View>
            </View>
        </View>
    )
}

export default WaitScreenConnect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27AAE1',
    },
})