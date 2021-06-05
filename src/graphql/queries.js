import { gql } from 'apollo-boost';

import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...repositoryBaseFields
          ratingAverage
          reviewCount
        }
      }
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      ...userBaseFields
    }
  }

  ${USER_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      url
      ...repositoryBaseFields
    }
  }
  ${REPOSITORY_BASE_FIELDS}
`;