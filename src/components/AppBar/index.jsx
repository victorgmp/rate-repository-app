import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/react-hooks';

import theme from '../../theme';
import { GET_AUTHORIZED_USER } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage';

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
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const history = useHistory();

  const { data } = useQuery(GET_AUTHORIZED_USER);
  const authorizedUser = data ? data.authorizedUser : undefined;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };
  
  {/* <Link to="/sign-in" component={AppBarTab} onPress={logout}>Sign out</Link> */ }
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to="/" component={AppBarTab}>
          Repositories
      </Link>
        {authorizedUser ? (
          <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
        ) : (
          <Link to="/sign-in" component={AppBarTab}>
            Sign in
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
