import {View} from 'react-native';
import React from 'react';
import AppNavigator from './App/Navigators/AppNavigator';

const App = () => {
  return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <AppNavigator />
      </View>
  );
};

export default App;