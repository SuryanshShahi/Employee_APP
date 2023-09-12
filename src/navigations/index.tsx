import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

// Navigation Ref
import {navigationRef} from './StaticNavigation';

// Constants
import ScreensName from '../constants/ScreensName';

// Screens
import BottomNavigation from './BottomNavigation';
import LoginViaPhone from '../screens/auth/loginViaPhone/Login';
import {AuthContext} from '../App';
import LoginOtp from '../screens/auth/loginViaPhone/LoginOtp';
import SetPassword from '../screens/auth/setPassword/SetPassword';
import EnterPassword from '../screens/auth/enterPassword/EnterPassword';
import LoginPage from '../screens/auth';

const {Navigator, Screen} = createNativeStackNavigator();

export const LoginNavigator = () => (
  <Navigator
    initialRouteName={ScreensName.LOGIN}
    screenOptions={{headerShown: false}}>
    <Screen name={ScreensName.LOGIN} component={LoginPage} />
    <Screen name={ScreensName.LOGIN_VIA_PHONE} component={LoginViaPhone} />
    <Screen name={ScreensName.LOGIN_OTP} component={LoginOtp} />
    <Screen name={ScreensName.SET_PASSWORD} component={SetPassword} />
    <Screen name={ScreensName.ENTER_PASSWORD} component={EnterPassword} />
  </Navigator>
);

export const HomeNavigator = () => {
  return (
    <Navigator
      initialRouteName={ScreensName.BOTTOM_NAVIGATION}
      screenOptions={{headerShown: false}}>
      {/* <Screen name={ScreensName.HOME} component={HomeScreen} /> */}

      <Screen
        name={ScreensName.BOTTOM_NAVIGATION}
        component={BottomNavigation}
      />
    </Navigator>
  );
};

export const AppNavigator = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? <HomeNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
