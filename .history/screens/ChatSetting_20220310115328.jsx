import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    StatusBar,
    ScrollView,
    Dimensions,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import TabNavigation from '../navigation/TabNavigation'
import SwitchMain from '../components/SwitchMain'

const { width, height } = Dimensions.get('window')

const ChatSetting = () => {
    return (
        <>
            <StatusBar style='light' />
            <ImageBackground
                source={require('../assets/images/bg-image.jpg')}
                style={styles.backgroundImage}
                resizeMode='cover'
            >
                <View style={styles.imgBackgroundContainer}>
                    <AntDesign name='left' size={24} color='#fff' />
                    <Text style={styles.textProfile}>Hồ sơ</Text>
                </View>
            </ImageBackground>

            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../assets/images/avt.png')}
                        style={styles.avatar}
                    />
                    <FontAwesome
                        name='camera'
                        size={18}
                        color='black'
                        style={styles.imgCamera}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.textInfo}>Gsoft Group</Text>
                        <AntDesign name='edit' size={22} color='black' />
                    </View>
                </View>

                <TabNavigation />

                <View style={styles.empty}></View>

                <ScrollView style={styles.otherContainer}>
                    <Text style={styles.setupOther}>Cài đặt khác</Text>

                    {/* <View style={styles.hideContainer}>
                        <Text style={styles.hideText}>Ẩn trò chuyện</Text>
                        <SwitchMain />
                    </View>
                    <View style={styles.showContainer}>
                        <Text style={styles.showText}>Hiện thông báo</Text>
                        <SwitchMain />
                    </View>
                    <Text style={styles.changeImg}>Thay đổi ảnh nền</Text>
                    <Text style={styles.outGroup}>Rời nhóm</Text> */}
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: width * 0.0426666666666667,
        marginLeft: width * 0.0426666666666667,
    },
    backgroundImage: {
        // width: '100%',
        // height: null,
        backgroundColor: '#0D76C1',
    },
    imgBackgroundContainer: {
        flexDirection: 'row',
        marginTop: height * 0.0178571428571429,
        marginLeft: width * 0.0426666666666667,
        marginBottom: height * 0.0246305418719212,
    },
    textProfile: {
        fontFamily: 'roboto-medium',
        fontSize: 16,
        lineHeight: 19,
        color: '#fff',
        marginLeft: 12,
        marginTop: 3,
    },

    headerContainer: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 25,
    },
    avatar: {
        borderRadius: 100,
        width: 128,
        height: 121,
        overflow: 'hidden',
        position: 'relative',
    },
    imgCamera: {
        position: 'absolute',
        right: 125,
        top: 80,

        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 2,
        padding: 10,
        // marginHeight: height * 0.0123152709359606,
        // paddingWidth: width * 0.0266666666666667,
        backgroundColor: '#E7E7E7',
        color: '#606060',
        borderRadius: 50,
        textAlign: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        marginTop: height * 0.0073891625615764,
    },
    textInfo: {
        fontSize: 16,
        fontFamily: 'roboto-medium',
        marginRight: width * 0.016,
        marginLeft: width * 0.032,
    },
    empty: {
        height: 5,
        backgroundColor: '#F2F1F1',
        // marginBottom: 10,
    },
    otherContainer: {
        backgroundColor: '#fff',
        // marginTop: 30,
    },

    setupOther: {
        fontFamily: 'roboto-medium',
        fontSize: 18,
        lineHeight: 19,
        color: '#000000',
        marginTop: height * 0.0554187192118227,
        // marginBottom: 20,
    },
    hideContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        borderStyle: 'solid',
    },
    hideText: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 19,
        color: '#797979',
        marginTop: height * 0.0246305418719212,
        marginBottom: height * 0.0123152709359606,
    },

    showContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        borderStyle: 'solid',
    },
    showText: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 16,
        color: '#797979',
        marginTop: height * 0.0246305418719212,
    },
    changeImg: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 16,
        color: '#797979',
        marginTop: height * 0.0246305418719212,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F3F3',
        borderStyle: 'solid',
    },
    outGroup: {
        fontFamily: 'roboto-regular',
        fontSize: 16,
        lineHeight: 16,
        color: '#FF0000',
        marginBottom: height * 0.0246305418719212,
        marginTop: height * 0.0246305418719212,
    },
})

export default ChatSetting
