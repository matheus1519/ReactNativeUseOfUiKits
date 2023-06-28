
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { Details } from './src/pages/Details'
import { NavigationContainer } from '@react-navigation/native'
import { InitialStyled } from './src/pages/InitialStyled'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Initial" component={InitialStyled} options={{ title: 'Início' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

type ScreensProp = {
  Initial: undefined
  Details: undefined
}

export type StackScreens = StackNavigationProp<ScreensProp>
