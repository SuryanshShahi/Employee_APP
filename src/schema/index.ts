import * as Yup from 'yup';

export const walkInSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(25)
    .required('This field is mandatory')
    .matches(/^[a-zA-Z ]+$/, 'Name cannot have special characters')
    .strict(true),
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is mandatory'),
  phone: Yup.string()
    .required('This field is mandatory')
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter valid number.',
      excludeEmptyString: false,
    }),
  companyName: Yup.string().min(2).required('This field is mandatory'),
});

export const hostMeeting = Yup.object({
  upin: Yup.string()
    .length(7, 'UPIN must be exactly 7 characters')
    .required('This field is mandatory')
    .matches(/^[a-zA-Z][a-zA-Z0-9/]*$/, 'UPIN cannot have special characters')
    .strict(true),
});

export const preApprovedSchema = Yup.object({
  vpin: Yup.string()
    .length(7, 'VPIN must be exactly 7 characters')
    .required('This field is mandatory')
    .matches(/^[a-zA-Z][a-zA-Z0-9/]*$/, 'VPIN cannot have special characters')
    .strict(true),
});

export const loginViaPhone = Yup.object({
  phone: Yup.string()
    .required('This field is mandatory')
    .matches(/^[6-9]\d{9}$/, {
      message: 'Please enter valid number.',
      excludeEmptyString: false,
    }),
});
export const loginViaEmail = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('This field is mandatory'),
});
export const loginViaUpin = Yup.object({
  upin: Yup.string()
    .length(7, 'UPIN must be exactly 7 characters')
    .required('This field is mandatory')
    .matches(/^[a-zA-Z][a-zA-Z0-9/]*$/, 'UPIN cannot have special characters')
    .strict(true),
});

export const setPassword = Yup.object({
  password: Yup.string()
    .min(8)
    .required('This field is mandatory')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
      message: 'please enter a strong password',
      excludeEmptyString: false,
    }),
  cpassword: Yup.string()
    .required('This field is mandatory')
    .oneOf([Yup.ref('password')], 'Password must match'),
});
