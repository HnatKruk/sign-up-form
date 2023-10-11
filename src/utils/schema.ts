import * as yup from 'yup';

export const schema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .matches(/^[A-Za-zÀ-ÿ]+$/, 'Only letters are allowed in the username')
    .min(2, 'Username must be at least 2 characters')
    .max(20, 'Username must be no more than 20 characters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format'),

  phone: yup
    .string()
    .when({
      is: (phone: string) => phone.length > 0,
      then: (schema) => schema
        .min(13, 'Phone number must be 13 numbers')
        .max(13, 'Phone number must be 13 numbers')
        .matches(
          /^[0-9+]+$/,
          'Phone number must contain only numbers and the plus symbol (+)'
        ),
      otherwise: (schema) => schema,
    })
    .when('communication', {
      is: 'phone',
      then: (schema) => schema
        .required('Phone is required if you choose communication by phone')
        .min(13, 'Phone number must be 13 numbers')
        .max(13, 'Phone number must be 13 numbers')
        .matches(
          /^[0-9+]+$/,
          'Phone number must contain only numbers and the plus symbol (+)'
        ),
      otherwise: (schema) => schema,
    }),

  communication: yup
    .string(),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be no more than 20 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),

  confirmPassword: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be no more than 20 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .oneOf([yup.ref('password')], 'Passwords must match'),

  addCountry: yup.boolean(),

  country: yup
    .string()
    .when('addCountry', {
      is: true,
      then: (schema) => schema.required('Your country must be selected if toggle "Add your address" is On'),
      otherwise: (schema) => schema,
    }),

  city: yup
    .string()
    .when('addCountry', {
      is: true,
      then: (schema) => schema.required('Your city must be selected if toggle "Add your address" is On'),
      otherwise: (schema) => schema,
    })
    .when('country', {
      is: '',
      then: (schema) => schema.required('Your country must be selected'),
      otherwise: (schema) => schema,
    }),

  rememberMe: yup
    .boolean(),
});
