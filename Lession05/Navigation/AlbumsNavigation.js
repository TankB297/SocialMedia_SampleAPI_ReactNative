import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AlbumsPicture from '../Screens/AlbumsPicture';
import DetailAlbumsPicture from '../Screens/DetailAlbumsPicture';
import DetailPhotos from '../Screens/DetailPhotos';

const Stack = createNativeStackNavigator();
export default function AlbumsNavigation() {
  return (
    <Stack.Navigator initialRouteName="AlbumsMain">
      <Stack.Screen name="AlbumsMain" component={AlbumsPicture} options={{
          headerShown: false
      }} />
      <Stack.Screen name="DetailAlbumsPicture" component={DetailAlbumsPicture} />
      <Stack.Screen name="DetailPhotos" component={DetailPhotos} />
    </Stack.Navigator>
  );
}
