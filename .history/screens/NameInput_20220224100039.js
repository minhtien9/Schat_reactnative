import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import { SignupSchema } from '../validation'

function NameInput() {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ firstName: '', lastName: '' }}
                validationSchema={SignupSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <View>
                        <View>
                            <Text style={styles.username}>Họ và tên đệm</Text>

                            <TextInput
                                style={styles.userinput}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('emfirstNameail')}
                                autoFocus={true}
                                value={values.firstName}
                                placeholder='Nhập họ và tên đệm của bạn'
                            />

                            {errors.firstName && touched.firstName ? (
                                <Text style={{ color: 'red' }}>
                                    {errors.firstName}
                                </Text>
                            ) : null}
                        </View>
                        <View>
                            <Text style={styles.name}>Tên</Text>

                            <TextInput
                                style={styles.nameinput}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('emlastNameail')}
                                value={values.lastName}
                                placeholder='Nhập tên của bạn'
                            />

                            {errors.lastName && touched.lastName ? (
                                <Text style={{ color: 'red' }}>
                                    {errors.lastName}
                                </Text>
                            ) : null}
                        </View>
                        <View>
                            <Button
                                title='Tiếp theo'
                                style={styles.button}
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
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
    name: {
        marginTop: 16,
        width: 22,
        height: 15,
        fontSize: 13,
        lineHeight: 15,
        alignItems: 'center',
        color: '#404040',
    },
    nameinput: {
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
    button: {
        height: 38,
        backgroundColor: '#27AAE1',
        borderRadius: 4,
        textTransform: 'lowercase',
        marginTop: 32,
    },
})
export default NameInput
