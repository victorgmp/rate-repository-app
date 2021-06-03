import { useMutation } from '@apollo/react-hooks';

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = (credentials) => {
  const [mutate, result] = useMutation(SIGN_IN, { credentials });

  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: {
        credentials: {
          username, password
        }
      }
    });
  };

  return [signIn, result];
};

export default useSignIn;