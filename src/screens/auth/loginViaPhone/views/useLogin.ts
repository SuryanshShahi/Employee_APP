import {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {loginViaEmail, loginViaPhone, loginViaUpin} from '../../../../schema';
import ScreensName from '../../../../constants/ScreensName';
import {staticNavigation} from '../../../../navigations/StaticNavigation';
const useLogin = (navigation: any, route: any, key?: number) => {
  const initialValuesForPhone = {
    phone: '',
  };
  const initialValuesForUpin = {
    upin: '',
  };
  const initialValuesForEmail = {
    email: '',
  };
  // const {setIsLoggedIn} = useContext(AuthContext);
  const [countryCode, setCountryCode] = useState<any>();
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    touched,
  } = useFormik({
    initialValues:
      key === 0
        ? initialValuesForEmail
        : key === 1
        ? initialValuesForPhone
        : initialValuesForUpin,
    validationSchema:
      key === 0 ? loginViaEmail : key === 1 ? loginViaPhone : loginViaUpin,

    onSubmit: async (data: any) => {
      // userLogin(
      //   ((countryCode?.callingCode[0] &&
      //     countryCode?.callingCode[0] !== undefined &&
      //     `+${countryCode?.callingCode[0]}`) ||
      //     '+91') + data.phone,
      // )
      //   .then(res => {
      //     Toast.show(res?.message + ' : ' + res?.data, Toast.LONG);
      //     staticNavigation.navigate(ScreensName.LOGIN_OTP, {
      //       phone:
      //         ((countryCode?.callingCode[0] &&
      //           countryCode?.callingCode[0] !== undefined &&
      //           `+${countryCode?.callingCode[0]}`) ||
      //           '+91') + data.phone,
      //     });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     setIsError(err?.response?.data?.message);
      //     Toast.show(err?.response?.data?.message, Toast.LONG);
      //   });
      staticNavigation.navigate(ScreensName.LOGIN_OTP, {
        phone:
          ((countryCode?.callingCode[0] &&
            countryCode?.callingCode[0] !== undefined &&
            `+${countryCode?.callingCode[0]}`) ||
            '+91') + data.phone,
      });
    },
  });

  const verifyOtp = (phone?: string) => {
    // verifyUserLoginOTP(phone, otp)
    //   .then(async res => {
    //     const loggedInUserData = await res;
    //     try {
    //       await AsyncStorage.setItem(
    //         'kLoggedIn',
    //         JSON.stringify(loggedInUserData),
    //       );
    //       setIsLoggedIn(true);
    //       navigation.navigate(ScreensName.HOME);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     Toast.show(err?.response?.data?.message, Toast.LONG);
    //   });
    staticNavigation.navigate(ScreensName.SET_PASSWORD, {phone: phone});
  };

  const [otp, setotp] = useState('');
  const [count, setCount] = useState(30);

  useEffect(() => {
    route.name !== ScreensName.LOGIN_OTP && setCount(30);
    route.name === ScreensName.LOGIN_OTP &&
      count > 0 &&
      setTimeout(() => setCount(count - 1), 1000);
  }, [route.name, count]);

  return {
    otp,
    setotp,
    count,
    setCount,
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    verifyOtp,
    setCountryCode,
    countryCode,
    touched,
  };
};

export default useLogin;
