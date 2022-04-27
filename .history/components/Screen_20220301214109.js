import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

function Screen() {
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity>
                <FontAwesome5
                    name='arrow-left'
                    size={20}
                    style={styles.arrowLeftIcon}
                />
            </TouchableOpacity> */}
            <View>
                <Text style={styles.text}>Đăng ký</Text>
                <Text style={styles.paragraph}>Bạn đã có tài khoản Schat?</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.signup}>
                    Đăng nhập
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: '#fff',
    //     width: 'auto',
    // },
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
    signup: {
        color: '#339af0',
    },
})

export default Screen
