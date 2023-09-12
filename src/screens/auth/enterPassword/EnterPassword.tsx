import React from 'react';
import LoginTemplate from '../loginTemplate/LoginTemplate';
import {Text, TouchableOpacity, View} from 'react-native';
import {staticNavigation} from '../../../navigations/StaticNavigation';
import tw from '../../../utils/tailwind';
import Config from '../../../global/Config';
import {Image} from 'react-native';
import {Button, InputField} from '../../../components';
import useEnterPassword from './views/useEnterPassword';

const EnterPassword = ({route}: any) => {
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    touched,
  } = useEnterPassword(route);
  return (
    <LoginTemplate isBottomTextVisible>
      <TouchableOpacity
        onPress={() => {
          staticNavigation.goBack();
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
      <View>
        <Text style={tw`text-2xl text-black font-bold mt-3`}>
          Enter Password
        </Text>

        <View style={tw`gap-2 mt-5`}>
          <InputField
            value={values.password}
            icon={Config.password}
            onChange={handleChange('password')}
            clear={() => {
              setFieldValue('password', '');
            }}
            placeholder="Enter Password"
            label="Password"
            errorMessage={
              errors.password && touched.password ? errors.password : ''
            }
            onBlur={handleBlur('password')}
            required
            type="password"
            success="password"
            focusIcon={Config.passwordDark}
          />
          <Text style={tw`text-sm font-medium text-black ml-auto`}>
            Forgot Password?
          </Text>
        </View>

        <Button
          action={handleSubmit}
          btnName="Continue"
          className={'text-lg'}
          disabled={
            !errors.password && values.password.length > 7 ? false : true
          }
          bgColor={'ml-auto my-8 w-full'}
          iconClass="h-[18px] w-[18px]"
          icon={
            !errors.password && values.password.length > 7
              ? Config.lightArrowRight2
              : Config.greyArrowRight2
          }
        />
      </View>
    </LoginTemplate>
  );
};

export default EnterPassword;
