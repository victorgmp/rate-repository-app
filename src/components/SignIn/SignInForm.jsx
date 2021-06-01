/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Button from "../Button";

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 15,
  },
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <View style={styles.textInputContainer}>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      </View>
      <Button name="Sign in" onPress={onSubmit} />
    </View>
  );
};

export default SignInForm;
