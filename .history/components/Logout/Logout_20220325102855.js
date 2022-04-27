import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native'

const Logout = () => {
    const navigation = useNavigation()

    const removeData = async () => {
        try {
            await SecureStore.deleteItemAsync('phoneNumber')
            navigation.navigate('WaittingScreen')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <ImageBackground
                source={require('../../assets/images/bg-image.jpg')}
                style={ChatSettingTheme.backgroundImage}
                resizeMode='cover'
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={ChatSettingTheme.imgBackgroundContainer}
                >
                    <AntDesign name='left' size={24} color='#fff' />
                    <Text style={ChatSettingTheme.textProfile}>Hồ sơ</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.screen}>
                <Button
                    style={styles.button}
                    title='Đăng xuất'
                    onPress={removeData}
                />
            </View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    button: {
        borderRadius: 100,
    },
    arrowLeftIcon: {
        color: '#000',
        width: 20,
        height: 26,
        marginTop: 58,
        // marginBottom: 29,
    },
})
