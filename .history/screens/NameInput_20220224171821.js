import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native'
import Screen from '../components/Screen'

function NameInput() {
    const [enteredFirstName, setEnteredFirstName] = useState('')
    const [enteredLastName, setEnteredLastName] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleFirstNameChange = ({ target: { value } }) => {
        if (value === '') {
        }
    }
    const handleSubmit = () => {}

    return (
        <View style={styles.container}>
            <Screen />
            <View>
                <View>
                    <Text style={styles.firstName}>Họ và tên đệm</Text>

                    <TextInput
                        style={styles.firstNameInput}
                        autoFocus={true}
                        placeholder='Nhập họ và tên đệm của bạn'
                        value={enteredFirstName}
                        onChange={handleFirstNameChange}
                    />
                </View>

                <View>
                    <Text style={styles.lastName}>Tên</Text>

                    <TextInput
                        style={styles.lastNameInput}
                        placeholder='Nhập tên của bạn'
                        value={enteredLastName}
                    />
                </View>

                <TouchableOpacity>
                    <Button
                        title='Tiếp theo'
                        style={styles.buttonNextText}
                        onPress={handleSubmit}
                        disabled={btnDisabled}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // fontFamily: 'Roboto-Regular',
        marginRight: 16,
        marginLeft: 16,
    },
    firstName: {
        width: 90,
        height: 15,
        marginTop: 47,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    firstNameInput: {
        height: 38,
        marginTop: 8,
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 4,
        paddingTop: 8,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    lastName: {
        marginTop: 16,
        width: 22,
        height: 15,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    lastNameInput: {
        height: 38,
        marginTop: 8,
        fontSize: 13,
        lineHeight: 15,
        color: '#404040',
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 4,
        paddingTop: 8,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    // buttonNext: {},
    buttonNextText: {
        height: 38,
        backgroundColor: '#27AAE1',
        borderRadius: 4,
    },
    // firstNameInput: { marginBottom: 32 },
})
export default NameInput
