import {useFormik} from 'formik';
import ScreensName from '../../../../constants/ScreensName';
import {staticNavigation} from '../../../../navigations/StaticNavigation';
import {setPassword} from '../../../../schema';

const useSetPassword = (route: any) => {
  const initialValues = {
    password: '',
    cpassword: '',
  };
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: setPassword,

    onSubmit: async () => {
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
      staticNavigation.navigate(ScreensName.ENTER_PASSWORD, {
        phone: route?.params?.phone,
      });
    },
  });

  return {
    values,
    errors,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
    touched,
  };
};

export default useSetPassword;
