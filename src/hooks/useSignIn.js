import { useMutation, useApolloClient } from '@apollo/react-hooks';

import { SIGN_IN } from "../graphql/mutations";

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = (credentials) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN, { credentials });

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username, password
        }
      }
    });
    
    if (data && data.authorize) {
      await authStorage.setAccessToken(data.authorize.accessToken);
      apolloClient.resetStore();
    }

    return data;
  };

  return [signIn, result];
};

export default useSignIn;