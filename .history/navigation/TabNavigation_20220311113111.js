import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Files from '../components/Files'
import ImageVideo from '../components/ImageVideo'
import Links from '../components/Links'

const Tab = createMaterialTopTabNavigator()
const Stack = createNativeStackNavigator()

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='ImageVideo'
            screenOptions={{
                tabBarActiveTintColor: '#0D76C1',
                tabBarInactiveTintColor: '#1B1B1B',
                tabBarLabelStyle: {
                    fontSize: 14,
                    textTransform: 'none',
                    fontFamily: 'roboto-regular',
                    lineHeight: 16,
                    color: '#1B1B1B',
                },
            }}
        >
            <Tab.Screen
                name='ImageVideo'
                component={ImageVideo}
                options={{ tabBarLabel: 'Ảnh/ video' }}
            />
            <Tab.Screen
                name='Files'
                component={Files}
                options={{ tabBarLabel: 'Files' }}
            />
            <Tab.Screen
                name='Links'
                component={Links}
                options={{ tabBarLabel: 'Links' }}
            />
        </Tab.Navigator>
    )
}

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    )
}
export default function TabNavigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
