/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';

import {Image} from 'react-native';
import {Container} from '../../../components';
import Config from '../../../global/Config';
import {height} from '../../../utils/constants';
import tw from '../../../utils/tailwind';
import {localizeKey} from '../../../global';
const LoginTemplate = ({children, isBottomTextVisible}: any) => {
  return (
    <Container isSafeArea={false}>
      <ImageBackground
        source={Config.empBg}
        resizeMode="cover"
        style={{
          width: '100%',
          height: height && height / 2,
        }}
      />
      <View
        style={tw`absolute bg-white rounded-3xl h-1/2 w-full bottom-0 px-4 mb-3`}>
        <View style={tw`rounded-lg absolute -mt-6 bg-white self-center px-3`}>
          <Image
            source={Config.logo}
            style={tw`w-10 h-11`}
            resizeMode="center"
          />
        </View>
        <ScrollView style={tw`mt-8`}>
          <View onStartShouldSetResponder={() => true}>{children}</View>

          {isBottomTextVisible && (
            <>
              <View style={tw`flex-row gap-x-2 justify-center items-center`}>
                <View style={tw`h-[1px] bg-gray500 w-[20%]`} />
                <Text style={tw`text-base`}>or</Text>
                <View style={tw`h-[1px] bg-gray500 w-[20%]`} />
              </View>
              <Text
                style={tw`text-center text-base font-semibold mb-5 mt-2 text-primary`}>
                Try other ways to login
              </Text>
              <View style={tw`flex-col items-center mb-8`}>
                <Text style={tw`text-[10px] font-medium text-gray800`}>
                  {localizeKey('footer')}
                </Text>
                <View style={tw`flex-row gap-x-1`}>
                  <Text
                    style={tw`font-medium underline text-[10px] text-gray800`}>
                    {localizeKey('termsOfService')}
                  </Text>
                  <Text style={tw`font-medium text-[10px] text-gray800`}>
                    ,
                  </Text>
                  <Text
                    style={tw`font-medium underline text-[10px] text-gray800`}>
                    {localizeKey('privacyPolicy')}
                  </Text>
                  <Text style={tw`font-medium text-[10px] text-gray800`}>
                    &
                  </Text>
                  <Text
                    style={tw`font-medium underline text-[10px] text-gray800`}>
                    {localizeKey('contentPolicy')}
                  </Text>
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </Container>
  );
};

export default LoginTemplate;
