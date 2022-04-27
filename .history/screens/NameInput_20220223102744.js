import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

function NameInput() {
    return (
        <View>
            <View>
                <Text>Họ và tên</Text>
                <TextInput placeholder='Nhập họ và tên đệm của bạn' />
            </View>
            <View>
                <Text>Tên</Text>
                <TextInput placeholder='Nhập họ và tên đệm của bạn' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
export default NameInput
