import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../Screens/Users';
import DetailUser from '../Screens/DetailUser';
import UserTodos from '../Screens/UserTodos';
import UserAlbums from '../Screens/UserAlbums';
import UserAlbumsDetail from '../Screens/UserAlbumsDetail';
import UserAlbumsDetailPhotos from '../Screens/UserAlbumsDetailPhotos';

const Stack = createNativeStackNavigator();
export default function UserNavigation() {
  return (
    <Stack.Navigator initialRouteName="UserMain">
      <Stack.Screen name="UserMain" component={Users} options={{
          headerShown: false
      }} />
      <Stack.Screen name="DetailUser" component={DetailUser} />
      <Stack.Screen name="UserTodos" component={UserTodos} />
      <Stack.Screen name="UserAlbums" component={UserAlbums} />
      <Stack.Screen name="UserAlbumsDetail" component={UserAlbumsDetail} />
      <Stack.Screen name="UserAlbumsDetailPhotos" component={UserAlbumsDetailPhotos} />
    </Stack.Navigator>
  );
}
