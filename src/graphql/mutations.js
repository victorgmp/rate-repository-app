import { gql } from 'apollo-boost';

import { USER_BASE_FIELDS } from './fragments';

export const SIGN_IN = gql`
  mutation authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
      user {
        ...userBaseFields
      }
    }
  }

  ${USER_BASE_FIELDS}
`;