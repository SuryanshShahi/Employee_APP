import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreensName from '../constants/ScreensName';
import {BottomNavigationComponent} from './BottomNavigationComponent';
import HomeNavigator from './HomeNavigaton';

const {Navigator, Screen} = createBottomTabNavigator();
const ROOT_ROUTES: string[] = [ScreensName.HOME];

export const TabBarVisibilityOptions = ({
  route,
}: any): {tabBarVisible: boolean} => {
  const isNestedRoute: boolean = route.state?.index > 0;
  const isRootRoute: boolean = ROOT_ROUTES.includes(route.name);
  return {tabBarVisible: isRootRoute && !isNestedRoute};
};
const BottomNavigation = () => {
  return (
    <Navigator
      // @ts-ignore
      screenOptions={(TabBarVisibilityOptions, {headerShown: false})}
      initialRouteName={ScreensName.HOME}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={prop => <BottomNavigationComponent {...prop} />}>
      {/* <Screen name={ScreensName.BOTTOM_NAVIGATION} component={} /> */}
      <Screen name={ScreensName.HOME} component={HomeNavigator} />
      {/* <Screen name={ScreensName.DELIVERY} component={Delivery} /> */}
    </Navigator>
  );
};

export default BottomNavigation;
