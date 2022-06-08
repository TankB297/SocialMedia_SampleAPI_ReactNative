import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import AlbumsNavigation from './AlbumsNavigation';
import TodoList from '../Screens/TodoList';
import UserNavigation from './UserNavigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Albums') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'Todos') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Users') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2BC837',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Albums" component={AlbumsNavigation} />
      <Tab.Screen name="Todos" component={TodoList} />
      <Tab.Screen name="Users" component={UserNavigation} />
    </Tab.Navigator>
  );
};
export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Tabbar}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
