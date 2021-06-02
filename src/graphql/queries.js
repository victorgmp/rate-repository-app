// import { gql } from 'apollo-boost';
// import { REPOSITORY_INFO } from './fragments';

// export const GET_REPOSITORIES = gql`
//   query {
//     repositories {
//       edges {
//         node {
//           ...RepositoriesInfo
//         }
//       }
//     }
//   }
//   ${REPOSITORY_INFO}
// `;
import { gql } from "apollo-boost";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          forksCount
          stargazersCount
          ownerAvatarUrl
          description
          language
        }
      }
    }
  }
`;