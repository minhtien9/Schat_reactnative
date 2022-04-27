import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenSignupName from './screens/ScreenSignupName'
import ScreenWait from './screens/ScreenWait'
import ScreenPhoneInput from './screens/ScreenPhoneInput'

const Stack = createNativeStackNavigator()

export default function App() {
    const [loaded] = useFonts({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='ScreenWait'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='ScreenWait' component={ScreenWait} />
                <Stack.Screen
                    name='ScreenSignupName'
                    component={ScreenSignupName}
                />
                <Stack.Screen
                    name='ScreenPhoneInput'
                    component={ScreenPhoneInput}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
