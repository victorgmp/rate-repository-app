import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as yup from 'yup';

import theme from '../../theme';
import SignInForm from './SignInForm';

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 15,
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username must be greater or equal to 1')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password must be greater or equal to 4')
    .required('Password is required')
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('here', values);
  };
  
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
