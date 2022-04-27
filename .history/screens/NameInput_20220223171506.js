import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Formik } from 'formik'

function NameInput() {
    const submitForm = () => {
        console.log(enteredInputFirstName, enteredInputLastName)
    }
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ firstName: '', lastName: '' }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <View>
                            <Text style={styles.username}>Họ và tên đệm</Text>
                            <View style={styles.userinput}>
                                <TextInput
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('emfirstNameail')}
                                    value={values.firstName}
                                    placeholder='Nhập họ và tên đệm của bạn'
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.name}>Tên</Text>
                            <View sytle style={styles.nameinput}>
                                <TextInput
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('emlastNameail')}
                                    value={values.lastName}
                                    placeholder='Nhập tên của bạn'
                                />
                            </View>
                        </View>
                        <Button
                            title='Tiếp theo'
                            style={styles.button}
                            onPress={handleSubmit}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    username: {
        width: 90,
        height: 15,
        marginTop: 47,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    userinput: {
        // width: '100%',
        height: 38,
        marginTop: 8,
        backgroundColor: '#FDFDFD',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        // boxSizing: 'border-box',
        borderRadius: 4,
        paddingTop: 8,
        paddingLeft: 13,
        paddingBottom: 10,
    },
    name: {
        marginTop: 16,
        width: 22,
        height: 15,
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    nameinput: {
        // width: '100%',
        height: 38,
        marginTop: 8,
        marginBottom: 32,
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
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
    button: {
        // width: '100%',
        height: 38,
        backgroundColor: '#27AAE1',
        borderRadius: 4,
        textTransform: 'lowercase',
    },
})
export default NameInput
