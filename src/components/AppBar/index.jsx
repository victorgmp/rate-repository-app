import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

import theme from '../../theme';
import AppBarTab from './appBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    paddingBottom: 15,
    paddingLeft: 10,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <AppBarTab name={'Repositories'} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
