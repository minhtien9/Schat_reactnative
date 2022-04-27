import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WaitScreenConnect from '../screens/CallCenter/WaitScreenConnect'
import VideoScreenConnect from '../screens/CallCenter/VideoScreenConnect'
import ChatScreen from '../screens/ScreenChatSingle/ChatScreen'
import ListChat from '../screens/ListChat/ListChat'
import ChatHeader from '../components/ScreenChatSingle/ChatHeader'

import ChatSetting from '../screens/ChatSetting'

const Stack = createNativeStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ListChat' component={ListChat} />
            <Stack.Screen name='ChatScreen' component={ChatScreen} />
            <Stack.Screen name='ChatHeader' component={ChatHeader} />
            <Stack.Screen
                name='WaitScreenConnect'
                component={WaitScreenConnect}
            />
            <Stack.Screen
                name='VideoScreenConnect'
                component={VideoScreenConnect}
            />
            <Stack.Screen name='ChatSetting' component={ChatSetting} />
        </Stack.Navigator>
    )
}
