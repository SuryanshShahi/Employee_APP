import React from 'react';
import LoginTemplate from '../loginTemplate/LoginTemplate';
import {Text, View} from 'react-native';
import tw from '../../../utils/tailwind';
import Config from '../../../global/Config';
import useSetPassword from './views/useSetPassword';
import {Button, InputField} from '../../../components';
import {Image} from 'react-native';

const SetPassword = ({route}: any) => {
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    touched,
  } = useSetPassword(route);

  return (
    <LoginTemplate>
      <View>
        <Text style={tw`text-2xl text-black font-bold mt-5`}>Set Password</Text>
        <View style={tw`flex-row gap-x-2 mt-3`}>
          <Image
            source={Config.danger}
            resizeMode="contain"
            style={tw`h-6 w-[13px]`}
          />
          <Text style={tw`text-black text-sm mr-5`}>
            Your password must be at least 8 characters including a lowercase
            letter, an uppercase letter, and a number
          </Text>
        </View>

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
          <InputField
            value={values.cpassword}
            icon={Config.password}
            onChange={handleChange('cpassword')}
            clear={() => {
              setFieldValue('cpassword', '');
            }}
            placeholder="Confirm Password"
            label="Confirm Password"
            errorMessage={
              errors.cpassword && touched.cpassword ? errors.cpassword : ''
            }
            onBlur={handleBlur('cpassword')}
            required
            type="password"
            success="password"
            focusIcon={Config.passwordDark}
          />
        </View>

        <Button
          action={handleSubmit}
          btnName="Continue"
          className={'text-lg'}
          disabled={
            !errors.password &&
            !errors.cpassword &&
            values.password &&
            values.cpassword
              ? false
              : true
          }
          bgColor={'ml-auto my-8 w-full'}
          iconClass="h-[18px] w-[18px]"
          icon={
            !errors.password &&
            !errors.cpassword &&
            values.password &&
            values.cpassword
              ? Config.lightArrowRight2
              : Config.greyArrowRight2
          }
        />
      </View>
    </LoginTemplate>
  );
};

export default SetPassword;
