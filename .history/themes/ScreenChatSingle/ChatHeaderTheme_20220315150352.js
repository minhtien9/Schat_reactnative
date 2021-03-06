import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get('window')

const ChatHeaderTheme = StyleSheet.create({
    container: {
        height: height * 0.0911330049261084,
        flexDirection: 'row',
        backgroundColor: '#0D76C1',
    },
    groupLeft: {
        height: height * 0.0455665024630542,
        width: width * 0.4,
        flexDirection: 'row',
        marginLeft: width * 0.042,
        marginTop: height * 0.035,
    },
    groupRight: {
        height: height * 0.02,
        flexDirection: 'row',
        marginLeft: width * 0.27,
        marginTop: height * 0.05,
        alignItems: 'center',
    },
    imgBackground: {
        width: width,
        height: height * 0.0911330049261084,
        position: 'absolute',
    },
    profile: {
        flexDirection: 'row',
    },
    imgAcc: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: width * 0.025,
        marginTop: -10,
    },
    backButton: {
        marginTop: height * 0.012,
        width: 8,
        height: 13.3,
    },
    phoneButton: {
        width: 16,
        height: 16,
    },
    videoCallButton: {
        width: 15.6,
        height: 11,
        marginLeft: width * 0.05,
    },
    settingButton: {
        width: 15.6,
        height: 11,
        marginLeft: width * 0.05,
    },
    username: {
        marginLeft: width * 0.0213333333333333,
        fontFamily: 'Roboto',
        color: '#F2F1F1',
        fontSize: width * 0.0426666666666667,
        fontWeight: '500',
    },
    onlineStatus: {
        marginLeft: width * 0.0213333333333333,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: width * 0.0266666666666667,
        color: '#F2F1F1',
    },
    profileOptions: {
        flexDirection: 'row',
    },
})

export { ChatHeaderTheme }
