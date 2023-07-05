import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Toast from 'react-native-toast-message'

import { AddNewAddress } from './src/pages/AddNewAddress'
import { ListAddresses } from './src/pages/ListAddresses'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListAddresses">
        <Stack.Screen
          name="ListAddresses"
          component={ListAddresses}
          options={{ title: 'Endereços' }}
        />
        <Stack.Screen
          name="AddNewAddress"
          component={AddNewAddress}
          options={{ title: 'Cadastrar Endereço' }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}

type ScreensProp = {
  ListAddresses: undefined
  AddNewAddress: undefined
}

export type StackScreens = StackNavigationProp<ScreensProp>
