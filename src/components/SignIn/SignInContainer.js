import React from 'react';
import { Formik } from 'formik';

import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const SignInContainer = ({ onSubmit, validationSchema }) => (
  <Formik
  initialValues={initialValues}
  onSubmit={onSubmit}
  validationSchema={validationSchema}
>
  {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
</Formik>
);

export default SignInContainer;
