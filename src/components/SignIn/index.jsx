import React from 'react';
import { useHistory } from "react-router-native";
import * as yup from 'yup';

import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log('data', data);

      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    />
  );
};

export default SignIn;
