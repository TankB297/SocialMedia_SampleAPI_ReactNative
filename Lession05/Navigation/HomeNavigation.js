import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';

const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="HomeScreenMain">
      <Stack.Screen name="HomeScreenMain" component={Home} options={{
          headerShown: false
      }} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
