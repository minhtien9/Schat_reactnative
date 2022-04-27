import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

function MainButton(props) {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text activeOpacity={} style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton
