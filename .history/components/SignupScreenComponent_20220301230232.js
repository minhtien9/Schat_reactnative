import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const SignupScreenComponent = () => {
    return (
        <View>
            {/* <TouchableOpacity>
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={styles.arrowLeftIcon}
                />
            </TouchableOpacity> */}
            <Text style={styles.text}>Đăng Nhập</Text>
            <View style={styles.wrapper}>
                <Text style={styles.paragraph}>Bạn mới dùng Schat?</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('SignupNameScreen')
                    }}
                >
                    <Text style={styles.signin}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
    },
    arrowLeftIcon: {
        color: '#000',
        width: 20,
        height: 26,
        marginTop: 58,
    },
    text: {
        width: 343,
        height: 27,
        fontSize: 23,
        fontFamily: 'roboto-medium',
        lineHeight: 27,
        alignItems: 'flex-end',
        color: '#131313',
        marginTop: 29,
    },
    paragraph: {
        marginTop: 12,
        fontFamily: 'roboto-light',
        fontSize: 15,
        lineHeight: 18,
        color: '#7B7B7B',
    },
    signin: {
        color: '#339af0',
        paddingLeft: 8,
        paddingTop: 10,
    },
})

export default SignupScreenComponent
