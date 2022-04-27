import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

function NameInput() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.username}>Họ và tên đệm</Text>
                <View style={styles.userinput}>
                    <TextInput placeholder='Nhập họ và tên đệm của bạn' />
                </View>
            </View>
            <View>
                <Text style={styles.name}>Tên</Text>
                <TextInput placeholder='Nhập tên của bạn' />
            </View>
            <Button title='Tiếp theo' />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    
  }
    username: {
        width: 85,
        height: 15,
        marginTop: 47,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    userinput: {
        width: 343,
        height: 38,
        marginTop: 8,
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        // boxSizing: 'border-box',
        borderRadius: 4,
    },
    name: {
        marginTop: 16,
        width: 22,
height: 15,

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;

color: #404040;
    },
})
export default NameInput
