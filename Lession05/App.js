import React from 'react';
import {View,SafeAreaView} from 'react-native';

import MainNavigation from './Navigation/MainNavigation';

export default function App() {
  return (
    <View style={{flex:1}}>
      <MainNavigation />
    </View>
  );
}

