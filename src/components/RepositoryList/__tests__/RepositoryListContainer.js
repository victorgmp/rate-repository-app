import React from 'react';
import { render } from '@testing-library/react-native';

import formatInThousands from '../../../utils/formatInThousands';

import RepositoryListContainer from '../RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      repositories.edges.forEach((edge, index) => {        
        const repo = edge.node;
        
        const repoNames = getAllByTestId('fullname');
        const repoName = repoNames[index];
        expect(repoName).toHaveTextContent(repo.fullName);
  
        const descriptions = getAllByTestId('description');
        const description = descriptions[index];
        expect(description).toHaveTextContent(repo.description);
  
        const languages = getAllByTestId('language');
        const language = languages[index];
        expect(language).toHaveTextContent(repo.language);
  
        const stargazersCounts = getAllByTestId('stargazer-count');
        const stargazersCount = stargazersCounts[index];
        expect(stargazersCount).toHaveTextContent(
          formatInThousands(repo.stargazersCount)
        ); 
  
        const forksCounts = getAllByTestId('forks-count');
        const forksCount = forksCounts[index];
        expect(forksCount).toHaveTextContent(
          formatInThousands(repo.forksCount)
        );
  
        const ratings = getAllByTestId('rating');
        const rating = ratings[index];
        expect(rating).toHaveTextContent(
          formatInThousands(repo.ratingAverage)
        );
  
        const reviewCounts = getAllByTestId('review-count');
        const reviewCount = reviewCounts[index];
        expect(reviewCount).toHaveTextContent(
          formatInThousands(repo.reviewCount)
        );
      });
      
    });
  });
});