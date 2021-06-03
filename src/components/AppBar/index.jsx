import React, { useContext } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';

import theme from '../../theme';
import { AUTHORIZED_USER } from '../../graphql/queries';
import AuthStorageContext from '../../contexts/AuthStorageContext';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: 'row',
  },
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>Repositories</Link>
        {data?.authorizedUser ? (
          <Link to="/sign-in" component={AppBarTab} onPress={logout}>Sign out</Link>
        ) : (
          <Link to="/sign-in" component={AppBarTab}>Sign in</Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
