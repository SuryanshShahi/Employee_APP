import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Constants
import ScreensName from '../constants/ScreensName';

// Screens

import Login from '../screens/auth/loginViaPhone/Login';

const {Navigator, Screen} = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Navigator
      initialRouteName={ScreensName.HOME}
      screenOptions={{headerShown: false}}>
      <Screen name={ScreensName.LOGIN} component={Login} />
      {/* <Screen name={ScreensName.HOME} component={HomeScreen} /> */}
    </Navigator>
  );
};

export default HomeNavigator;
