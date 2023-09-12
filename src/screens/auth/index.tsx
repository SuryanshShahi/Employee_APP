import React from 'react';
import LoginTemplate from './loginTemplate/LoginTemplate';
import {Text, TouchableOpacity, View} from 'react-native';
import tw from '../../utils/tailwind';
import {localizeKey} from '../../global';
import {Image} from 'react-native';
import Config from '../../global/Config';
import {staticNavigation} from '../../navigations/StaticNavigation';
import ScreensName from '../../constants/ScreensName';

const LoginPage = () => {
  return (
    <LoginTemplate>
      <Text style={tw`text-2xl text-black mt-4 font-bold`}>
        {localizeKey('loginToContinue')}
      </Text>

      <View style={tw`gap-5 mt-8`}>
        <TouchableOpacity
          onPress={() =>
            staticNavigation.navigate(ScreensName.LOGIN_VIA_PHONE, {key: 0})
          }
          style={tw`flex-row items-center gap-2 border-[1.5px] p-2 rounded-lg justify-center`}>
          <Image source={Config.email} style={tw`h-4 w-4`} />
          <Text style={tw`text-base font-semibold text-black`}>
            Login Via Email
          </Text>
          <Image source={Config.darkArrowRight} style={tw`h-[18px] w-[18px]`} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            staticNavigation.navigate(ScreensName.LOGIN_VIA_PHONE, {key: 1})
          }
          style={tw`flex-row items-center gap-2 border-[1.5px] p-2 rounded-lg justify-center`}>
          <Image source={Config.call} style={tw`h-4 w-4`} />
          <Text style={tw`text-base font-semibold text-black`}>
            Login Via Phone
          </Text>
          <Image source={Config.darkArrowRight} style={tw`h-[18px] w-[18px]`} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            staticNavigation.navigate(ScreensName.LOGIN_VIA_PHONE, {key: 2})
          }
          style={tw`flex-row items-center gap-2 border-[1.5px] p-2 rounded-lg justify-center`}>
          <Image source={Config.upin} style={tw`h-4 w-4`} />
          <Text style={tw`text-base font-semibold text-black`}>
            Login Via UPIN
          </Text>
          <Image source={Config.darkArrowRight} style={tw`h-[18px] w-[18px]`} />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-col items-center mb-5 mt-10`}>
        <Text style={tw`text-[10px] font-medium text-gray800`}>
          {localizeKey('footer')}
        </Text>
        <View style={tw`flex-row gap-x-1`}>
          <Text style={tw`font-medium underline text-[10px] text-gray800`}>
            {localizeKey('termsOfService')}
          </Text>
          <Text style={tw`font-medium text-[10px] text-gray800`}>,</Text>
          <Text style={tw`font-medium underline text-[10px] text-gray800`}>
            {localizeKey('privacyPolicy')}
          </Text>
          <Text style={tw`font-medium text-[10px] text-gray800`}>&</Text>
          <Text style={tw`font-medium underline text-[10px] text-gray800`}>
            {localizeKey('contentPolicy')}
          </Text>
        </View>
      </View>
    </LoginTemplate>
  );
};

export default LoginPage;
