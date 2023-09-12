import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Config from '../../../global/Config';
import tw from '../../../utils/tailwind';
import {Button} from '../../../components';
import {Text} from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import useLogin from './views/useLogin';
import {localizeKey} from '../../../global';
import {staticNavigation} from '../../../navigations/StaticNavigation';
import LoginTemplate from '../loginTemplate/LoginTemplate';
const LoginOtp = ({navigation, route}: any) => {
  const {otp, setotp, count, setCount, verifyOtp} = useLogin(navigation, route);

  return (
    <LoginTemplate isBottomTextVisible>
      <Text style={tw`text-2xl font-bold mt-4`}>Verify Phone Number</Text>

      <View>
        <Text style={tw`text-sm max-w-[249px] mt-2 font-medium text-[#4C5359]`}>
          {localizeKey('verification')}
        </Text>
        <TouchableOpacity
          onPress={() => {
            staticNavigation.goBack();
            setotp('');
          }}
          style={tw`flex-row items-center self-start`}>
          <Text style={tw`font-bold text-sm text-[#4C5359]`}>
            {route?.params?.phone} &nbsp;
          </Text>
          <Image
            source={Config.edit}
            style={tw`h-[13px] w-[13px]`}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <OTPInputView
          style={tw`h-11 my-6`}
          pinCount={6}
          code={otp}
          onCodeChanged={e => setotp(e)}
          codeInputFieldStyle={tw`rounded-lg mb-auto h-11 text-base font-bold w-11 border-2 border-neutral-800 text-black ${
            otp?.length === 6 ? 'border-secondary' : ''
          }`}
          codeInputHighlightStyle={tw`border-secondary`}
          autoFocusOnLoad={false}
        />
        <View style={tw`flex-row gap-1 justify-center`}>
          <Text style={tw`text-[#4C5359] text-xs`}>
            {localizeKey('otpNotReceived')}
          </Text>
          <TouchableOpacity onPress={() => setotp('')}>
            <Text
              style={tw`${
                count === 0 ? 'font-bold' : ''
              } text-[#4C5359] text-xs`}
              disabled={count === 0 ? false : true}
              onPress={() => {
                setotp('');
                setCount(30);
              }}>
              {localizeKey('resendAgain')}
            </Text>
          </TouchableOpacity>
          <Text
            style={tw`text-[#4C5359] text-xs ${count === 0 ? 'hidden' : ''}`}>
            (in {count} sec)
          </Text>
        </View>
      </View>

      <Button
        action={() => verifyOtp(route?.params?.phone)}
        btnName="Continue"
        className={'text-lg'}
        disabled={otp.length === 6 ? false : true}
        bgColor={'ml-auto my-8 w-full'}
        iconClass="h-[18px] w-[18px]"
        icon={
          otp.length === 6 ? Config.lightArrowRight2 : Config.greyArrowRight2
        }
      />
    </LoginTemplate>
  );
};

export default LoginOtp;
