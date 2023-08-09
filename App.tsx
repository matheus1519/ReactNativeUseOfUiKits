import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import { AddNewPerson } from './src/pages/AddNewPerson'

const Stack = createStackNavigator()

export default function App () {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AddNewPerson"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="AddNewPerson" component={AddNewPerson} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  )
}

type ScreensProp = {
  AddNewPerson: undefined
}

export type StackScreens = StackNavigationProp<ScreensProp>
