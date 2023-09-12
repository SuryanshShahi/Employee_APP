import React from 'react';
import {Text, View} from 'react-native';
import Config from '../../../global/Config';
import tw from '../../../utils/tailwind';
import {Button, InputField} from '../../../components';
import useLogin from './views/useLogin';
import {localizeKey} from '../../../global';
import LoginTemplate from '../loginTemplate/LoginTemplate';
const Login = ({navigation, route}: any) => {
  const key = route?.params?.key;
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setCountryCode,
    countryCode,
    touched,
  } = useLogin(navigation, route, key);
  const isBtnActive =
    key === 0
      ? values.email.length > 0 && !errors?.email
        ? false
        : true
      : key === 1
      ? values.phone.length > 0 && !errors?.phone
        ? false
        : true
      : key === 2
      ? values.upin.length > 0 && !errors?.upin
        ? false
        : true
      : true;

  return (
    <LoginTemplate isBottomTextVisible>
      <Text style={tw`text-2xl text-black mt-4 font-bold`}>
        {localizeKey('loginToContinue')}
      </Text>

      <View style={tw`mt-3`}>
        {key === 1 ? (
          <InputField
            value={values.phone}
            icon={Config.call}
            onChange={e => setFieldValue('phone', e)}
            clear={() => {
              setFieldValue('phone', '');
            }}
            placeholder="Enter Phone Number"
            label="Phone Number"
            type="numeric"
            errorMessage={errors.phone}
            onBlur={handleBlur('phone')}
            maxLength={10}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            required
            isPhoneNumber
          />
        ) : key === 0 ? (
          <InputField
            value={values.email}
            icon={Config.message}
            onChange={e => setFieldValue('email', e)}
            clear={() => {
              setFieldValue('email', '');
            }}
            placeholder="Enter Email"
            label="Email"
            errorMessage={errors.email && touched.email ? errors.email : ''}
            onBlur={handleBlur('email')}
            required
            type="email-address"
            focusIcon={Config.messageDark}
          />
        ) : key === 2 ? (
          <InputField
            value={values.upin}
            icon={Config.upinLight}
            onChange={e => setFieldValue('upin', e)}
            clear={() => {
              setFieldValue('upin', '');
            }}
            placeholder="Enter UPIN"
            label="UPIN"
            errorMessage={errors.upin && touched.upin ? errors.upin : ''}
            onBlur={handleBlur('upin')}
            required
            type="default"
            capitalize
            maxLength={7}
            focusIcon={Config.messageDark}
          />
        ) : null}
      </View>

      <Button
        action={handleSubmit}
        btnName="Continue"
        className={'text-lg'}
        disabled={isBtnActive}
        bgColor={'ml-auto mt-5 mb-8 w-full'}
        iconClass="h-[18px] w-[18px]"
        icon={!isBtnActive ? Config.lightArrowRight2 : Config.greyArrowRight2}
      />
    </LoginTemplate>
  );
};

export default Login;
